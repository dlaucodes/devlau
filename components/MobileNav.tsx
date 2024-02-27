import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "/components/ui/sheet";

import { CiMenuBurger } from "react-icons/ci";

import Nav from "./Nav";
import Logo from "./Logo";
import Social from "./Social";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuBurger value={{ size: "60px" }} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
    
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
            <Social containerStyles="flex gap-x-4" iconStyles="text-2xl"
            linkStyles="text-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
