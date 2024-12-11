import Navbar from "@/components/custom/Navbar";
import { RUPEE_SYMBOL } from "@/constants";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { fetchCategories, fetchDishes } from "@/api";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const MenuList = () => {
  // const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  // const filterDishesByCategory = async (id) => {
  //   const data = await fetchDishByCategories(id);
  //   setDishes(data?.data);
  // };

  const fetchAllDishes = async () => {
    const data = await fetchDishes();
    setDishes(data?.data);
  };

  const getAllCategories = async () => {
    const res = await fetchCategories();
    if (res.data.length) {
      // setCategories(res.data);
    }
  };

  // const handleChange = async (value) => {
  //   await filterDishesByCategory(value);
  // };

  useEffect(() => {
    getAllCategories();
    fetchAllDishes();
  }, []);

  return (
    <div className="w-full h-full p-10 font-poppins">
      <Navbar />
      {/* <div className="pt-16 mb-8 flex items-center justify-end">
        <Select onValueChange={(value) => handleChange(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category, index) => (
              <SelectItem key={index} value={category._id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}
      <h3 className="mt-16 text-slate-800 font-medium text-xl">
        Available Dishes
      </h3>
      <Separator className="mb-8" />
      {dishes.length ? (
        <div className="grid grid-cols-4 gap-5 max-h-[700px] overflow-scroll">
          {dishes?.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item?.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-slate-700">
                  {item?.category?.name}
                </p>
                <p className="font-medium text-slate-700">
                  Price: {`${RUPEE_SYMBOL}${item.price}`}
                </p>
              </CardContent>
              <CardFooter>
                <Button>
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <span className="font-poppins text-2xl font-medium text-red-500">
            No dishes found
          </span>
        </div>
      )}
    </div>
  );
};

export default MenuList;
