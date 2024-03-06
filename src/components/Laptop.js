import React from 'react'
import './LaptopsList.css'
import { ToastContainer, toast } from 'react-toastify';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from './Button';
import { useAuthContext } from '../Context/AuthContextProvider';
import { useShopContext } from '../Context/ShopContextProvider';

function Laptop({lap}) {
  const {User} = useAuthContext();
  const {addToCart,cartItems,addToFav,FavItems} = useShopContext();
  const itemAmount = cartItems[lap.id];


    const notify = (msg) => toast.error(msg, {
        position: "top-center"
      });
      const notifySuc = (msg) => toast.success(msg, {
        position: "top-center"
      });

    function handleAddToCart(id,model){
      if(User === null){
        notify("You Don't Have An Account!")
      }
      else{
        addToCart(id);
        notifySuc(`You have added ${model} to Favorite`);
      }
    }
    function handleAddToFav(itemId,img,brand,model,processor,ram,storage,graphicCard){
      if(User === null){
        notify("You Don't Have An Account!")
      }
      else if(FavItems.some(item=>item.itemId == itemId)) return;
      else{
        addToFav(itemId,img,brand,model,processor,ram,storage,graphicCard);
        notifySuc(`You have added ${model} to Cart`);
      }
    }
  return (
    <li data-aos="zoom-out-up" className='col-12 col-md-6 col-lg-4 text-center text-md-start'>
        <div className='imageWrapper'>
            <img width="100%" src={lap.image}/>
        </div>
        <div className='details p-2'>
        <p className='laptopName'>{lap.brand}</p>
        <p className='desc'>{lap.model} {lap.processor} {lap.ram} {lap.display_size} {lap.storage}</p>
        <p className='price'>{lap.price}$</p>
        </div>
        <button className='btn-abs' onClick={()=>handleAddToFav(lap.id,lap.image,lap.brand,lap.model,lap.processor,lap.ram,lap.storage,lap.graphics_card)}>{FavItems.some(item=>item.itemId == lap.id)?<FavoriteIcon/> :<FavoriteBorderOutlinedIcon/> }</button>
        <button onClick={()=> handleAddToCart(lap.id,lap.model)} className='btn-abs'>{itemAmount > 0 ? <ShoppingCartIcon/> : <ShoppingCartOutlinedIcon/>}</button>
        {User !== null?<Button type={"primaryy"} onClick={()=>notifySuc(`Done! you have Purchased ${lap.price} for ${lap.model}`)}>Buy Now</Button>:null}
       
    </li>
  )
}

export default Laptop
