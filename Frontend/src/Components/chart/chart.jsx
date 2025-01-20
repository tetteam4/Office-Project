import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import axios from "axios";

// Register the required components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState(null);
  const apiUrl = "http://localhost:9000/income";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/month`); // Replace with your actual API endpoint
        const data = response.data; // Assuming data is in the format [{amount: '01200', month: 'Jan', year: 2025}, ...]
console.log(response.data);

        // Prepare the labels and dataset from the fetched data
        const labels = data.map((item) => `${item.month} ${item.year}`); // Combine month and year for labels
        const incomeData = data.map((item) => parseFloat(item.amount)); // Convert amounts to numbers

        // Update chart data
        setChartData({
          labels,
          datasets: [
            {
              label: "Monthly Income",
              data: incomeData,
              backgroundColor: "rgba(75, 192, 192, 0.5)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Failed to fetch monthly income data:", error);
      }
    };

    fetchData();
  }, []);

  // Chart options
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
          text: "Income (in USD)",
        },
        min: 0,
      },
    },
  };

  return (
    <div>
      <h2 className="text-center text-xl font-semibold mb-4">Monthly Income</h2>
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p className="text-center">Loading data...</p>
      )}
    </div>
  );
};

export default BarChart;
