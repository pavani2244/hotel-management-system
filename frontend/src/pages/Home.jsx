import { heroIcon } from "@/assets";
import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="pt-16 min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="flex items-center justify-center px-10">
          <div className="flex leading-tight w-1/4">
            <p className="text-[2.5rem] text-amber-500 font-poppins">
              Enjoy the Culinary Delight from{" "}
              <span className="text-orange-500 text-[4rem] font-poppins font-bold">
                Food Hub
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center w-2/4">
            <img
              src={heroIcon}
              className="transition-all animate-spin-slow w-[80%]"
            />
          </div>
          <div className="flex flex-col leading-tight w-1/4">
            <h3 className="text-4xl font-poppins font-semibold text-slate-800 leading-tight">
              Indian, Chinese, Arabian and Much more...
            </h3>
            <span className="text-slate-500 mt-8">
              Browse through our mouth watering menu extensive varieties of
              dishes.
            </span>
            <Link to={"/menu"}>
              <Button className="mt-8 rounded-full bg-orange-500 font-poppins text-white hover:bg-orange-600 h-12 w-full">
                <span>Explore Now!</span>
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
