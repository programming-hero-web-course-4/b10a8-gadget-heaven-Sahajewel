const addToCart = id =>{
   const addCart = [];
   addCart.push(id)
   localStorage.setItem('addCart', JSON.stringify(addCart))
}
export {addToCart}