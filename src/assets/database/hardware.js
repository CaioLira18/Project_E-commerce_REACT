import { shuffleArray } from "../../utils/shuffle.js";

export const hardwareArray = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/617VXZCjDtL.jpg",
    name: "PC GAMER (I5 10800x 8GB RTX 3050 SSD 500GB)",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/617VXZCjDtL.jpg",
    name: "Memoria Ram",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/617VXZCjDtL.jpg",
    name: "RTX 3050",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/617VXZCjDtL.jpg",
    name: "RTX 3050",
  },
];

export const artistsIndexedById = hardwareArray.reduce((acc, currentObj) => {
  acc[currentObj.id] = currentObj;
  return acc;
}, {});

export const artistsIndexedByName = hardwareArray.reduce((acc, currentObj) => {
  acc[currentObj.name] = currentObj;
  return acc;
}, {});

shuffleArray(hardwareArray);