// import data from "./quotes.json";
// function selectRandomItems(arr, numItems) {
//   const shuffled = arr.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, numItems);
// }
// export const Data = selectRandomItems(data, 3);
import axios from "axios";

function selectRandomItems(arr, numItems) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
}

export const fetchData = async () => {
  try {
    const response = await axios.get("https://qoute-back-server.vercel.app/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};

export const Data = async () => {
  const data = await fetchData();
  return selectRandomItems(data, 3);
};
