import React from "react";
import { Drinks } from "@/app/_data/Drinks";
const page = async ({
  params,
}: {
  params: Promise<{ drink: string; subCategory: string; cat: string }>;
}) => {
  const { drink, subCategory, cat } = await params;

  const drinkCategory = Drinks[cat as keyof typeof Drinks];
  const option = drinkCategory?.Options.find((opt) => opt.type === subCategory);
  const matchingDrink = option?.drinks.find((d) => d.id === parseInt(drink));

  return (
    <div>
      {matchingDrink ? (
        <div>
          <h1>{matchingDrink.name}</h1>
          <img src={matchingDrink.img} alt={matchingDrink.name} />
        </div>
      ) : (
        <div>Drink not found</div>
      )}
    </div>
  );
};

export default page;
