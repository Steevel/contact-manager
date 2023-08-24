import LineChart from "../components/LineChart";
import Map from "../components/Map";

const Charts = () => {
  return (
    <div className="h-full p-1 md:p-4">
      <div className="">
        <LineChart />
      </div>
      <div className="">
        <Map />
      </div>
    </div>
  );
};

export default Charts;
