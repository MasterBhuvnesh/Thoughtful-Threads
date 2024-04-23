import Written from './quotes.json';
 function selectRandomItems(arr, numItems) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  }
export  const Data = selectRandomItems(Written, 3);

    