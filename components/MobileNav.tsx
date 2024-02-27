import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from '/components/ui/sheet';

import { CiMenuBurger } from "react-icons/ci";

import Nav from './Nav';
import Logo from './Logo';
import Social from './Social'


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuBurger
          value={{ size: '60px' }}
          className='cursor-pointer'
        />

      </SheetTrigger>
      <SheetContent>
        <div>
          <div>
            <Logo />
            <Nav />
            <Social />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
