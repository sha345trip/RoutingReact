import React from "react";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import useWindowSize from './hooks/useWindowSize';
import { DataProvider } from "./context/DataContext";
import { useContext } from "react";
import DataContext from "./context/DataContext";


const Layout = () => {
  const {search, setSearch} = useContext(DataContext);
  const {width} = useWindowSize();
  return (
    <div className="App">
      <DataProvider>
        <Header title="ReactJs Blog"/>
        <Nav/>
        <Outlet/>
        <Footer/>
      </DataProvider>
    </div>
  )
}

export default Layout