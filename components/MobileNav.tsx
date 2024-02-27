import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger} from '/components/ui/sheet';

import { CiMenuBurger } from "react-icons/ci"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuBurger 
          value={{size: '50px'}}
          className='cursor-pointer'
        />

      </SheetTrigger>
      <SheetContent>content</SheetContent>
    </Sheet>
  );
};

export default MobileNav;
