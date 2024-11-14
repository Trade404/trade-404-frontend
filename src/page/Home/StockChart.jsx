import { Button } from "@/components/ui/button";
import { fetchMarketChart } from "@/state/coin/Action";
import { store } from "@/state/Store";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";

const StockChart = ({coinId}) => {

    const dispatch = useDispatch()
    const {coin} = useSelector(store => store)

    const[activeLable, setActiveLable] = useState("1 day")

    const series = [
        {
            data:coin.marketChart.data
        }
    ]

    const timeSeries = [
        {
            keyword: "DIGITAL_CURRENCY_DAILY",
            key: "Daily Time Series",
            lable: "1 day",
            value: 1
        },
        {
            keyword: "DIGITAL_CURRENCY_WEEKLY",
            key: "Weekly Time Series",
            lable: "1 week",
            value: 7
        },
        {
            keyword: "DIGITAL_CURRENCY_MONTHLY",
            key: "Monthly Time Series",
            lable: "1 month",
            value: 30
        }
    ]

    const options = {
        chart: {
            id:"area-datetime",
            type:"area",
            height:450,
            zoon:{
                autoScaleYAxis:true
            }
        },
        dataLabels: {
            enabled:false
        },
        xaxis: {
            type:"datetime",
            tickAmount:6
        },
        colors:["#758AA2"],
        markers: {
            colors:["#fff"],
            strokeColor:"#fff",
            size:0,
            strokeWidth:1,
            strokeDashArray:0,
            style:"hollow"
        },
        tooltip: {
            theme:"dark"
        },
        fill: {
            type:"gradient",
            gradient: {
                shadeIntensity:1,
                opacityFrom:0.7,
                opacityTo:0.9,
                stops:[0,100]
            }
        },
        grid:{
            borderColor:"#47535E",
            strokeDashArray:4,
            show:true
        }
    }

    const handleActiveLable = (value) => {
        setActiveLable(value)
    }

    useEffect(() => {
        dispatch(fetchMarketChart({coinId, days:30, jwt:localStorage.getItem('jwt')}))
    },[dispatch, coinId, activeLable])
    return (
        <div>
            <div className="space-x-3">
                {timeSeries.map((item) => <Button
                variant={activeLable === item.lable ? "" : "outline"}
                 onClick={() => handleActiveLable(item.lable)} key={item.lable}>
                    {item.lable}
                </Button>)}
            </div>
            <div id="chart-timelines">
                <ReactApexChart 
                options={options} 
                series={series} 
                height={450}
                type="area"
                />
            </div>
        </div>
    )
}

export default StockChart