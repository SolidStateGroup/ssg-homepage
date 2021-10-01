// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
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
}

export interface Prospect {
    logo: string;
    title: string,
    company: string,
    ios_rating: number;
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
type UseDataType = {data:Prospect|undefined, setMeta:(key:ProspectKey, v:any)=>void, meta: Prospect|undefined}
export default function useData(title, onErr):UseDataType {
    const [isReady, setIsReady] = useState(data[title]);
    const [meta, setMeta] = useState<Prospect>(metas[title]);
    const listener = useRef();
    useEffect(() => {
        if (!title) return;
        const docRef = doc(db, 'clients', title);
        if (listener.current) listener.current();
        listener.current = onSnapshot(docRef, (res) => {
            data[title] = res.data();
            if (!data[title]) {
                onErr && onErr();
                return;
            }
            metas[title] = metas[title]? {
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
    return {
        data: data[title],
        meta,
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
    return useData(r.query.id, onErr);
}
