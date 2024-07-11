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

export { allProducts };
