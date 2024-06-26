import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import React from "react";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Social from "./Social";

//add interface
interface MobileNavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ containerStyles, linkStyles, underlineStyles }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-12">
          <div className="flex flex-col items-center gap-y-8">
            <Logo />
    
            <Nav
              underlineStyles=''
              containerStyles="flex flex-col items-center gap-y-4 mt-8"
              linkStyles="text-xl"
            />
            <Social containerStyles="flex gap-x-6" iconsStyles="text-foreground hover:text-primary transition-all text-xl"
          />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
