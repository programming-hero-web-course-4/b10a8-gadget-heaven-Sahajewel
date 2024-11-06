import { toast } from "react-toastify";

const getStoredCart = ()=>{
  const storedCartStr = localStorage.getItem('cart');
  if(storedCartStr){
    const srtCart = JSON.parse(storedCartStr)
    return srtCart;
  }
  else{
    return [];
  }
}



const addToStoredCart = id =>{
const storeCart = getStoredCart();
if(storeCart.includes(id)){
    toast('already exist')
    
}
else{
    storeCart.push(id);
    const storedCartString = JSON.stringify(storeCart)
    localStorage.setItem('cart',storedCartString )
    toast("added product")
}
}

const addToWishlist = id =>{
    const storeWishlist = getStoredCart();
    if(storeWishlist.includes(id)){
        
        toast("already exist")
    }
    else{
        storeWishlist.push(id)
        const storedWishlistString = JSON.stringify(storeWishlist)
        localStorage.setItem('cart', storedWishlistString )
        toast("added product")
    }
}
export{addToStoredCart, getStoredCart, addToWishlist}
