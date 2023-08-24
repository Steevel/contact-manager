import { useEffect, useState } from "react";
import axios from "axios";
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
import { useQuery } from "@tanstack/react-query";
import { Data } from "../types";

const LineGraph = () => {
  const [casesData, setCasesData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["covidData"],
    queryFn: async () => {
      const { data } = await axios(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      return data;
    },
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    if (data) {
      const cases: number[] = Object.values(data.cases);
      const dateLabels = Object.keys(data.cases);

      setCasesData(cases);
      setLabels(dateLabels);
    }
  }, [data]);

  const chartData: Data = {
    labels: labels,
    datasets: [
      {
        label: "Cases",
        data: casesData,
        backgroundColor: "blue",
        borderColor: "blue",
        pointRadius: 0,
      },
    ],
  };

  if (isLoading || !data) {
    return <div className="text-3xl text-indigo-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-3xl text-red-600">Something went wrong...</div>;
  }

  return (
    <div>
      <h1 className="py-4 text-xl md:text-3xl">Covid Cases</h1>
      <Line data={chartData} />
    </div>
  );
};

export default LineGraph;
