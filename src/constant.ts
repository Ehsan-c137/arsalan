interface IItem {
   title: string;
   price: string;
   imgSrc: string[];
}

const electricKettels = [
   {
      title: "Baristan Electric Gooseneck Kettle",
      price: "110",
      imgSrc: [
         "/images/electric-kettels/baristan-electric-gooseneck-kettle/1.webp",
         "/images/electric-kettels/baristan-electric-gooseneck-kettle/2.webp",
         "/images/electric-kettels/baristan-electric-gooseneck-kettle/3.webp",
      ],
   },
   {
      title: "Luna Electric Tea Kettle",
      price: "110",
      imgSrc: [
         "/images/electric-kettels/luna-electric-tea-kettle/1.webp",
         "/images/electric-kettels/luna-electric-tea-kettle/2.webp",
         "/images/electric-kettels/luna-electric-tea-kettle/3.webp",
      ],
   },
   {
      title: "Baristan Electric Gooseneck Kettle (open-box)",
      price: "95",
      imgSrc: [
         "/images/electric-kettels/baristan-electric-gooseneck-kettle/1.webp",
         "/images/electric-kettels/baristan-electric-gooseneck-kettle/1.webp",
         "/images/electric-kettels/baristan-electric-gooseneck-kettle/1.webp",
      ],
   },
   {
      title: "Luna Adjustable Temperature Kettle (open-box)",
      price: "75",
      imgSrc: [
         "/images/electric-kettels/luna-adjustable-temperature-electric-kettle/1.webp",
         "/images/electric-kettels/luna-adjustable-temperature-electric-kettle/2.webp",
         "/images/electric-kettels/luna-adjustable-temperature-electric-kettle/3.webp",
      ],
   },
];

const teaMakers = [
   {
      title: "Turkish Tea Maker",
      price: "130",
      imgSrc: [
         "/images/tea-makers/turkish-tea-maker/1.webp",
         "/images/tea-makers/turkish-tea-maker/2.webp",
         "/images/tea-makers/turkish-tea-maker/3.webp",
         "/images/tea-makers/turkish-tea-maker/4.webp",
         "/images/tea-makers/turkish-tea-maker/5.webp",
      ],
   },
   {
      title: "TeaSmart Electric Turkish Tea Kettle (Open-Box)",
      price: "85",
      imgSrc: [
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/1.webp",
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/2.webp",
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/3.webp",
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/4.webp",
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/5.webp",
      ],
   },
   {
      title: "TeaSmart Electric Turkish Tea Kettle",
      price: "85",
      imgSrc: [
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/1.webp",
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/2.webp",
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/3.webp",
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/4.webp",
         "/images/tea-makers/teasmart-electric-turkish-tea-kettle/5.webp",
      ],
   },
   {
      title: "Teasmart Replacement Base",
      price: "60",
      imgSrc: ["/images/tea-makers/teasmart-replacement-base/1.webp"],
   },
   {
      title: "Teasmart Replacement Lid",
      price: "10",
      imgSrc: ["/images/tea-makers/teasmart-replacement-lid/1.webp"],
   },
   {
      title: "Teasmart Replacement Teapot",
      price: "20",
      imgSrc: ["/images/tea-makers/teasmart-replacement-teapot/1.webp"],
   },
];

const samovars = [
   {
      title: "Electric Russian Samovar",
      price: "165",
      imgSrc: ["/images/samovars/electric-russian-samovar/1.webp"],
   },
];

const coffeMakers = [
   {
      title: "Turkish Coffee Maker",
      price: "75",
      imgSrc: [
         "/images/coffee-makers/turkish-coffee-maker/1.webp",
         "/images/coffee-makers/turkish-coffee-maker/2.webp",
         "/images/coffee-makers/turkish-coffee-maker/3.webp",
         "/images/coffee-makers/turkish-coffee-maker/4.webp",
         "/images/coffee-makers/turkish-coffee-maker/5.webp",
      ],
   },
   {
      title: "Pour-Over Glass Coffee",
      price: "30",
      imgSrc: [
         "/images/coffee-makers/pour-over-glass-coffee-maker/1.webp",
         "/images/coffee-makers/pour-over-glass-coffee-maker/2.webp",
         "/images/coffee-makers/pour-over-glass-coffee-maker/3.webp",
      ],
   },
];

const breadMakers = [
   {
      title: "Bread Maker",
      price: "165",
      imgSrc: [
         "/images/bread-makers/1.webp",
         "/images/bread-makers/2.webp",
         "/images/bread-makers/3.webp",
         "/images/bread-makers/4.webp",
         "/images/bread-makers/5.webp",
      ],
   },
   {
      title: "Bread Maker (Open-Box)",
      price: "95",
      imgSrc: [
         "/images/bread-makers/1.webp",
         "/images/bread-makers/2.webp",
         "/images/bread-makers/3.webp",
         "/images/bread-makers/4.webp",
         "/images/bread-makers/5.webp",
      ],
   },
];

const airFryers = [
   {
      title: "Smart Air Fryers, 5 Quart",
      price: "74",
      imgSrc: [
         "/images/air-fryers/air-fryer-oven-5-quart/1.webp",
         "/images/air-fryers/air-fryer-oven-5-quart/2.webp",
         "/images/air-fryers/air-fryer-oven-5-quart/3.webp",
         "/images/air-fryers/air-fryer-oven-5-quart/4.webp",
      ],
   },
   {
      title: "Air Fryer Oven, 13 Quart",
      price: "81",
      imgSrc: [
         "/images/air-fryers/air-fryer-oven-13-quart/1.webp",
         "/images/air-fryers/air-fryer-oven-13-quart/2.webp",
         "/images/air-fryers/air-fryer-oven-13-quart/3.webp",
         "/images/air-fryers/air-fryer-oven-13-quart/4.webp",
         "/images/air-fryers/air-fryer-oven-13-quart/5.webp",
      ],
   },
];

const foodPrepAppliances = [
   {
      title: "AutoMatic Pot Stirrer",
      price: "51",
      imgSrc: [
         "/images/food-prep-appliances/automatic-pot-stirrer/1.webp",
         "/images/food-prep-appliances/automatic-pot-stirrer/2.webp",
      ],
   },
   {
      title: "Smart Sous Vide Cooker",
      price: "70",
      imgSrc: [
         "/images/food-prep-appliances/smart-sous-vide-cooker/1.webp",
         "/images/food-prep-appliances/smart-sous-vide-cooker/2.webp",
         "/images/food-prep-appliances/smart-sous-vide-cooker/3.webp",
         "/images/food-prep-appliances/smart-sous-vide-cooker/4.webp",
      ],
   },
];

const airPurifiers = [
   {
      title: "HEPA H13 Air Purifier",
      price: "75",
      imgSrc: [
         "/images/air-purifiers/hepa-h13-air-purifier/1.webp",
         "/images/air-purifiers/hepa-h13-air-purifier/2.webp",
         "/images/air-purifiers/hepa-h13-air-purifier/3.webp",
      ],
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
      imgSrc: ["/images/parts/air-fryer-oven/removable-door/1.webp"],
   },
   {
      title: "Rotisserie Rod & Forks",
      price: "12",
      imgSrc: ["/images/parts/air-fryer-oven/Rotisserie-rod-forks/1.webp"],
   },
   {
      title: "Removal Tool",
      price: "6",
      imgSrc: ["/images/parts/air-fryer-oven/removal-tool/1.webp"],
   },
   {
      title: "Mesh Racks",
      price: "10",
      imgSrc: ["/images/parts/air-fryer-oven/mesh-racks/1.webp"],
   },
   {
      title: "Rotisserie Skewers",
      price: "15",
      imgSrc: ["/images/parts/air-fryer-oven/rotisserie-skewers/1.webp"],
   },
   {
      title: "Oil Drip Tray",
      price: "8",
      imgSrc: ["/images/parts/air-fryer-oven/oil-drip-tray/1.webp"],
   },
   {
      title: "Rotisserie Basket",
      price: "12",
      imgSrc: ["/images/parts/air-fryer-oven/rotisserie-basket/1.webp"],
   },
];

const AirPurifier: IItem[] = [
   {
      title: "Air purifier Filter",
      price: "29",
      imgSrc: ["/images/parts/air-purifier/air-purifier-filter/1.webp"],
   },
];

const BaristanKettle: IItem[] = [
   {
      title: "Baristan Replacement Lid",
      price: "15",
      imgSrc: ["/images/parts/baristan-kettle/baristan-replacement-lid/1.webp"],
   },
   {
      title: "Baristan Replacement Base",
      price: "15",
      imgSrc: [
         "/images/parts/baristan-kettle/baristan-replacement-base/1.webp",
      ],
   },
   {
      title: "Baristan Replacement Body",
      price: "40",
      imgSrc: [
         "/images/parts/baristan-kettle/baristan-replacement-body/1.webp",
      ],
   },
];

const BreadMaker: IItem[] = [
   {
      title: "Bread Maker Pan",
      price: "23",
      imgSrc: ["/images/parts/bread-maker/bread-maker-pan/1.webp"],
   },
   {
      title: "Bread Maker Kneading Paddles",
      price: "12",
      imgSrc: ["/images/parts/bread-maker/bread-maker-kneading-paddles/1.webp"],
   },
];

const ChaiovarSamovar: IItem[] = [
   {
      title: "Chaiovar Replacement Faucet",
      price: "15",
      imgSrc: [
         "/images/parts/chaiovar-samovar/chaiovar-replacement-faucet/1.webp",
      ],
   },
   {
      title: "Chaiovar Replacement Teapot with Lid",
      price: "25",
      imgSrc: [
         "/images/parts/chaiovar-samovar/chaiovar-replacement-teapot-with-lid/1.webp",
      ],
   },
   {
      title: "Chaiovar Replacement Lid",
      price: "15",
      imgSrc: [
         "/images/parts/chaiovar-samovar/chaiovar-replacement-lid/1.webp",
      ],
   },
   {
      title: "Chaiovar Replacement Tea Infuser",
      price: "12",
      imgSrc: [
         "/images/parts/chaiovar-samovar/chaiovar-replacement-tea-infuser/1.webp",
      ],
   },
   {
      title: "Chaiovar Replacement Teapot Holder",
      price: "15",
      imgSrc: [
         "/images/parts/chaiovar-samovar/chaiovar-replacement-teapot-holder/1.webp",
      ],
   },
   {
      title: "Chaiovar Replacement Drip Tray",
      price: "15",
      imgSrc: [
         "/images/parts/chaiovar-samovar/chaiovar-replacement-drip-tray/1.webp",
      ],
   },
];

const ElectricSamovarV1: IItem[] = [
   {
      title: "Samovar Teapot",
      price: "21",
      imgSrc: ["/images/parts/electric-samovar-v1/samovar-teapot/1.webp"],
   },
   {
      title: "Samovar Teapot Infuser",
      price: "11",
      imgSrc: [
         "/images/parts/electric-samovar-v1/samovar-teapot-infuser/1.webp",
      ],
   },
];

const LunaKettle: IItem[] = [
   {
      title: "Luna Replacement Base",
      price: "45",
      imgSrc: ["/images/parts/luna-kettle/luna-replacement-base/1.webp"],
   },
   {
      title: "Luna Replacement Lid",
      price: "10",
      imgSrc: ["/images/parts/luna-kettle/luna-replacement-lid/1.webp"],
   },
   {
      title: "Luna Replacement Body",
      price: "50",
      imgSrc: ["/images/parts/luna-kettle/luna-replacement-body/1.webp"],
   },
];

const PourOverCoffeMaker: IItem[] = [
   {
      title: "Pour Over Mesh Filter",
      price: "12",
      imgSrc: [
         "/images/parts/pour-over-coffee-maker/pour-over-mesh-filter/1.webp",
         "/images/parts/pour-over-coffee-maker/pour-over-mesh-filter/2.webp",
         "/images/parts/pour-over-coffee-maker/pour-over-mesh-filter/3.webp",
         "/images/parts/pour-over-coffee-maker/pour-over-mesh-filter/4.webp",
      ],
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
