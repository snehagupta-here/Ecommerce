import { toast } from "react-toastify";
import { products } from "../assets/assets";
import ShopContext from "./ShopContext";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const ShopState = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [showSearchbar,setShowSearchbar] = useState(false);
   let [cartItems,setCartItems] = useState({});
   let [showAlert,setShowAlert] = useState(false);
   let [showToastSuccess,setShowToastSuccess] = useState(false);
   let [showToastSuccess1,setShowToastSuccess1] = useState(false);
      const addToCart = (id,size) => {
        if(!size){
          if(!showAlert){
          setShowAlert(true);
          toast.dismiss();
          toast.error("Please Select Size",{
            onClose : () => setShowAlert(false)
          });
          }
          return;
        }
        console.log("size is: ",size);
               let cartCopy = {...cartItems};
               if(cartCopy[id]){
                        if(cartCopy[id][size]){
                                cartCopy[id][size] += 1;
                        }else{
                             cartCopy[id][size] = 1;
                        }
               }else{
                  cartCopy[id] = {};
                  cartCopy[id][size] = 1;
               }
               setCartItems(cartCopy);
               if(!showToastSuccess){
                setShowToastSuccess(true);
                toast.dismiss();
                toast.success("Item added to Cart",{
                  onClose : () => setShowToastSuccess(false)
                });
               }
    };
    useEffect(()=>{
                  console.log(cartItems);
                 
    },[cartItems])
    
    const deleteFromCart = (id,size) => {
             console.log(id);
             console.log(size);
             let cartCopy = {...cartItems};
             if(cartCopy[id]){
                      if(cartCopy[id][size] > 1){
                        cartCopy[id][size] -= 1;
                      }else{
                           delete cartCopy[id][size];
                      }
                      if(Object.keys(cartCopy[id]).length === 0){
                        delete cartCopy[id];
                      }
                      setCartItems(cartCopy);
                      if(!showToastSuccess1){
                        toast.dismiss();
                        setShowToastSuccess1(true);
                        toast.success("Item removed from Cart",{
                          onClose : () => setShowToastSuccess1(false)
                        });
                      }
             }
    }
    const handleClick = (id, size,quantity) => {
          let copy = {...cartItems};
          copy[id][size] = quantity;
          if(quantity === 0){
            delete copy[id][size];
          }
          setCartItems(copy);    
      // setCounter((prevCounter) => prevCounter - quantity);
  };
  const getCartCount = () => {
    let totalCount = 0;
          for(const id in cartItems){
            for(const size in cartItems[id]){
                     totalCount += cartItems[id][size];
            }
          }
          return totalCount;
  }
  return (
    <ShopContext.Provider value={{currency,delivery_fee,products,showSearchbar,setShowSearchbar,addToCart,deleteFromCart,cartItems,setCartItems,handleClick,getCartCount}}>
        {props.children}
    </ShopContext.Provider>
  )
}
ShopState.propTypes = {
    children: PropTypes.node.isRequired, // Validate children prop
  };
  
export default ShopState