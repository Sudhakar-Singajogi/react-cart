// import React from "react";

// const AddToCartButton = React.memo(({ isAdded, handleAddCart, productInfo }) => {
//     let updatedPrd  = {
//         name: productInfo.title,
//         price: productInfo.price,
//         quantityPrice: productInfo.price,
//         image: productInfo.image,
//         id: productInfo.id,
//         count: 1,
//       }

//   return (
//     <button
//       onClick={isAdded.inCart  ? undefined : () => handleAddCart(updatedPrd)}
//       className={`btn ${isAdded.inCart ? "btn-success" : "btn-primary"}`}
//     >
//       {isAdded.inCart ? "In Cart" : "Add to cart"}
//     </button>
//   );
// });

// export default AddToCartButton;

import React from 'react'

function AddToCartButton(props) {
  const { isAdded, handleAddCart, productInfo } = props;  
      let updatedPrd  = {
        name: productInfo.title,
        price: productInfo.price,
        quantityPrice: productInfo.price,
        image: productInfo.image,
        id: productInfo.id,
        count: 1,
      }

  return (
    <button
      onClick={isAdded.inCart  ? undefined : () => handleAddCart(updatedPrd)}
      className={`btn ${isAdded.inCart ? "btn-success" : "btn-primary"}`}
    >
      {isAdded.inCart ? "In Cart" : "Add to cart"}
    </button>
  );
}

export default AddToCartButton