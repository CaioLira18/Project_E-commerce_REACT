import { shuffleArray } from "../../utils/shuffle.js";
import ps5Image from "../../../imagens_hardwares/ps5.png";
import xboxSeriesXImage from "../../../imagens_hardwares/xboxseriesx.png";
import nintendoSwitchImage from "../../../imagens_hardwares/nitendoswitch.png";
import rtx3080Image from "../../../imagens_hardwares/rtx3080.png";
import ryzen7Image from "../../../imagens_hardwares/amdryzen5800.png";
import ssdNvmeImage from "../../../imagens_hardwares/ssdkingston.png";
import monitor144hzImage from "../../../imagens_hardwares/monitorfullhd.png";
import tecladoMecanicoImage from "../../../imagens_hardwares/tecladoreddragon.png";
import placaMaeImage from "../../../imagens_hardwares/placamaeb550m.png";
import waterCoolerImage from "../../../imagens_hardwares/watercooler.png";

export const hardwareArray = [
  {
    id: 1,
    image: ps5Image,
    name: "Console PS5 Digital Edition + 2 Jogos",
    bio: "Um PC Gamer poderoso com processador Intel i5 10800x, 8GB de RAM, placa de vídeo RTX 3050 e SSD de 500GB. Perfeito para rodar jogos modernos com alto desempenho e fluidez.",
    price: "R$ 4.999,99"
  },
  {
    id: 2,
    image: xboxSeriesXImage,
    name: "Console Xbox Series X 1TB",
    bio: "O console mais potente da Microsoft, com SSD de 1TB, suporte a 4K e Ray Tracing para uma experiência de nova geração.",
    price: "R$ 4.799,99"
  },
  {
    id: 3,
    image: nintendoSwitchImage,
    name: "Nintendo Switch OLED",
    bio: "A nova versão do Nintendo Switch com tela OLED de 7 polegadas, maior capacidade de bateria e som aprimorado.",
    price: "R$ 2.999,99"
  },
  {
    id: 4,
    image: rtx3080Image,
    name: "Placa de Vídeo RTX 3080 10GB",
    bio: "Uma das GPUs mais poderosas do mercado, ideal para jogos em 4K e aplicações profissionais de renderização.",
    price: "R$ 6.499,99"
  },
  {
    id: 5,
    image: ryzen7Image,
    name: "Processador AMD Ryzen 7 5800X",
    bio: "Um processador de 8 núcleos e 16 threads, perfeito para jogos e criação de conteúdo com alto desempenho.",
    price: "R$ 2.199,99"
  },
  {
    id: 6,
    image: ssdNvmeImage,
    name: "SSD NVMe 1TB Kingston",
    bio: "Alta velocidade de leitura e gravação, garantindo carregamentos rápidos e desempenho superior.",
    price: "R$ 799,99"
  },
  {
    id: 7,
    image: monitor144hzImage,
    name: "Monitor Gamer 27'' 144Hz Full HD",
    bio: "Monitor de alta taxa de atualização para uma jogabilidade mais fluida e sem atrasos.",
    price: "R$ 1.499,99"
  },
  {
    id: 8,
    image: tecladoMecanicoImage,
    name: "Teclado Mecânico RGB Redragon",
    bio: "Switches mecânicos de alta durabilidade e iluminação RGB personalizável.",
    price: "R$ 349,99"
  },
  {
    id: 9,
    image: placaMaeImage,
    name: "Placa-Mãe ASUS TUF Gaming B550M",
    bio: "Compatível com processadores AMD Ryzen, suporte a PCIe 4.0 e design robusto para gamers e entusiastas.",
    price: "R$ 1.099,99"
  },
  {
    id: 10,
    image: waterCoolerImage,
    name: "Water Cooler Corsair H100i RGB",
    bio: "Solução eficiente de resfriamento líquido para manter seu processador em baixas temperaturas durante o uso intenso.",
    price: "R$ 899,99"
  }
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