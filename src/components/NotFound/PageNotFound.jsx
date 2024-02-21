import React from "react";
import img from "../../assets/shopping/NotFound/404.png";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="flex justify-center h-full p-3 sale">
      <div className="w-[70%] flex justify-center flex-col">
        <div className="imgbox w-full flex justify-center">
          <img src={img} alt="" className="w-[20vw]" />
        </div>
        <div className="text-center p-3">
          <h1 className="py-2 lg:text-xl text-sm text-rose-400">
            404 Page Not Found
          </h1>
          <p className="text-[10px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            tenetur!
          </p>
        </div>
        <div className="button text-center">
          <Link to="/" className="px-2 py-1 border-1 text-sm rounded-md text-rose-400 border-rose-400">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
