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

export default function LineChart() {
  const labels = ["1日", "2日", "3日", "4日", "5日", "6日","7日","8日","9日","10日","11日", "12日", "13日", "14日", "15日", "16日","17日","18日","19日","20日","21日", "22日", "23日", "24日", "25日", "26日","27日","28日","29日","30日"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "A",
        data: [65, 59, 60, 81, 56, 55,60, 55, 57, 61,66, 51, 53, 66, 72, 60,60, 55, 57, 61,81, 56, 55,60, 55, 57, 61,66, 51, 53],
        borderColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "B",
        data: [60, 55, 57, 61, 75, 50,65, 59, 60, 51,65, 59, 60, 81, 56, 55,60, 55, 57, 61,66, 51, 53, 66, 72, 60,60, 55, 57, 61],
        borderColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: "C",
        data: [66, 51, 53, 66, 72, 60,60, 55, 57, 61,60, 55, 57, 61, 75, 50,65, 59, 60, 51,65, 59, 60, 81, 56, 55,60, 53, 60, 54],
        borderColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  const options: {} = {
    maintainAspectRatio: false,
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