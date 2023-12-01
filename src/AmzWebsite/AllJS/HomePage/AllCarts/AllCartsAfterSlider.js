import React from 'react'
import SliderAfterHeader from '../Slider/Slider'
import '../AllCarts/AllCart.css'
import { NavLink, useNavigate } from 'react-router-dom'

export default function AllCartsAfterSlider(props) {
    const {mainApi=[],HandleAddtoCart=[],HandleBuyNow=[]}=props || {}
    // console.log(HandleBuyNow);

    const Navigate = useNavigate("")

  return (
    <>
    <SliderAfterHeader/>
        <div className='amz-main-cart-layer'>
            {
                mainApi?.map((item,i)=>{
                    return(
                        <>
                        <div key={i} className='amz-cart-first-layer'>
                            <div className='amz-div-for-img'>
                                <img className='amz-cart-img' src={item?.image} alt="" />
                            </div>
                            {/* <div className='amz-cart-description'> */}
                                <div className='amz-cart-title'>{item?.title}</div>
                                <div className='amz-cart-Price'>Price : {item?.price}</div>
                               <div className='amz-rating-reviews-both'>
                               <div className='amz-cart-rating'>Rating : {item?.rating?.rate}</div>
                                <div className='amz-cart-review'> Reviews : {item?.rating?.count}</div>
                               </div>
                                <div className='cart-buttons-buy-add'>
                                <button className='buy-now-buttos' onClick={()=>HandleAddtoCart(item)}>Add to Cart</button>
                                <NavLink to='/BuyNowPage'><button onClick={()=>HandleBuyNow(item?.id)} className='buy-now-buttos'>Buy Now</button></NavLink>
                                {/* </div> */}
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}
