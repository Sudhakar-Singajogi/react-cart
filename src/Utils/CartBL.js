

export const CheckProductAdded = (prdid, items) => {
    const inCart = items.some((element) => {
    if (element.id.toString() === prdid) {
      return true;
    }
    return false;
  });

  return inCart;
    
}