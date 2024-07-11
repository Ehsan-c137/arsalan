import { IM_Fell_Great_Primer_SC } from "next/font/google";
import { title } from "process";

interface IItem {
   title: string;
   price: string;
   imgSrc: string;
}

const electricKettels = [
   {
      title: "Baristan Electric Gooseneck",
      price: "110",
      imgSrc: "/asdf",
   },
   {
      title: "Luna Electric Tea Kettle",
      price: "110",
      imgSrc: "/asdf",
   },
   {
      title: "Baristan Electric Gooseneck Kettle (open-box)",
      price: "95",
      imgSrc: "/asdfsadf",
   },
   {
      title: "Luna Adjustable Temperature Kettle (open-box)",
      price: "75",
      imgSrc: "/fasdf",
   },
];

const teaMakers = [
   {
      title: "Turkish Tea Maker",
      price: "130",
      imgSrc: "/asdf",
   },
   {
      title: "Large Prcelain Teapot",
      price: "29",
      imgSrc: "/asdf",
   },
   {
      title: "TeaSmart Electric Turkish Tea Kettle (Open-Box)",
      price: "85",
      imgSrc: "/asdf",
   },
];

const samovars = [
   {
      title: "Electric Russian Samovar",
      price: "165",
      imgSrc: "/asdf",
   },
];

const coffeMakers = [
   {
      title: "Turkish Coffee Maker",
      price: "75",
      imgSrc: "/asdf",
   },
   {
      title: "Pour-Over Glass Coffee",
      price: "30",
      imgSrc: "/asdf",
   },
];

const breadMakers = [
   {
      title: "Bread Maker",
      price: "165",
      imgSrc: "/fasdf",
   },
   {
      title: "Bread Maker (Open-Box)",
      price: "95",
      imgSrc: "/asdf",
   },
];

const airFryers = [
   {
      title: "Smart Air Fryers, 5 Quart",
      price: "74",
      imgSrc: "/asdf",
   },
   {
      title: "Air Fryer Over, 13 Quart",
      price: "81",
      imgSrc: "/asdf",
   },
];

const foodPrepAppliances = [
   {
      title: "AutoMatic Pot Stirrer",
      price: "51",
      imgSrc: "/asdf",
   },
   {
      title: "Smart Sous Vide Cooker",
      price: "70",
      imgSrc: "/afsdf",
   },
];

const airPurifiers = [
   {
      title: "HEPA H13 Air Purifier",
      price: "75",
      imgSrc: "/asdf",
   },
];

const allProducts = [
   {
      category: "ELECTRIC KETTLES",
      items: electricKettels,
      url: "electric-kettels",
      // getItem: (title: string) => {
      //    return electricKettels.find((item) => item.title === title);
      // },
   },
   {
      category: "TEA MAKERS",
      items: teaMakers,
      url: "tea-makers",
   },
   {
      category: "SAMOVARS",
      items: samovars,
      url: "samovars",
   },
   {
      category: "COFFEE MAKERS",
      items: coffeMakers,
      url: "coffee-makers",
   },
   {
      category: "BREAD MAKERS",
      items: breadMakers,
      url: "bread-makers",
   },
   {
      category: "AIR FRYERS",
      items: airFryers,
      url: "air-fryers",
   },
   {
      category: "FOOD PREP APPLIANCES",
      items: foodPrepAppliances,
      url: "food-prep-appliances",
   },
   {
      category: "AIR PURIFIERS",
      items: airPurifiers,
      url: "air-purifiers",
   },
];

// parts

const AirFryerOven: IItem[] = [
   {
      title: "Removable Door",
      price: "15",
      imgSrc: "/asdf",
   },
   {
      title: "Rotisserie Rod & Forks",
      price: "12",
      imgSrc: "/asdf",
   },
   {
      title: "Removal Tool",
      price: "6",
      imgSrc: "/asdf",
   },
   {
      title: "Mesh Racks",
      price: "10",
      imgSrc: "/asdfa",
   },
   {
      title: "Rotisserie Skewers",
      price: "15",
      imgSrc: "/asdf",
   },
   {
      title: "Oil Drip Tray",
      price: "8",
      imgSrc: "/asdf",
   },
   {
      title: "Rotisserie Basket",
      price: "12",
      imgSrc: "/asdf",
   },
];

const AirPurifier: IItem[] = [
   {
      title: "َAir purifier Filter",
      price: "29",
      imgSrc: "/asdf",
   },
];

const BaristanKettle: IItem[] = [
   {
      title: "Baristan Replacement Lid",
      price: "15",
      imgSrc: "/asdf",
   },
   {
      title: "Baristan Replacement Base",
      price: "15",
      imgSrc: "/asdf",
   },
   {
      title: "Baristan Replacement Body",
      price: "40",
      imgSrc: "/asdf",
   },
];

const BreadMaker: IItem[] = [
   {
      title: "Bread Maker Pan",
      price: "23",
      imgSrc: "/fasdf",
   },
   {
      title: "Bread Maker Kneading Paddles",
      price: "12",
      imgSrc: "/asdf",
   },
];

const ChaiovarSamovar: IItem[] = [
   {
      title: "Chaiovar Replacement Faucet",
      price: "15",
      imgSrc: "/asdf",
   },
   {
      title: "Chaiovar Replacement Teapot with Lid",
      price: "25",
      imgSrc: "/asdf",
   },
   {
      title: "Chaiovar Replacement Lid",
      price: "15",
      imgSrc: "/asdf",
   },
   {
      title: "Chaiovar Replacement Tea Infuser",
      price: "12",
      imgSrc: "/asdf",
   },
   {
      title: "Chaiovar Replacement Teapot Holder",
      price: "15",
      imgSrc: "/asdf",
   },
   {
      title: "Chaiovar Replacement Drip Tray",
      price: "15",
      imgSrc: "/asdf",
   },
];

const ElectricSamovarV1: IItem[] = [
   {
      title: "Samovar Teapot",
      price: "21",
      imgSrc: "/asdf",
   },
   {
      title: "Samovar Teapot Infuser",
      price: "11",
      imgSrc: "/asdf",
   },
];

const LunaKettle: IItem[] = [
   {
      title: "Luna Replacement Base",
      price: "45",
      imgSrc: "/asdf",
   },
   {
      title: "Luna Replacement Lid",
      price: "10",
      imgSrc: "/asdf",
   },
   {
      title: "Luna Replacement Body",
      price: "50",
      imgSrc: "/asdf",
   },
];

const PourOverCoffeMaker: IItem[] = [
   {
      title: "Pour Over Mesh Filter",
      price: "12",
      imgSrc: "/asdf",
   },
];

const TeaSmartTurkishTeaKettle: IItem[] = [
   {
      title: "Tea Replacement Base",
      price: "60",
      imgSrc: "/asdf",
   },
   {
      title: "TeaSmart Replacement Teapot",
      price: "20",
      imgSrc: "/asdf",
   },
   {
      title: "TeaSmart Replacement Lid",
      price: "10",
      imgSrc: "/asdf",
   },
   {
      title: "TeaSmart Replacement Body",
      price: "50",
      imgSrc: "/asdf",
   },
];

const TurkishTeaMaker: IItem[] = [
   {
      title: "Tea Maker Infuser",
      price: "10",
      imgSrc: "/asdf",
   },
];

const allParts = [
   {
      category: "Air Fryer Oven",
      items: AirFryerOven,
      url: "air-fryer-oven",
   },
   {
      category: "Air purifier",
      items: AirPurifier,
      url: "air-purifier",
   },
   {
      category: "Baristan Kettle",
      items: BaristanKettle,
      url: "baristan-kettle",
   },
   {
      category: "Bread Maker",
      items: BreadMaker,
      url: "bread-maker",
   },
   {
      category: "Chaiovar Samovar",
      items: ChaiovarSamovar,
      url: "chaiovar-samovar",
   },
   {
      category: "Electric Samovar V1",
      items: ElectricSamovarV1,
      url: "electric-samovar-v1",
   },
   {
      category: "Luna Kettle",
      items: LunaKettle,
      url: "luna-kettle",
   },
   {
      category: "Pour Over Coffee Maker",
      items: PourOverCoffeMaker,
      url: "pour-over-coffee-maker",
   },
   {
      category: "Tea Smart Turkish Tea Kettle",
      items: TeaSmartTurkishTeaKettle,
      url: "tea-smart-turkish-tea-kettle",
   },
   {
      category: "Turkish Tea Maker",
      items: TurkishTeaMaker,
      url: "turkish-tea-maker",
   },
];

const data = [...allParts, ...allProducts];

export { data, allParts, allProducts };
