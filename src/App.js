import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Menu from "./pages/Menu/Menu";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div className='noto-sans'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Orders' element={<Orders />} />
        </Routes>
        <SideBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
