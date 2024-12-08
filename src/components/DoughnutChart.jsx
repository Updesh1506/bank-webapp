"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { doughnutChart } from "@/props/componentProps";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({ accounts }) => {
  const values = accounts.map((account) => {
    return account.currentBalance;
  });
  const names = accounts.map((account) => {
    return account.name;
  });

  const data = {
    datasets: [
      {
        label: "Banks",
        data: values,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: names,
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

DoughnutChart.propTypes = doughnutChart;

export default DoughnutChart;
