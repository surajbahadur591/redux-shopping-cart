import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="my-2">
      <div className="flex justify-between">
        <Link  to="/">
        <h1 className="xs:text-xl  font-pacifico md:text-3xl text-[#8A2E38]">
          Shopping Store
        </h1>
          </Link>

        

        <div className="flex justify-center items-center">
          {/* <Link className="text-lg  px-4 hover:font-semibold" to="/">
            Home
          </Link> */}
          <h1 className="text-white"> {" Shopping bag asdasdasdasass "}</h1>
          <Link
            className="bg-[#8A2E38] fixed text-white py-2  justify-center  px-4   md:block"
            to="/cart"
          >
            Shopping Bag ({items.length})
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
