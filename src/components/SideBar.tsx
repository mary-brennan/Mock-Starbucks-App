import React from "react";
import Link from "next/link";
const SideBar = () => {
  return (
    <div className="hidden lg:flex flex-col">
      <nav className="mt-4 ">
        <span className="font-semibold  text-lg">Drinks</span>
        <ul className="text-gray-500">
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/proteinBev"
              className="flex justify-between"
            >
              Protein Beverages
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/hot-coffee"
              className="flex justify-between"
            >
              Hot Coffee
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/cold-coffee"
              className="flex justify-between"
            >
              Cold Coffee
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/hot-tea"
              className="  flex justify-between"
            >
              Hot Tea
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/cold-tea"
              className="  flex justify-between"
            >
              Cold Tea
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/refreshers"
              className="flex justify-between"
            >
              Refreshers
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/frappuccino-blended-beverage"
              className="flex justify-between"
            >
              Frappuccino® Blended Beverage
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/hot-chocolate-lemonade-more"
              className="flex justify-between"
            >
              Hot Chocolate, Lemonade & More
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <Link
              href="/menu/drinks/bottled-beverages"
              className="flex justify-between"
            >
              Bottled Beverages
            </Link>
          </li>
        </ul>
      </nav>
      {/* <nav className="mt-4">
        <span className="font-semibold  text-lg">Food</span>
        <ul className="text-gray-500">
          <li className="my-3 hover:text-black">
            <a href="/menu/food/breakfast" className="flex justify-between">
              Breakfast
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/food/bakery" className="flex justify-between">
              Bakery
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/food/treats" className="flex justify-between">
              Treats
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/food/lunch" className="flex justify-between">
              Lunch
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/food/snacks" className="flex justify-between">
              Snacks
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="mt-4">
        <span className="font-semibold  text-lg">At Home Coffee</span>
        <ul className="text-gray-500">
          <li className="my-3 hover:text-black">
            <a
              href="/menu/at-home-coffee/whole-bean"
              className="flex justify-between"
            >
              Whole Bean
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <a
              href="/menu/at-home-coffee/grounded"
              className="flex justify-between"
            >
              Grounded
            </Link>
          </li>
          <li className="my-3 hover:text-black">
            <a
              href="/menu/at-home-coffee/machines"
              className="flex justify-between"
            >
              Machines
            </Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default SideBar;
