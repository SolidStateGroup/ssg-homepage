// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import { alert } from 'ionicons/icons';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDyxgFSb7FTTFe245jy9gFn6-M0vvsc0G0',
    authDomain: 'ssg-prospects.firebaseapp.com',
    projectId: 'ssg-prospects',
    storageBucket: 'ssg-prospects.appspot.com',
    messagingSenderId: '304528259521',
    appId: '1:304528259521:web:740408b1076dbb257d1740',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const rootRef = collection(db, 'clients');

// Initialize Firebase
const data = {};
const metas = {};

export interface Insight {
    title: string;
    text: string;
}

export interface Rebuild {
    name: string;
    hours: number;
    checked: boolean;
}

export interface Prospect {
    logo: string;
    title: string,
    company: string,
    year1AddedMonths: number,
    ios_rating: number;
    years_roadmap: number;
    android_number_of_ratings: number;
    ios_number_of_ratings: number;
    android_rating: number;
    release_date: string;
    latest_release_date: string;
    releases_per_year: number;
    android_build_cost: number;
    ios_build_cost: number;
    ios_monthly_cost: number;
    android_monthly_cost: number;
    insights: Insight[];
    rebuild: Rebuild[];
}
type ProspectKey = keyof Prospect; // "id" | "text" | "due"
type UseDataType = {
  data:Prospect|undefined,
  setMeta:(key:ProspectKey, v:any)=>void,
  meta: Prospect|undefined,
  rate: number,
    year1MaintenanceCost: number
  totalDevelopmentHours: number
  totalDevelopmentCost: number
    monthsSinceRelease:number,
    totalBuildCostAndroid:number,
    totalBuildCostIOS:number,
    totalBuildCost: number,
    totalNewMonthlyCost: number
    totalSavings: number
    totalMonthlyCost: number
    totalCost: number,
}
const rate = 120;
export default function useData(title, onErr):UseDataType {
    const [isReady, setIsReady] = useState(data[title]);
    const [meta, setMeta] = useState<Prospect>(metas[title]);
    const listener = useRef();
    useEffect(() => {
        if (!title) return;
        const docRef = doc(db, 'clients', title);
        if (listener.current) listener.current();
        listener.current = onSnapshot(docRef, (res) => {
            let costsChanged = false
            const prevData = data[title];
            const newData = res.data();
            if (prevData) {
                if (
                  newData.android_monthly_cost !== prevData.android_monthly_cost ||
                  newData.android_build_cost !== prevData.android_build_cost ||
                  newData.ios_monthly_cost !== prevData.ios_monthly_cost ||
                  newData.ios_build_cost !== prevData.ios_build_cost
                ) {
                    costsChanged = true
                }
            }
            data[title] = newData;
            if (!data[title]) {
                onErr && onErr();
                return;
            }
            metas[title] = metas[title] && !costsChanged? {
                ...data[title],
                android_monthly_cost: metas[title].android_monthly_cost,
                android_build_cost: metas[title].android_build_cost,
                ios_monthly_cost: metas[title].ios_monthly_cost,
                ios_build_cost: metas[title].ios_build_cost
            } as Prospect  :{
                ...data[title]
            }
            setMeta(metas[title]);
            setIsReady(data[title]);
        });
        return () => {
            if (listener.current) listener.current();
        };
    }, [title]);
    let hours = useMemo(()=>{
      let hours = 0;
      meta?.rebuild?.map((v) => {
        if (v.checked) {
          hours += v.hours;
        }
      });
      return hours
    },[meta]);


    const dateDiff = meta?.release_date && moment().diff(moment(meta?.release_date, "DD/MM/YYYY"));
    const monthsSinceRelease = Math.round(dateDiff/2.628e+9);
    const totalBuildCostAndroid = (meta?.android_monthly_cost * monthsSinceRelease);
    const totalBuildCostIOS = (meta?.ios_monthly_cost * monthsSinceRelease);
    const totalMonthlyCost = (meta?.android_monthly_cost+meta?.ios_monthly_cost);
    const totalCost = meta?.ios_build_cost + meta?.android_build_cost + totalBuildCostAndroid + totalBuildCostIOS;
    const totalDevelopmentCost = hours*rate;
    const totalNewMonthlyCost = (meta?.android_monthly_cost+meta?.ios_monthly_cost)*.5
    const totalExistingRoadmapCost = (totalMonthlyCost * (meta?.years_roadmap*12));
    const year1MaintenanceCost = (typeof meta?.year1AddedMonths === "number"? meta?.year1AddedMonths : 4 ) * totalNewMonthlyCost
    const totalNewRoadmapCost = (totalDevelopmentCost + year1MaintenanceCost + (totalNewMonthlyCost * (meta?.years_roadmap*12)));
    const totalSavings = totalExistingRoadmapCost - totalNewRoadmapCost;
    return {
        data: data[title],
        meta,
        totalDevelopmentHours: hours,
        year1MaintenanceCost,
        rate,
        totalDevelopmentCost,
        monthsSinceRelease,
        totalBuildCostAndroid,
        totalBuildCostIOS,
        totalBuildCost: totalBuildCostAndroid+totalBuildCostIOS,
        totalNewMonthlyCost,
        totalSavings,
        totalMonthlyCost,
        totalCost,
        setMeta: (key, v) => {
            const newMeta = {
                ...meta,
                [key]: v,
            };
            metas[title] = newMeta
            setMeta(newMeta);
        },
    };
}
export function useRouterData(onErr?:()=>{}):UseDataType {
    const r = useRouter();
    return useData(r.query.id, () => r.replace('/404'));
}
