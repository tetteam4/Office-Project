import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register the required components for Chart.js
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);
const LineChart = () => {
    // Chart Data
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales",
          data: [10, 20, 15, 30, 25, 40],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
        },
      ],
    };
  
    // Chart Options
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Sales (in USD)",
          },
          min: 0,
          max: 50,
        },
      },
    };
  
    return (
      <div>
        <h2 className="text-center text-xl font-semibold mb-4">Sales Over Time</h2>
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default LineChart;
  