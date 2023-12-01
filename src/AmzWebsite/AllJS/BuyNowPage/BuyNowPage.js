import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';
import '../BuyNowPage/BuyNowPage.css'
import { NavLink } from 'react-router-dom';

export default function BuyNowPage(props) {
    const {mainApi=[],buyNow=[],HandleAddtoCart=[]}=props || {}
    // console.log(buyNow)

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <>
        <div style={{paddingTop:'6.5rem'}}>
            {
                buyNow?.map((item,i)=>{
                    return(
                        <div key={i} className='main-div-buy-now'>
                          <div className='small-imgs-of-pro-buy-page-div'>
                          <img className='small-img-pro' src={item?.image} alt="" />
                          <img className='small-img-pro' src={item?.image} alt="" />
                          </div>
                            <div className='main-layer-for-buy-page-img'>
                                <img className='main-img-buy-page' src={item?.image} alt="" />
                            </div>
                            <div className='description-buy-page'>
                              <div><a className='title-buy-page-link' href="/">{item?.title}</a></div>
                                <div className='title-buy-page'>{item?.title}</div>
                                <hr />
                                <div className='price-buy-page' style={{color:'darkred',fontSize:'2rem'}}>-50% <span style={{color:"black",fontSize:'2rem'}}><sup>₹</sup>{item?.price}</span> <br /> <sub><span style={{color:'red'}}>M.R.P.: <del>₹2,000</del></span></sub> </div>
                                <div className='taxes-line-buy-now'>Inclusive of all taxes</div>
                                <hr />
                                <div>
                                <Carousel responsive={responsive}>
                                    <div>
                                    <Card style={{ width: '8rem',height:'7rem',padding:'1px' }}>
                                        <Card.Body style={{padding:'0px'}}>
                                          <Card.Title>No Cost EMI </Card.Title>
                                          <Card.Text>
                                          Avail No Cost EMI on select cards for orders above ₹3000
                                          </Card.Text>
                                          <Card.Link href="/">1 offer›</Card.Link>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                  <div>
                                  <Card style={{ width: '8rem',height:'7rem',padding:'1px' }}>
                                        <Card.Body style={{padding:'0px'}}>
                                          <Card.Title>Bank Offer</Card.Title>
                                          <Card.Text>
                                          Upto ₹750.00 discount on select Credit Cards
                                          </Card.Text>
                                          <Card.Link href="/">9 offer›</Card.Link>
                                        </Card.Body>
                                    </Card>

                                  </div>
                                  <div>
                                  <Card style={{ width: '8rem',height:'7rem',padding:'1px' }}>
                                        <Card.Body style={{padding:'0px'}}>
                                          <Card.Title>No Cost EMI </Card.Title>
                                          <Card.Text>
                                          Avail No Cost EMI on select cards for orders above ₹3000
                                          </Card.Text>
                                          <Card.Link href="/">1 offer›</Card.Link>
                                        </Card.Body>
                                    </Card>

                                  </div>
                                  <div>
                                  <Card style={{ width: '8rem',height:'7rem',padding:'1px' }}>
                                        <Card.Body style={{padding:'0px'}}>
                                          <Card.Title>Partner Offers </Card.Title>
                                          <Card.Text>
                                          Get GST invoice and save up to 28% on business purchases
                                          </Card.Text>
                                          <Card.Link href="/">1 offer›</Card.Link>
                                        </Card.Body>
                                    </Card>

                                  </div>
                                </Carousel>
                                </div>
                                
                            </div>
                           <div className='payment-buy-description'>
                           <div>
                              <div><span style={{color:"black",fontSize:'2rem'}}><sup>₹</sup>{item?.price}</span><sup>00</sup> </div>
                              <div className='buy-pay-delivery-charge'><NavLink className='highlight-in-buy-pay-page'>₹60 delivery</NavLink> Sunday, 17 September.<NavLink className='highlight-in-buy-pay-page'>Details</NavLink></div>
                              <div className='buy-pay-address'><NavLink className='highlight-in-buy-pay-page'><i class="fa-solid fa-location-dot"></i>&nbsp; Delivering to Sahadol 484001-Update Location</NavLink></div>
                                <div className='stock-available'>In Stock</div>
                                <div className='Thanking-to-customers'>Sold by <NavLink className='highlight-in-buy-pay-page'>hope special</NavLink> and Delivered by Amazon.</div>
                                <label htmlFor="Quantity">Quantity:</label>
                                <select id='Quantity'>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                </select>
                                <div className='buy-pay-add-buy-both-button'>
                                  <button onClick={()=>HandleAddtoCart(item)} className='buy-pay-add-button'>Add to Cart</button>
                                  <button className='buy-pay-buy-button'>Buy Now</button>
                                </div>
                                <div className='security-transaction'><i class="fa-solid fa-lock"></i>&nbsp; Secure transaction</div>
                                <hr />
                                <button className='Add-to-wish-list'>Add to Wish List</button>
                            </div>
                            <div className='Have-sell-buy-pay' style={{marginTop:'2rem'}}>
                              <span className='have-one-to-sell'>Have one to sell?</span>
                              <button className='Sell-on-amazon'>Sell on Amazon</button>
                            </div>

                           </div>
                            

                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
