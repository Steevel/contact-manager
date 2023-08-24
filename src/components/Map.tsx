import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CountryData } from "../types";

const Map: React.FC = () => {
  const { data, isLoading, error } = useQuery<CountryData[]>({
    queryKey: ["countryData"],
    queryFn: async () => {
      const { data } = await axios("https://disease.sh/v3/covid-19/countries");
      return data;
    },
  });

  if (isLoading || !data) {
    return <div className="text-3xl text-indigo-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-3xl text-red-600">Something went wrong...</div>;
  }

  return (
    <>
      <h1 className="py-4 text-xl md:text-3xl">Map</h1>
      <MapContainer
        center={[20, 0]}
        zoom={3}
        style={{ width: "100%", height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data?.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Active Cases: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
