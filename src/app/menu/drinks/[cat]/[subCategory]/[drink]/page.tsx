import { Drinks } from "@/app/_data/Drinks";
import Image from "next/image";
import DrinkDiv from "@/components/DrinkDiv";
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
        <>
          <DrinkDiv matchingDrink={matchingDrink} />
        </>
      ) : (
        <div>Drink not found</div>
      )}
    </div>
  );
};

export default page;
