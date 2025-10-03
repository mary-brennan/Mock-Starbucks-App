import React from "react";

const SideBar = () => {
  return (
    <div className="hidden lg:flex flex-col">
      <nav className="mt-4 ">
        <span className="font-semibold  text-lg">Drinks</span>
        <ul className="text-gray-500">
          <li className="my-3 hover:text-black">
            <a
              href="/menu/drinks/protein-beverages"
              className="flex justify-between"
            >
              Protein Beverages
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/drinks/hot-coffee" className="flex justify-between">
              Hot Coffee
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/drinks/cold-coffee" className="flex justify-between">
              Cold Coffee
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/drinks/hot-tea" className="  flex justify-between">
              Hot Tea
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/drinks/cold-tea" className="  flex justify-between">
              Cold Tea
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/drinks/refreshers" className="flex justify-between">
              Refreshers
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a
              href="/menu/drinks/frappuccino-blended-beverage"
              className="flex justify-between"
            >
              Frappuccino® Blended Beverage
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a
              href="/menu/drinks/hot-chocolate-lemonade-more"
              className="flex justify-between"
            >
              Hot Chocolate, Lemonade & More
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a
              href="/menu/drinks/bottled-beverages"
              className="flex justify-between"
            >
              Bottled Beverages
            </a>
          </li>
        </ul>
      </nav>
      {/* <nav className="mt-4">
        <span className="font-semibold  text-lg">Food</span>
        <ul className="text-gray-500">
          <li className="my-3 hover:text-black">
            <a href="/menu/food/breakfast" className="flex justify-between">
              Breakfast
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/food/bakery" className="flex justify-between">
              Bakery
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/food/treats" className="flex justify-between">
              Treats
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/food/lunch" className="flex justify-between">
              Lunch
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a href="/menu/food/snacks" className="flex justify-between">
              Snacks
            </a>
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
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a
              href="/menu/at-home-coffee/grounded"
              className="flex justify-between"
            >
              Grounded
            </a>
          </li>
          <li className="my-3 hover:text-black">
            <a
              href="/menu/at-home-coffee/machines"
              className="flex justify-between"
            >
              Machines
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default SideBar;
