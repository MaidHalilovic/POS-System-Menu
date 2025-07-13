import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Menu from "./pages/Menu/Menu";
import Orders from "./pages/Orders/Orders";
import Layout from "./components/Layout/Layout";
import { MenuProvider } from "./MenuContext/MenuContext";
import { OrderProvider } from "./OrderContext/OrderContext";

function App() {
  return (
    <MenuProvider>
      <OrderProvider>
        <div className='noto-sans'>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='menu' element={<Menu />} />
                <Route path='orders' element={<Orders />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </OrderProvider>
    </MenuProvider>
  );
}

export default App;
