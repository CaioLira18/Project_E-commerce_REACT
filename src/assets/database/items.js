import { shuffleArray } from "../../utils/shuffle.js";

export const itemsArray = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/617VXZCjDtL.jpg",
    name: "PC GAMER (I5 10800x 8GB RTX 3050 SSD 500GB)",
    bio: "Um PC Gamer poderoso com processador Intel i5 10800x, 8GB de RAM, placa de vídeo RTX 3050 e SSD de 500GB. Perfeito para rodar jogos modernos com alto desempenho e fluidez.",
    price: "R$ 4.999,99"
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/617VXZCjDtL.jpg",
    name: "Memoria Ram 2x8GB (Aorus)",
    bio: "Kit de memória RAM Aorus com 16GB (2x8GB) DDR4 de alta velocidade. Ideal para aumentar o desempenho do seu PC, garantindo maior velocidade e estabilidade.",
    price: "R$ 899,99"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/617VXZCjDtL.jpg",
    name: "Nvidea RTX 3050 12GB",
    bio: "Placa de vídeo Nvidia RTX 3050 com 12GB de memória GDDR6. Suporte para Ray Tracing e DLSS, garantindo gráficos impressionantes e desempenho otimizado para jogos e criação de conteúdo.",
    price: "R$ 2.599,99"
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/617VXZCjDtL.jpg",
    name: "Placa-Mãe Gigabyte B550M Aorus Elite Rev. 1.3, AMD AM4, Micro ATX, DDR4, Preto - B550M AORUS ELITE",
    bio: "Placa-mãe Gigabyte B550M Aorus Elite, compatível com processadores AMD Ryzen. Conta com suporte para memória DDR4, design robusto e conectividade avançada para máximo desempenho.",
    price: "R$ 799,99"
  }
];

export const artistsIndexedById = itemsArray.reduce((acc, currentObj) => {
  acc[currentObj.id] = currentObj;
  return acc;
}, {});

export const artistsIndexedByName = itemsArray.reduce((acc, currentObj) => {
  acc[currentObj.name] = currentObj;
  return acc;
}, {});

shuffleArray(itemsArray);
