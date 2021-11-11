import React, { FunctionComponent, useEffect, useRef } from 'react';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle, ChartConfiguration,
} from 'chart.js';


import { borderColor } from 'polished';
import Page from '../../components/Page'; // we need this to make JSX compile
import RNConversionSidebar from '../../components/RNConversionSidebar';
import { useStep } from '../../common/converstion-steps';
import { useRouterData } from '../../common/useData';
import CardBuildCosts from '../../components/CardBuildCosts';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
);

type ComponentType = {}


const config: ChartConfiguration = data => ({
    type: 'line',
    data,
    options: {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                titleColor: '#786F84',
                bodyColor: 'rgba(255,255,255,0.8)',
                titleFont: {
                    weight: '400',
                },
                bodyFont: {
                    size: 11,
                },
                backgroundColor: 'rgba(62,55,73,0.8)',
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'rgba(120,111,132,0.8)',
                    align: 'center',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                display: true,
                grid: {
                    borderWidth: 0,
                    color: 'rgba(120,111,132,0.8)',
                },
                ticks: {
                    padding: 5,
                    color: 'rgba(120,111,132,0.8)',
                    maxTicksLimit: 7,
                    callback: (value) => {
                        return Utils.nFormatter(value);
                    },
                },
                position: 'left',
            },
            y1: {
                display: false,
                ticks: {
                    maxTicksLimit: 7,
                    callback: (value) => {
                        return Utils.nFormatter(value);
                    },
                },
                position: 'left',
            },
        },
    },
});
const chartRef = React.createRef();

const TheComponent: FunctionComponent<ComponentType> = ({}) => {
    const { nav } = useStep();
    const { meta, totalDevelopmentCost, totalNewMonthlyCost, totalMonthlyCost, totalSavings, year1MaintenanceCost } = useRouterData();
    useEffect(() => {
        if (!meta) return;
        const arr = new Array(meta?.years_roadmap + 1).fill(0);
        const data:ChartConfiguration['data'] = {
            labels: arr.map((_, v) => {
                if (!v) return 'Today';
                return `${v} Year${v !== 1 ? 's' : ''}`;
            }),
            datasets: [
                {
                    label: 'React Native',
                    data: arr.map((_, v) => {
                        if (!v) return 0;
                        return (totalDevelopmentCost + year1MaintenanceCost) + (totalNewMonthlyCost * ((v - 1) * 12));
                    }),
                    borderColor: '#1AC0C6',
                    backgroundColor: 'white',
                    pointRadius: 0,
                    borderWidth: 2,
                    yAxisID: 'y',
                },
                {
                    label: 'Native Apps',
                    data: arr.map((_, v) => {
                        if (!v) return 0;
                        return totalMonthlyCost * (v * 12);
                    }),
                    borderColor: '#D02D55',
                    pointRadius: 0,
                    borderWidth: 2,
                    backgroundColor: 'white',
                    yAxisID: 'y',
                },
            ],
        };
        const ctx = document.getElementById('myChart').getContext('2d');
        chartRef.current = new Chart(ctx, config(data));
        return () => {
            chartRef?.current?.destroy();
        };
    }, [meta]);
    return (
        <Page title={Constants.titles.reactNativeConversionCalculator} canonical="">

            <div className="container-fluid rncc__bg">
                <div className="row">
                    <RNConversionSidebar/>

                    <main role="main" className="col-md-12 ml-sm-auto col-lg-9 px-md-4 fade-in rncc__main mt-md-0 mt-5">

                        <CardBuildCosts className="card-build-costs__react mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="text-light mt-md-0">Cost savings over the next 10 years</h1>
                                <h2 className="hero__title--large hero__title--primary">{meta ? Utils.money(totalSavings) : '...'}</h2>
                            </div>
                            <div className="col-md-6">
                                <p className="text-light">By rewriting your application into React Native you could save up to 50% of the development time not only for monthly maintenance but also for any new major features you intend on developing in the future. These costs are just for this one application, imagine the savings over all apps you own or intend to build in the future.</p>
                            </div>
                        </div>
                        </CardBuildCosts>

                        <div className="pb-5 mb-5">
                            <canvas id="myChart" width="600" height="200" />
                        </div>

                        {nav}

                    </main>
                </div>
            </div>


        </Page>
    );
};

export default TheComponent;
