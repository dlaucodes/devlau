import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "/components/ui/sheet";

import { CiMenuBurger } from "react-icons/ci";

import Nav from "./Nav";
import Logo from "./Logo";
import Social from "./Social";
import About from "./About";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuBurger value={{ size: "60px" }} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-12">
            <Logo />
    
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
            <Social containerStyles="flex gap-x-4" iconsStyles="text-foreground hover:text-primary transition-all"
            linkStyles="text-2xl" />
        <About />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
