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

export default function BarChart() {
    const labels = ["1日", "2日", "3日", "4日", "5日", "6日","7日","8日","9日","10日","11日", "12日", "13日", "14日", "15日", "16日","17日","18日","19日","20日","21日", "22日", "23日", "24日", "25日", "26日","27日","28日","29日","30日"];
    const graphData = {
      labels: labels,
      datasets: [
        {
          label: "A",
          data: [65, 59, 60, 81, 56, 55,60, 55, 57, 61,66, 51, 53, 66, 72, 60,60, 55, 57, 61,81, 56, 55,60, 55, 57, 61,66, 51, 53],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "B",
          data: [60, 55, 57, 61, 75, 50,65, 59, 60, 51,65, 59, 60, 81, 56, 55,60, 55, 57, 61,66, 51, 53, 66, 72, 60,60, 55, 57, 61],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
        },
        {
          label: "C",
          data: [66, 51, 53, 66, 72, 60,60, 55, 57, 61,60, 55, 57, 61, 75, 50,65, 59, 60, 51,65, 59, 60, 81, 56, 55,60, 53, 60, 54],
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