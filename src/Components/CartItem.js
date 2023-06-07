import React from "react";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function CartItem(product) {
  const dispatch = useDispatch();

  return (
    <>
      <td>
        <Link className="navLink" to={`/product-details/${product.id}`}>
          <img src={product.image} alt="" />
        </Link>
      </td>
      <td>
        <Link className="navLink" to={`/product-details/${product.id}`}>
          <h5 class="prd-title" title={product.name}>
            {product.name}
          </h5>
        </Link>
      </td>
      <td>
        <h5>{product.price}</h5>
      </td>
      <td>
        <span>
          <input
            type="button"
            value="-"
            onClick={() => dispatch(decreaseQuantity({ id: product.id }))}
          />
          <input
            type="text"
            value={product.count ? product.count : 1}
            style={{
              width: "2.5rem",
              textAlign: "center",
              margin: "2px",
            }}
            disabled
          />
          <input
            type="button"
            value="+"
            onClick={() => dispatch(increaseQuantity({ id: product.id }))}
          />
        </span>
      </td>
      <td>
      <button
          className="btn"
          onClick={() => {
            dispatch(removeItem(product.id));
          }}
        >
          Remove
        </button>
      </td>
    </>
  );
//   return (
//     <>
//       <div key={product.id} className="cartCard">
//         <span>
//           <Link className="navLink" to={`/product-details/${product.id}`}>
//             <img src={product.image} alt="" />
//           </Link>
//         </span>
//         <span>
//           <Link className="navLink" to={`/product-details/${product.id}`}>
//             <h5 class="prd-title" title={product.name}>
//               {product.name}
//             </h5>
//           </Link>
//         </span>
//         <span>
//           <h5>{product.price}</h5>
//         </span>
//         <span>
//           <input
//             type="button"
//             value="-"
//             onClick={() => dispatch(decreaseQuantity({ id: product.id }))}
//           />
//           <input
//             type="text"
//             value={product.count ? product.count : 1}
//             style={{
//               width: "2.5rem",
//               textAlign: "center",
//               margin: "2px",
//             }}
//             disabled
//           />
//           <input
//             type="button"
//             value="+"
//             onClick={() => dispatch(increaseQuantity({ id: product.id }))}
//           />
//         </span>
//         <button
//           className="btn"
//           onClick={() => {
//             dispatch(removeItem(product.id));
//           }}
//         >
//           Remove
//         </button>
//       </div>
//     </>
//   );
}

export default CartItem;
