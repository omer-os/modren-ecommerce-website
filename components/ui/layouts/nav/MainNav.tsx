import Link from "next/link";
import React from "react";
import NvItem from "./NvItem";
import UiInput from "../../inputs/UiInput";
import { AiOutlineShopping } from "react-icons/ai";
import Avatar from "../../Avatars/UiAvatar";
export default function MainNav() {
  return (
    <header className="sticky z-50 top-0 left-0 bg-zinc-100 dark:bg-zinc-900">
      <nav className="flex justify-between items-center max-w-5xl mx-auto px-6 py-3">
        <div className="left flex gap-3 items-center">
          <div className="logo font-bold">Logo</div>

          <div className="h-8 w-1 md:flex hidden bg-zinc-400 rounded-full"></div>

          <div className="md:flex hidden">
            {[
              { href: "/", text: "Home" },
              { href: "/about", text: "About" },
            ].map((item) => (
              <NvItem key={item.href} href={item.href}>
                {item.text}
              </NvItem>
            ))}
          </div>
        </div>

        <div className="right flex gap-3 items-center">
          <div className="max-w-[20em] w-full md:flex hidden">
            <UiInput
              variant={"bordered"}
              placeholder="search for something"
              w="full"
            />
          </div>

          <Link
            href="/"
            className="hover:bg-zinc-200 hover:dark:bg-zinc-700 transition-all p-3 flex items-center active:scale-90 active:bg-zinc-300 active:dark:bg-zinc-800 justify-center rounded-full"
          >
            <AiOutlineShopping />
          </Link>

          <Avatar
            alt="avatar"
            src="https://images.unsplash.com/photo-1681483476977-322d81693e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            size={"lg"}
          />
        </div>
      </nav>
    </header>
  );
}
