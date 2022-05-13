import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

export const DataContext = React.createContext([]);

function DataProvider({ children }) {
  const [dataset, setDataset] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [on, setOn] = useState(false);

  useEffect(() => {
    const filterData = (filterData, input) => {
      if (!input) {
        return filterData.filter((item) => item.isActive === on);
      }
      const a = filterData.filter(
        (item) =>
          item.category.toLowerCase() === input.toLowerCase() &&
          item.isActive === on
      );
      console.log(a);
      return a;
    };

    const init = async () => {
      const response = await axios.get("data.json");
      return response.data;
    };

    init().then((data) => {
      setDataset(filterData(data, filterText));
    });
  }, [filterText, on]);

  return (
    <DataContext.Provider
      value={{ data: dataset, setFilter: setFilterText, setOn, on }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);

export default DataProvider;
