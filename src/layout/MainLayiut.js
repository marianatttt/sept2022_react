import {Outlet} from "react-router-dom";
import {Header} from "../components";

const MainLayiut = () => {
 return (
  <div>
      <Header/>

      <Outlet/>
  </div>
 );
};

export {MainLayiut};