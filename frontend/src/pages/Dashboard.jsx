import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, Save, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import {
  createDish,
  deleteDish,
  fetchCategories,
  fetchDishes,
  updateDish,
} from "@/api";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { RUPEE_SYMBOL } from "@/constants";

const Dashboard = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState({});
  const [flagged, setFlagged] = useState({});
  /**
   * Fetch all categories from the API
   */
  const getAllCategories = async () => {
    const res = await fetchCategories();
    if (res.data.length) {
      setCategories(res.data);
    }
  };

  /**
   * Fetch all dishes from the API
   */
  const getAllDishes = async () => {
    const res = await fetchDishes();
    setDishes(res?.data);
  };

  /**
   *
   * @param {*} key string
   * @param {*} value string
   * Handles the onChange event for the Text Inputs
   */
  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData, // Spread the previous state
      [key]: value, // Update the specific key
    }));
  };

  /**
   *
   * @param {*} dish Object
   * Handles the Edit dish dialog
   */
  const showEditDialog = (dish) => {
    setEditOpen(true);
    setFormData(dish);
  };

  /**
   * Handles the Create dish API
   */
  const handleSubmit = async () => {
    console.log(formData);
    const res = await createDish(formData);
    if (res?.success) {
      toast({
        title: "Success",
        description: res?.message,
      });
      setOpen(false);
      await getAllDishes();
      return;
    }
    toast({
      title: "Failure",
      description: res?.message,
    });
  };

  /**
   * Handles the Update dish API
   */
  const handleUpdate = async () => {
    // eslint-disable-next-line no-unused-vars
    const { createdAt, updatedAt, __v, _id, category, ...rest } = formData;

    const apiData = {
      ...rest,
      category: category || category._id,
    };
    const res = await updateDish(_id, apiData);
    if (res?.success) {
      toast({
        title: "Success",
        description: res?.message,
      });
      setEditOpen(false);
      await getAllDishes();
      return;
    }
    toast({
      title: "Failure",
      description: res?.message,
    });
  };

  const flagDish = (dish) => {
    setFlagged(dish);
    setDeleteDialog(true);
  };

  const handleDelete = async () => {
    const res = await deleteDish(flagged?._id);
    if (res?.success) {
      toast({
        title: "Success",
        description: res?.message,
      });
      setDeleteDialog(false);
      await getAllDishes();
      return;
    }
    toast({
      title: "Failure",
      description: res?.message,
    });
  };

  useEffect(() => {
    getAllCategories();
    getAllDishes();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-end">
        <Dialog open={open}>
          <DialogTrigger asChild>
            <Button
              onClick={() => setOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <PlusCircle />
              Add new Dish
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new Dish</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-y-2">
              <Input
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Dish name"
              />
              <Input
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder="Price"
              />
              <Input
                onChange={(e) => handleChange("quantity", e.target.value)}
                placeholder="Available Quantity"
              />
              <Select
                onValueChange={(value) => handleChange("category", value)}
              >
                <SelectTrigger className="w-full">
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
              <Button onClick={handleSubmit} className="bg-orange-500 mt-5">
                <Save />
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {/* Update Dish Dialog */}
      <div className="flex items-center justify-end">
        <Dialog
          open={editOpen}
          onOpenChange={() => {
            setEditOpen(false);
          }}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Dish</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-y-2">
              <Input
                defaultValue={formData?.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Dish name"
              />
              <Input
                defaultValue={formData?.price}
                onChange={(e) => handleChange("price", e.target.defaultValue)}
                placeholder="Price"
              />
              <Input
                defaultValue={formData?.quantity}
                onChange={(e) => handleChange("quantity", e.target.value)}
                placeholder="Available Quantity"
              />
              <Select
                defaultValue={formData?.category?.name}
                onValueChange={(value) => handleChange("category", value)}
              >
                <SelectTrigger className="w-full">
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
              <Button onClick={handleUpdate} className="bg-orange-500 mt-5">
                <Save />
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {/* Delete Dialog */}
      <div>
        <Dialog
          open={deleteDialog}
          onOpenChange={() => setDeleteDialog((prevState) => !prevState)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete item?</DialogTitle>
              <Separator />
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
              <div className="flex items-center gap-x-3 justify-end">
                <Button
                  onClick={() => setDeleteDialog(false)}
                  className="bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200 mt-8"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDelete}
                  className="bg-red-500 mt-8 hover:bg-red-600"
                >
                  Delete
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-medium">Available Dishes</h2>
        <Separator className="mb-6" />
        <Table className="border">
          <TableHeader>
            <TableRow className="bg-slate-200">
              <TableHead className="">Dish Name</TableHead>
              <TableHead className="">Item Category</TableHead>
              <TableHead>Available Quantity</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dishes.length > 0 &&
              dishes?.map((dish) => (
                <TableRow key={dish?._id}>
                  <TableCell className="font-medium">{dish?.name}</TableCell>
                  <TableCell className="font-normal">
                    {dish?.category?.name}
                  </TableCell>
                  <TableCell className="text-left">{dish?.quantity}</TableCell>
                  <TableCell className="text-right font-medium">{`${RUPEE_SYMBOL}${dish.price}`}</TableCell>
                  <TableCell className="text-right font-medium space-x-3">
                    <Button
                      onClick={() => showEditDialog(dish)}
                      className="text-slate-800 bg-slate-200 hover:bg-green-300"
                    >
                      <Pencil />
                    </Button>
                    <Button
                      onClick={() => flagDish(dish)}
                      className="text-slate-800 bg-slate-200 hover:bg-red-500"
                    >
                      <Trash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
