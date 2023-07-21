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


export default function PieChart(data:any) {
  const numA:number[] = data.anum==undefined ? [] : Object.values(data.anum);
  const sumA = numA.reduce((x, y) => x + y,0);
  const numB:number[] = data.anum==undefined ? [] : Object.values(data.bnum);
  const sumB = numB.reduce((x, y) => x + y,0);
  const numC:number[] = data.anum==undefined ? [] : Object.values(data.cnum);
  const sumC = numC.reduce((x, y) => x + y,0);

  console.log(sumA)
  const labels = ["A","B","C"];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "品質",
        data: [sumA,sumB,sumC],
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