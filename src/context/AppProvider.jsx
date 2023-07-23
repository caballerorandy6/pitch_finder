import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pitches, setPitches] = useState([]);

  useEffect(() => {
    const getPitches = async () => {
      try {
        const { data } = await axios(
          "https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json"
        );
        setPitches(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPitches();
  }, []);

  return (
    <AppContext.Provider value={{ pitches }}>{children}</AppContext.Provider>
  );
};

export { AppProvider };

export default AppContext;
