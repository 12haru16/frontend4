import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart(data:any) {
    const labels = ["1日", "2日", "3日", "4日", "5日", "6日","7日","8日","9日","10日","11日", "12日", "13日", "14日", "15日", "16日","17日","18日","19日","20日","21日", "22日", "23日", "24日", "25日", "26日","27日","28日","29日","30日"];
    const graphData = {
      labels: labels,
      datasets: [
        { 
          label: "A",
          data: data.anum==undefined ? [] : Object.values(data.anum),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "B",
          data: data.bnum==undefined ? [] : Object.values(data.bnum),
          backgroundColor: "rgba(54, 162, 235, 0.5)",
        },
        {
          label: "C",
          data: data.cnum==undefined ? [] : Object.values(data.cnum),
          backgroundColor: "rgba(255, 206, 86, 0.5)",
        },
      ],
    };
  
    const options: {} = {
      maintainAspectRatio: false,
      responsive: true,
        scales: {
            x: {
            stacked: true,
            },
            y: {
            stacked: true,
            },
        },
    };
  
    return (
        <Bar
          height={300}
          width={300}
          data={graphData}
          options={options}
        />
    );
  }