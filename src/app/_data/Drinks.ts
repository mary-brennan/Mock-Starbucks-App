export type MainDrink = {
  img: string;
  name: string;
  link: string;
  id: number;
};
export type Option = {
  type: string;
  name: string;
  drinks: Drink[];
};

export const MainDrinks: MainDrink[] = [
  {
    img: "/IcedVanillaProteinLatte.jpg",
    name: "Protein Beverages",
    link: "proteinBev",
    id: 1,
  },
  {
    img: "/CaffeLatte.jpg",
    name: "Hot Coffee",
    link: "hotCoffee",
    id: 2,
  },
  {
    img: "/VanillaSweetCreamColdBrew.jpg",
    name: "Cold Coffee",
    link: "ColdCoffe",
    id: 3,
  },
  {
    img: "/HoneyCitrusMintTea.jpg",
    name: "Hot Tea",
    link: "hotTea",
    id: 4,
  },
  {
    img: "/IcedMatchaTeaLatte.jpg",
    name: "Cold Tea",
    link: "coldTea",
    id: 5,
  },
  {
    img: "/StrawberryAcaiLemonadeRefreshers.jpg",
    name: "Refreshers",
    link: "refreshers",
    id: 6,
  },
  {
    img: "/CaramelRibbonCrunchCremeFrappuccino.jpg",
    name: "Frappuccino Blended Beverage",
    link: "frappuccino",
    id: 7,
  },
  {
    img: "/HotChocolate.jpg",
    name: "Hot Chocolate, Lemonade & More",
    link: "other",
    id: 8,
  },
  {
    img: "/EvolutionFreshOrganicDefenseUp.jpg",
    name: "Bottled Beverages",
    link: "bottled",
    id: 9,
  },
];
export type Drink = {
  img: string;
  imgFull: string;
  name: string;
  id: number;
  sm: {
    calories: number;
    milk: string;
    sweetener: string;
    shotOption: string;
    shots: number;
    addIns: string;
  };
  md: {
    calories: number;
    milk: string;
    sweetener: string;
    shotOption: string;
    shots: number;
    addIns: string;
  };
  lg: {
    calories: number;
    milk: string;
    sweetener: string;
    shotOption: string;
    shots: number;
    addIns: string;
  };
};

export const Drinks = {
  proteinBev: {
    name: "Protein Beverages",
    Options: [
      {
        type: "Reg",
        name: "High Protein Lattes",
        drinks: [
          {
            img: "/pDrinks/IcedCaffeLattewProtein.jpg",
            imgFull: "/pDrinks/IcedCaffeLattewProteinFull.jpg",
            name: "Iced Vanilla Protein Latte",
            id: 1,
            sm: {
              calories: 210,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 1,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
            md: {
              calories: 270,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 2,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
            lg: {
              calories: 390,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 3,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
          },
          {
            img: "/pDrinks/IcedMatchaTeaLatte.jpg",
            imgFull: "/pDrinks/IcedMatchaTeaLattewProteinFull.jpg",
            name: "Iced Protein Matcha",
            id: 2,
            sm: {
              calories: 220,
              milk: "Protein-boosted Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
            md: {
              calories: 300,
              milk: "Protein-boosted Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
            lg: {
              calories: 430,
              milk: "Protein-boosted Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
          },
          {
            img: "/pDrinks/CaffeLatte.jpg",
            imgFull: "/pDrinks/CaffeLattewProteinFull.jpg",
            name: "Vanilla Protein Latte",
            id: 3,
            sm: {
              calories: 240,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 1,
              shotOption: "Signature Espresso",
              addIns: "No Ice",
            },
            md: {
              calories: 310,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 2,
              shotOption: "Signature Espresso",
              addIns: "No Ice",
            },
            lg: {
              calories: 360,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 2,
              shotOption: "Signature Espresso",
              addIns: "No Ice",
            },
          },
          {
            img: "/pDrinks/ProteinMatchaTeaLatte.jpg",
            imgFull: "/pDrinks/ProteinMatchaTeaLatteFull.jpg",
            name: "Protein Matcha",
            id: 4,
            sm: {
              calories: 220,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "No Ice",
            },
            md: {
              calories: 300,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "No Ice",
            },
            lg: {
              calories: 370,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "No Ice",
            },
          },
        ],
      },
      {
        type: "SugarFree",
        name: "No added Sugar Options",
        drinks: [
          {
            img: "/pDrinks/IcedCaffeLattewProtein.jpg",
            imgFull: "/pDrinks/IcedCaffeLattewProteinFull.jpg",
            name: "Iced Sugar-Free Vanilla Protein Latte",
            id: 1,
            sm: {
              calories: 210,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 1,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
            md: {
              calories: 270,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 2,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
            lg: {
              calories: 390,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 3,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
          },
          {
            img: "/pDrinks/IcedMatchaTeaLatte.jpg",
            imgFull: "/pDrinks/IcedMatchaTeaLattewProteinFull.jpg",
            name: "Iced Sugar-Free Vanilla Protein Matcha",
            id: 2,
            sm: {
              calories: 220,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
            md: {
              calories: 300,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
            lg: {
              calories: 430,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
          },
          {
            img: "/pDrinks/CaffeLatte.jpg",
            imgFull: "/pDrinks/CaffeLattewProteinFull.jpg",
            name: "Sugar-Free Vanilla Protein Latte",
            id: 3,
            sm: {
              calories: 240,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 1,
              shotOption: "Signature Espresso",
              addIns: "No Ice",
            },
            md: {
              calories: 310,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 2,
              shotOption: "Signature Espresso",
              addIns: "No Ice",
            },
            lg: {
              calories: 360,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 2,
              shotOption: "Signature Espresso",
              addIns: "No Ice",
            },
          },
          {
            img: "/pDrinks/ProteinMatchaTeaLatte.jpg",
            imgFull: "/pDrinks/ProteinMatchaTeaLatteFull.jpg",
            name: "Sugar-Free Vanilla Protein Matcha",
            id: 4,
            sm: {
              calories: 220,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "No Ice",
            },
            md: {
              calories: 300,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "No Ice",
            },
            lg: {
              calories: 370,
              milk: "Protein-boosted Milk",
              sweetener: "Vanilla Sugar-Free Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "No Ice",
            },
          },
        ],
      },
      {
        type: "ProteinColdFoam",
        name: "Protein Cold Foam Drinks",
        drinks: [
          {
            img: "/pDrinks/IcedVanillaCreamProteinLatte.jpg",
            imgFull: "/pDrinks/IcedVanillaCreamProteinLatteFull.jpg",
            name: "Iced Vanilla Cream Protein Latte",
            id: 1,
            sm: {
              calories: 250,
              milk: "2% Milk",
              sweetener: "Vanilla Syrup",
              shots: 1,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
            md: {
              calories: 330,
              milk: "2% Milk",
              sweetener: "Vanilla Syrup",
              shots: 2,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
            lg: {
              calories: 460,
              milk: "2% Milk",
              sweetener: "Vanilla Syrup",
              shots: 3,
              shotOption: "Signature Espresso",
              addIns: "Ice",
            },
          },
          {
            img: "/pDrinks/IcedBananaProteinMatcha.jpg",
            imgFull: "/pDrinks/IcedBananaProteinMatchaFull.jpg",
            name: "Iced Banana Cream Protein Matcha",
            id: 2,
            sm: {
              calories: 250,
              milk: "2% Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
            md: {
              calories: 340,
              milk: "2% Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
            lg: {
              calories: 480,
              milk: "2% Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
          },
          {
            img: "/pDrinks/ChocolateProteinColdBrew.jpg",
            imgFull: "/pDrinks/ChocolateProteinColdBrewFull.jpg",
            name: "Chocolate Cream Protein Cold Brew",
            id: 3,
            sm: {
              calories: 230,
              milk: "Protein-boosted Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
            md: {
              calories: 310,
              milk: "Protein-boosted Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
            lg: {
              calories: 440,
              milk: "Protein-boosted Milk",
              sweetener: "Classic Syrup",
              shots: 0,
              shotOption: "None",
              addIns: "Ice",
            },
          },
        ],
      },
    ],
  },
};
