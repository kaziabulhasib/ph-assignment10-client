import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
  return (
    <div className='max-w-7xl mx-auto py-8 pb-14 border'>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
