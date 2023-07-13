import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from "chart.js";
  import { Pie } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

export default function PieChart() {
  const labels = ["A","B","C"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "品質",
        data: [1000,1000,1000],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
      }
    ],
  };

  const options: {} = {
    maintainAspectRatio: false,
  };

  return (
      <Pie
        height={300}
        width={300}
        data={graphData}
        options={options}
      />
  );
}