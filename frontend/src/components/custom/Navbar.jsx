import { logo } from "@/assets";
import { Button } from "../ui/button";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-orange-500 text-white flex items-center justify-between px-4 shadow-md">
      <Link to={"/"}>
        <div className="text-xl font-medium text-slate-100 flex items-center gap-x-2">
          <img className="w-8 h-8" src={logo} />
          <span className="text-white font-poppins">Food Hub</span>
        </div>
      </Link>
      <div>
        <Link to={"/admin/dashboard"}>
          <Button className="bg-slate-800 text-slate-100 rounded-full hover:bg-slate-700 font-poppins">
            Admin Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
