import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = () => {

    const[activeLable, setActiveLable] = useState("1 day")

    const series = [
        {
            data:[[1726586765619, 61231.6212971013],
            [1726589249396, 61202.0196856892],
            [1726592419953, 60970.2534814402],
            [1726596483383, 60976.8573746607],
            [1726600341842, 60563.4158309977],
            [1726604299992, 59973.9506205091],
            [1726608548124, 60375.0369547322],
            [1726612102530, 60174.66622544],
            [1726615649414, 60155.6441169595],
            [1726618946634, 60061.8848560052],
            [1726622554412, 60163.8347221741],
            [1726624983472, 60124.0662274937],
            [1726628581414, 60367.1263825379],
            [1726632758090, 60514.1231812518],
            [1726636092885, 60355.3951320565],
            [1726640170567, 60320.4225226327],
            [1726644413525, 60342.1244329161],
            [1726647237996, 60238.9024854893],
            [1726650359655, 60194.6557237078],
            [1726654336099, 59781.9595156652],
            [1726658939003, 59982.6674609518],
            [1726660948020, 59871.9295202455],
            [1726665406743, 59865.6348093028],
            [1726668843117, 59450.8514452217],
            [1726673326804, 59511.0262480518],
            [1726676467770, 59520.595946066],
            [1726679845914, 59602.2947321903],
            [1726683114527, 60171.9338572356],
            [1726687149489, 60678.6222292116],
            [1726689809462, 60033.6269679482],
            [1726694799757, 60334.7197558385],
            [1726698617981, 60481.0679804467],
            [1726702124514, 61165.471218698],
            [1726704161765, 61826.7176130281],
            [1726708611601, 61852.9392877189]]
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