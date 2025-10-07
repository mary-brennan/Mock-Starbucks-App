export type MainDrink = {
  img: string;
  name: string;
  id: number;
};
export type Option = {
  type: string;
  name: string;
  drinks: Drink[];
};
export type Drink = {
  img: string;
  name: string;
  id: number;
};

export const MainDrinks: MainDrink[] = [
  { img: "/IcedVanillaProteinLatte.jpg", name: "Protein Beverages", id: 1 },
  {
    img: "/CaffeLatte.jpg",
    name: "Hot Coffee",
    id: 2,
  },
  {
    img: "/VanillaSweetCreamColdBrew.jpg",
    name: "Cold Coffee",
    id: 3,
  },
  {
    img: "/HoneyCitrusMintTea.jpg",
    name: "Hot Tea",
    id: 4,
  },
  {
    img: "/IcedMatchaTeaLatte.jpg",
    name: "Cold Tea",
    id: 5,
  },
  {
    img: "/StrawberryAcaiLemonadeRefreshers.jpg",
    name: "Refreshers",
    id: 6,
  },
  {
    img: "/CaramelRibbonCrunchCremeFrappuccino.jpg",
    name: "Frappuccino Blended Beverage",
    id: 7,
  },
  {
    img: "/HotChocolate.jpg",
    name: "Hot Chocolate, Lemonade & More",
    id: 8,
  },
  {
    img: "/EvolutionFreshOrganicDefenseUp.jpg",
    name: "Bottled Beverages",
    id: 9,
  },
];

export const Drinks = {
  proteinBev: {
    name: "Protein Beverages",
    Options: [
      {
        type: "Reg",
        name: "High Protein Lattes",
        drinks: [
          {
            img: "/pDrinks/IcedVanillaProteinLatte.jpg",
            name: "Iced Vanilla Protein Latte",
            id: 1,
          },
          {
            img: "/pDrinks/ProteinMatchaTeaLatte.jpg",
            name: "Iced Protein Matcha",
            id: 2,
          },
          {
            img: "/pDrinks/CaffeLatte.jpg",
            name: "Vanilla Protein Latte",
            id: 3,
          },
          {
            img: "/pDrinks/ProteinMatchaTeaLatte.jpg",
            name: "Protein Matcha",
            id: 4,
          },
        ],
      },
      {
        type: "SugarFree",
        name: "No added Sugar Options",
        drinks: [
          {
            img: "/pDrinks/IcedVanillaProteinLatte.jpg",
            name: "Iced Sugar-Free Vanilla Protein Latte",
            id: 1,
          },
          {
            img: "/pDrinks/IcedMatchaTeaLatte.jpg",
            name: "Iced Sugar-Free Vanilla Protein Matcha",
            id: 2,
          },
          {
            img: "/pDrinks/CaffeLatte.jpg",
            name: "Sugar-Free Vanilla Protein Latte",
            id: 3,
          },
          {
            img: "/pDrinks/ProteinMatchaTeaLatte.jpg",
            name: "Sugar-Free Vanilla Protein Matcha",
            id: 4,
          },
        ],
      },
      {
        type: "ProteinColdFoam",
        name: "Protein Cold Foam Drinks",
        drinks: [
          {
            img: "/pDrinks/IcedCaffeLattewProtein.jpg",
            name: "Iced Vanilla Cream Protein Latte",
            id: 1,
          },
          {
            img: "/pDrinks/IcedBananaProteinMatcha.jpg",
            name: "Iced Banana Cream Protein Matcha",
            id: 2,
          },
          {
            img: "/pDrinks/ChocolateProteinColdBrew.jpg",
            name: "Chocolate Cream Protein Cold Brew",
            id: 3,
          },
        ],
      },
    ],
  },
};
