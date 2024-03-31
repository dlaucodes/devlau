import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiFileTextFill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:h-[80vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-hero_dark">
      <div className="container mx-auto">
        <div className="flex justify-between px-10">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-m uppercase font-semi-bold mb-4 text-primary tracking-[4px]">
              Software Engineer
            </div>
            <h1 className="h1">
              Hello, I'm
              <br />
              David Lau
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              New York City
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link href='https://docs.google.com/document/d/1GEqPwXmpgmEqv5r1XLY7aHzzSK13YpJNmWita-3SRqk/view'
              target='_blank'>
              <Button variant="secondary" className="gap-x-2">
               View Resume <RiFileTextFill size={18} />
              </Button>
              </Link>
            </div>
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative justify-center items-center">
            <div className=" w-[400px] h-[500px] bg-no-repeat items-center content-center border border-primary rounded-[30px] overflow-hidden justify-center">
              <DevImg
                containerStyles="flex justify-items-center justify-center pb-20"
                imgSrc="/assets/hero/personal.jpeg"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:sticky justify-center left-2/4 bottom-0 xl:bottom-0 mt-20 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary mt-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
