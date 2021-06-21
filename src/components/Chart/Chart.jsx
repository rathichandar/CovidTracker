import React from "react";
import { useEffect,useState } from "react";
import { Line,Bar } from "react-chartjs-2";
import   styles from'./Chart.module.css';
import {fetchDailyData} from '../../Api';

const Charts = ({data:{confirmed,deaths,recovered},country})=>{
    
const [dailyData,setDailyData] = useState([]);

useEffect( ()=>{
    const fetchAPI = async ()=>{
        setDailyData (await fetchDailyData());
    }
    fetchAPI();
},[]);

const lineChart=(
   dailyData.length  ? <Line 

    data = {{
      
        labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: 'green',
            
            fill: true,
        },{
            data: dailyData.map((data) => data.deaths),
            label: 'deaths',
            borderColor: 'red',
            backgroundColor: 'red',
            fill: true,
        },
            
        ],
    }}
    />: null

);
console.log(confirmed,deaths,recovered);

const barChart=(
    confirmed 
    ? (
        <Bar
        data ={{
            labels:['infected ','deaths','recovered'],
            datasets:[{
                labels: 'people',
                backgroundColor: ['blue','red','green'
                ],
                data:[confirmed.value,deaths.value,recovered.value ]
            }]
        }}
        options={{
            legend : {display:false},
            title : {display:true,Text:`Current state in ${country}`},
        }}
        />

    ): null
)
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart    }
        </div>
    )
    }

    export default Charts;