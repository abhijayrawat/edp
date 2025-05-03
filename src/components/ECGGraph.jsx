import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  annotationPlugin
);

const ECGGraph = () => {
  const [secData, setSecData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/ecg/last-120-seconds");
        const data = await res.json();
        // console.log(data)
        setSecData(data);
      } catch (error) {
        // fallback mock data
        const fallback = Array.from({ length: 12 }, () =>
          Math.floor(75 + Math.random() * 20)
        );
        setSecData(fallback);
      } finally {
        // Optional: you could use this to hide a loading spinner, etc.
        // console.log("Data fetch complete");
        // Will add a loader here soon if need
      }
    };
  
    fetchData();
  }, []);
  

  const labels = Array.from({ length: 12 }, (_, i) => `${i * 10}s`);
  const data = secData.length ? secData : Array.from({ length: 12 }, () => Math.floor(75 + Math.random() * 20));
  const average = Math.round(data.reduce((a, b) => a + b, 0) / data.length);
  console.log(data)
  const chartData = {
    labels,
    datasets: [
      {
        label: "Heart Rate",
        data,
        fill: false,
        borderColor: "#c8ff00",
        pointBackgroundColor: "#c8ff00",
        pointBorderColor: "#c8ff00",
        pointHoverRadius: 6,
        pointRadius: 3,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: "nearest",
      intersect: false,
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        ticks: { color: "#aaa", font: { size: 10 } },
        grid: { color: "#222" },
      },
      y: {
        min: 60,
        max: 120,
        ticks: { color: "#aaa", font: { size: 10 } },
        grid: { color: "#222" },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#1e1e1e",
        titleColor: "#c8ff00",
        bodyColor: "#fff",
        borderColor: "#c8ff00",
        borderWidth: 1,
        displayColors: false,
        padding: 10,
        callbacks: {
          label: (context) => ` ${context.parsed.y} bpm`,
        },
      },
      annotation: {
        annotations: {
          avgLine: {
            type: "line",
            yMin: average,
            yMax: average,
            borderColor: "#ffffff88",
            borderWidth: 1,
            label: {
              enabled: true,
              content: `${average} avg bpm`,
              backgroundColor: "transparent",
              color: "#fff",
              font: { size: 10, weight: "bold" },
              position: "end",
              yAdjust: -6,
            },
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-5 shadow-lg  text-white">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium text-gray-300">ECG Graph</h3>
        <div className="flex bg-[#1f1f1f] rounded-full p-1 space-x-1">
          {/* <button
            className="px-3 py-1 text-xs rounded-full font-medium bg-lime-400 text-black cursor-default"
          > */}
            {/* sec */}
          {/* </button> */}
        </div>
      </div>

      <div className="h-60">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ECGGraph;
