import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pitches, setPitches] = useState([]);
  const [pitchType, setPitchType] = useState("All Pitches");
  const [filteredPitch, setFilteredPitch] = useState([]);

  const [pitchesTypeOptions, setPitchesTypeOptions] = useState([
    { value: "FF", label: "Four-Seam Fastball" },
    { value: "CH", label: "Changeup" },
    { value: "CU", label: "Curveball" },
    { value: "FC", label: "Cutter" },
    { value: "EP", label: "Eephus" },
    { value: "FO", label: "Forkball" },
    { value: "KN", label: "Knuckleball" },
    { value: "KC", label: "Knuckle-curve" },
    { value: "SC", label: "Screwball" },
    { value: "SI", label: "Sinker" },
    { value: "SL", label: "Slider" },
    { value: "SV", label: "Slurve" },
    { value: "FS", label: "Splitter" },
    { value: "ST", label: "Sweeper" },
    { value: "All Pitches", label: "All Pitches" },
  ]);

  // Get Pitches
  useEffect(() => {
    const getPitches = async () => {
      try {
        const { data } = await axios(import.meta.env.VITE_API_URL);
        setPitches(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPitches();
  }, []);

  const handlePitchType = (e) => {
    setPitchType(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        pitches,
        setPitches,
        pitchType,
        handlePitchType,
        filteredPitch,
        setFilteredPitch,
        pitchesTypeOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
