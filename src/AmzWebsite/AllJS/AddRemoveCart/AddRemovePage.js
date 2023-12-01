import React from 'react'
import '../AddRemoveCart/AddRemovePage.css'
import { NavLink, useNavigate } from 'react-router-dom'

export default function AddRemovePage(props) {
    const {mainApi=[],removeFromCart=[],HandleRemovefromCart=[],HandleBuyNow=[]}=props || {}
    const Navigate= useNavigate('')

    if(removeFromCart?.length>0){
        return(
            <div style={{paddingBlock:'6.8rem'}} className='amz-main-addcart-layer'>
            {
                removeFromCart?.map((item,i)=>{
                    return(
                        <>
                          <div key={i} className='amz-addcart-first-layer'>

                            <div className='amz-div-for-addcart-img'>
                                <img className='amz-addcart-img' src={item?.image} alt="" />
                            </div>
                            <div className='amz-addcart-description'>
                                <div className='amz-addcart-Detail'>Detail : {item?.description}</div>
                                <div className='amz-addcart-category'>Category : {item?.category}</div>
                                <div className='amz-addcart-title'>Title : {item?.title}</div>
                                <div className='amz-addcart-Price'>Price : {item?.price}</div>
                               <div className='amz--addcartrating-reviews-both'>
                                <div className='amz-addcart-rating'>Rating : {item?.rating?.rate}</div>
                                <div className='amz-addcart-review'> Reviews : {item?.rating?.count}</div>
                               </div>
                               <div className='addcart-buttons-buy-remove'>
                                <button onClick={()=>HandleRemovefromCart(item?.id)} className='buy-now-add-buttos'>Remove From Cart</button>
                                <NavLink to='/BuyNowPage'><button onClick={()=>HandleBuyNow(item?.id)} className='buy-now-add-buttos'>Buy Now</button></NavLink>
                               </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        )
    }else{
        return(
            <div className='addcart-empty-img'>
                <img className='empty-img' src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg" alt="" />
                <NavLink className='Return-button' to='/'>←Return to Home Page</NavLink>
            </div>
        )
    }

  
}
