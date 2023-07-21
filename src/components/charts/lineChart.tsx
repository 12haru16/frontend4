import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
export default function LineChart(data:any) {
  const labels = ["1日", "2日", "3日", "4日", "5日", "6日","7日","8日","9日","10日","11日", "12日", "13日", "14日", "15日", "16日","17日","18日","19日","20日","21日", "22日", "23日", "24日", "25日", "26日","27日","28日","29日","30日"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "A",
        data: data.anum==undefined ? [] : Object.values(data.anum),
        borderColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "B",
        data: data.anum==undefined ? [] : Object.values(data.bnum),
        borderColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: "C",
        data: data.anum==undefined ? [] : Object.values(data.cnum),
        borderColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  const options: {} = {
    maintainAspectRatio: false,
    scales: {
      y:
        {
          min: 0,
          max: 120,
          stepSize: 5,
        },
    }
  };

  return (
      <Line
        height={300}
        width={300}
        data={graphData}
        options={options}
      />
  );
}