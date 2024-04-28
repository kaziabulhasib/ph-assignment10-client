import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className=' min-h-screen relative  '>
      <div className='max-w-7xl mx-auto py9 pb-14'>
        <Nav></Nav>
        <Outlet></Outlet>
      </div>

      <Footer className='absolute bottom-0 w-full'></Footer>
    </div>
  );
};

export default Root;
