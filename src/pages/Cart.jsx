import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
const Cart = () => {
  const bagItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (data) => {
    console.log(data);
    dispatch(removeFromCart(data));
  };

  return (
    <div>
      <div className=" mx-auto my-4 items-center text-center justify-center">
        <div className="flex justify-between text-gray-500 mx-2 my-2">
          <div className=" flex">
            <h1 className=" w-[80px] font-semibold">PRODUCT</h1>
            <h1 className="sm:w-[150px] md:w-[200px] mx-2 my-2"> </h1>
          </div>

          <h1 className=" font-semibold ">QUANTITY</h1>
          <h1 className=" w-[100px] font-semibold ">PRICE</h1>
        </div>
      </div>

      <div className=" mx-auto items-center text-center justify-center">
        {bagItems.map((item, index) => (
          <div key={item.id} className="flex justify-between mx-2 my-2">
            {/* div 1  - image */}
            <div className=" flex ">
              <img
                className="bg-blue-200"
                width="80px"
                // height="80px"
                src={item.imgURL}
                alt=""
              />
              <div className="w-[200px]  mx-2 my-2 ">
                <h1>{item.name}</h1>
              </div>
            </div>

            {/* div 2 - name and others  */}

            {/* div 3 - quanity add, remove  */}

            <div className="">
              <h1>x 1 </h1>
              <button
                onClick={() => {
                  handleRemove(item.id);
                }}
                className="text-[#8A2E38]"
              >
                Remove
              </button>
            </div>
            {/* div 4 price  */}
            <div className=" w-[100px]">
              <h1 className="font-semibold text-[#8A2E38]">$ {item.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
