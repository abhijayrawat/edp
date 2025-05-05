import React, { useState, useEffect, useRef } from "react";
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
  const [ecgData, setEcgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("http://localhost:8000/vitals/ecg");
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const responseData = await res.json();
        const rawEcg = responseData.ecg || [];

        // Calculate the average of the ECG data
        const avg = rawEcg.reduce((acc, val) => acc + val, 0) / rawEcg.length;

        // Normalize ECG values by subtracting the average
        const normalizedEcg = rawEcg.map((v) => parseFloat(((v - avg) / 500).toFixed(2)));

        setEcgData(normalizedEcg);
      } catch (err) {
        setError(err.message);
        const fallback = Array.from({ length: 30 }, (_, i) =>
          parseFloat(((2048 + 300 * Math.sin(i / 5) - 2048) / 500).toFixed(2))
        );
        setEcgData(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [ecgData]);

  const labels = ecgData.map((_, i) => `${ecgData.length - i}s`);

  const average = ecgData.length
    ? (
        ecgData.reduce((a, b) => a + b, 0)
      ).toFixed(2)
    : 0;

  const chartData = {
    labels,
    datasets: [
      {
        label: "ECG",
        data: ecgData,
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
    scales: {
      x: {
        ticks: { color: "#aaa", font: { size: 14 } },
        grid: { color: "#222" },
      },
      y: {
        min: -2,
        max: 2,
        display: false, // Remove Y-axis entirely
      },
    },
    plugins: {
      legend: { display: false },
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
              content: `${average} avg`,
              color: "#fff",
              font: { size: 12 },
              yAdjust: -6,
            },
          },
        },
      },
    },
  };

  return (
    <div className="bg-black rounded-2xl p-5 shadow-lg">
      <div className="text-gray-300 mb-3 font-medium">ECG Graph</div>

      <div
        className="overflow-x-auto custom-scroll"
        ref={scrollRef}
      >
        <div style={{ width: "1800px", height: "200px" }}>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      <style jsx="true">{`
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #555 #111;
        }
        .custom-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #111;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #555;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ECGGraph;
