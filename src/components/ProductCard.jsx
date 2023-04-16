import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const handlerAdd = (props) => {
    // console.log(props)
    dispatch(addToCart(props));
  };
  return (
    <div>
      <div className="w-[280px] flex flex-col justify-between h-[420px]  text-[16px] rounded-xl px-2">
        <div className="h-[280px] w-[280px] rounded-md flex items-center justify-center">
          <img src={props.imgURL} width="100px" alt="" />
        </div>

        <div className="flex justify-between">
          <h1 className="max-w-[180px] overflow-hidden max-h-[60px] font-semibold">
            {props.name}
          </h1>
          <h1 className="max-w-[100px] font-semibold text-[#8A2E38] text-xl">
            $ {props.price}
          </h1>
        </div>

        <h1>
          ratings : {props.rating} ({props.count})
        </h1>
        <button
          onClick={() => handlerAdd(props)}
          className="bg-[#8A2E38] text-white px-6 py-2  justify-center"
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
