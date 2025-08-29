"use client";

import { RootState } from "@/store/store";
import React from "react";
import { Menu, ShoppingCart, User } from "react-feather";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  const totalCart = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="lg:px-20 px-6 lg:py-10 py-5">
      <nav className="flex items-center justify-between">
        <div className="text-primary md:text-2xl text-xl font-extrabold flex items-center gap-3">
          <span className="bg-primary-50 p-2 rounded-xl">
            <Menu />
          </span>
          MegaMart
        </div>

        <div className="hidden lg:flex items-center justify-end gap-4 w-[60%]">
          <input
            type="text"
            placeholder="Search"
            className="bg-primary-50 rounded-xl p-3.5 w-1/2"
          />

          <p className="flex gap-3 items-center font-bold text-gray-100 border-r pr-4 cursor-pointer">
            <span className="text-primary">
              <User />
            </span>
            Sign Up/Sign In
          </p>

          <p className="flex gap-3 items-center font-bold text-gray-100 cursor-pointer">
            <span className="text-primary relative">
              {totalCart > 0 && (
                <span className="absolute left-3 -top-2 text-gray-50 rounded-full bg-gray-100 size-5 text-xs text-center flex items-center justify-center">
                  {totalCart}
                </span>
              )}
              <ShoppingCart />
            </span>
            Cart
          </p>
        </div>

        <div className="lg:hidden flex gap-6">
          <User />
          <ShoppingCart />
        </div>
      </nav>

      <div className="lg:hidden flex mt-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-primary-50 rounded-xl p-2 w-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
