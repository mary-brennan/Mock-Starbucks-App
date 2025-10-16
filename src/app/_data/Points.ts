export const pointsArray: pointDetail[] = [
  {
    id: 25,
    image: "/points/25.png",
    header: "Customize your drink",
    desc: "Make your drink just right with an extra espresso shot or a dash of your favorite syrup.",
  },
  {
    id: 100,
    image: "/points/100.png",
    header:
      "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
    desc: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
  },
  {
    id: 200,
    image: "/points/200.png",
    header: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
    desc: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
  },
  {
    id: 300,
    image: "/points/300.png",
    header: "Sandwich, protein box or at-home coffee",
    desc: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
  },
  {
    id: 400,
    image: "/points/400.png",
    header: "Select Beanies® merchandise",
    desc: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
  },
];

export type pointDetail = {
  id: number;
  image: string;
  header: string;
  desc: string;
};
