import { shuffleArray } from "../../utils/shuffle.js";
import rtxImage  from "../../../imagens_items/rtx3050.png";
import placaMae  from "../../../imagens_items/placaMae.png";
import memoriaRam  from "../../../imagens_items/memoriaRam.png";
import tecladoImage  from "../../../imagens_items/teclado.png";
import mouseImage  from "../../../imagens_items/mouse.png";
import monitorImage  from "../../../imagens_items/monitor.png";
import gabineteImage  from "../../../imagens_items/gabinete.png";
import fonteImage  from "../../../imagens_items/fonte.png";
import headsetImage  from "../../../imagens_items/headset.png";



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
    image: memoriaRam,
    name: "Memoria Ram 2x8GB (Aorus)",
    bio: "Kit de memória RAM Aorus com 16GB (2x8GB) DDR4 de alta velocidade. Ideal para aumentar o desempenho do seu PC, garantindo maior velocidade e estabilidade.",
    price: "R$ 899,99"
  },
  {
    id: 3,
    image: rtxImage,
    name: "Nvidea RTX 3050 12GB",
    bio: "Placa de vídeo Nvidia RTX 3050 com 12GB de memória GDDR6. Suporte para Ray Tracing e DLSS, garantindo gráficos impressionantes e desempenho otimizado para jogos e criação de conteúdo.",
    price: "R$ 2.599,99"
  },
  {
    id: 4,
    image: placaMae,
    name: "Placa-Mãe Gigabyte B550M Aorus Elite Rev. 1.3, AMD AM4, Micro ATX, DDR4, Preto - B550M AORUS ELITE",
    bio: "Placa-mãe Gigabyte B550M Aorus Elite, compatível com processadores AMD Ryzen. Conta com suporte para memória DDR4, design robusto e conectividade avançada para máximo desempenho.",
    price: "R$ 799,99"
  },
  {
    id: 5,
    image: tecladoImage,
    name: "Teclado Mecânico RGB Redragon Kumara",
    bio: "Teclado mecânico compacto da Redragon com iluminação RGB personalizável e switches mecânicos de alta durabilidade, ideal para gamers e profissionais.",
    price: "R$ 299,99"
  },
  {
    id: 6,
    image: mouseImage,
    name: "Mouse Gamer Logitech G502 HERO",
    bio: "Mouse gamer com sensor HERO 25K, 11 botões programáveis e peso ajustável para melhor precisão e conforto durante longas sessões de jogo.",
    price: "R$ 349,99"
  },
  {
    id: 7,
    image: monitorImage,
    name: "Monitor Gamer LG Ultragear 27'' 144Hz 1ms",
    bio: "Monitor LG Ultragear de 27 polegadas, com taxa de atualização de 144Hz e tempo de resposta de 1ms, garantindo uma experiência fluida em jogos competitivos.",
    price: "R$ 1.599,99"
  },
  {
    id: 8,
    image: gabineteImage,
    name: "Gabinete Gamer NZXT H510 Preto",
    bio: "Gabinete NZXT H510 com design moderno, lateral em vidro temperado, excelente fluxo de ar e suporte para resfriamento líquido, ideal para setups gamers.",
    price: "R$ 649,99"
  },
  {
    id: 9,
    image: fonteImage,
    name: "Fonte Corsair 650W 80 Plus Bronze",
    bio: "Fonte de alimentação Corsair com certificação 80 Plus Bronze, 650W de potência e alta eficiência para garantir estabilidade e segurança ao seu PC.",
    price: "R$ 499,99"
  },
  {
    id: 10,
    image: headsetImage,
    name: "Headset HyperX Cloud II",
    bio: "Headset gamer com som surround 7.1, microfone com cancelamento de ruído e almofadas confortáveis para longas maratonas de jogos.",
    price: "R$ 599,99"
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
