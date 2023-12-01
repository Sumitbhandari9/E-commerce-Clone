import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'

export default function AmzProductPage(props) {
    const {mainApi=[],searchText=[],HandleAddtoCart=[],HandleBuyNow=[]}=props || {}

    const Navigate =useNavigate("")

  return (
    <>
          <div style={{paddingBlock:'6rem'}} className='amz-main-cart-layer'>
            {
                searchText?.map((item,i)=>{
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
                                <button onClick={()=>HandleAddtoCart(item)} className='buy-now-buttos'>Add to Cart</button>
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
