import { Link } from "react-router";
import frontRoutes from "../routes/frontRoutes.js";

function Product({ id, name, price, imageUrl }) {
  return (
    <div className="productBox">
      <div style={{ height: "100%" }}>
        <div className="w-60 h-full px-6 py-10 border-4 border-gray-300 rounded-md bg-gradient-to-r from-gray-300 to-gray-500 flex flex-col justify-center items-center gap-4 shadow-[inset_3px_3px_6px_#fff,_inset_5px_5px_10px_#000,_0px_5px_10px_#000]">
          <h2 className="text-lg font-bold mb-4 tracking-[2px]">{`${name} -#${id}`}</h2>
          <div className="w-52 h-52 overflow-hidden rounded-md shadow-[0px_4px_10px_#000] border border-violet-200">
            <img
              src={imageUrl}
              alt="picture"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xl font-bold tracking-[2px] mb-4 bg-gradient-to-r from-violet-700 to-rose-300 bg-clip-text text-transparent">
            {`PRICE-${price}$`}
          </p>
          <p className="border-l-2 border-violet-50 ps-4">
            text: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis temporibus ex officia explicabo aperiam quaerat?
          </p>
          <p className="text-2xl bg-gradient-to-r from-violet-400 to-rose-200 bg-clip-text text-transparent">
            MODEL :{id}
          </p>
          <p className="text-s bg-gradient-to-r from-violet-700 to-rose-100 bg-clip-text text-transparent">
            COLOR:
          </p>
          <div>
            <Link to={frontRoutes.navigate.products.getDetailLink(id)}>
              Detail-{name}
            </Link>
            {" | "}
            <Link to={frontRoutes.navigate.products.getEditLink(id)}>✏️</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
