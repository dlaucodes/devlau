import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx"
import { CiMenuBurger } from "react-icons/ci"
const MobileNav = () => {
  return (
    <div>
      <CiMenuBurger 
        value={{size: '50px'}}
      />
      {/* <RxHamburgerMenu /> */}
    </div>
  );
};

export default MobileNav;
