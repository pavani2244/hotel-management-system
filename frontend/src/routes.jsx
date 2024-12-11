import { Routes, Route } from "react-router";
import { Home, MenuList } from "./pages";
import AdminLayout from "./layout/AdminLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuList />} />
      <Route path="/admin/dashboard" element={<AdminLayout />}>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="menu-list" element={<Menu />} /> */}
        {/* <Route path="orders" element={<Orders />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
