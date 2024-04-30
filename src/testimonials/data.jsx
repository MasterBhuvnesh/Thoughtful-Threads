// import Written from './quotes.json';
//  function selectRandomItems(arr, numItems) {
//     const shuffled = arr.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, numItems);
//   }
// export  const Data = selectRandomItems(Written, 3);

// --------------------------
// import axios from "axios";

// function selectRandomItems(arr, numItems) {
//   const shuffled = arr.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, numItems);
// }

// export const getDataFromMongoDB = async () => {
//   try {
//     const response = await axios.get("http://localhost:3001/"); // Replace 'your-endpoint' with the actual endpoint
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data from MongoDB:", error);
//     return []; // Return empty array in case of error
//   }
// };

// export const Data = async () => {
//   const data = await getDataFromMongoDB();
//   return selectRandomItems(data, 3);
// };
import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [dataSets, setDataSets] = useState([]);

  useEffect(() => {
    axios
      .get("https://qoute-back-server.vercel.app")
      .then((response) => {
        // Assuming the API returns an array of data sets
        const { data } = response;
        const selectedDataSets = selectRandomItems(data, 3);
        setDataSets(selectedDataSets);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to select random items from an array
  function selectRandomItems(arr, numItems) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  }

  return dataSets; // Return dataSets instead of selectedDataSets
}

export default Data;
