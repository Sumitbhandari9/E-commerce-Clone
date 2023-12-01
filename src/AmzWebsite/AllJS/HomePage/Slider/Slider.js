import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Slider/AmzSlider.css'

export default function SliderAfterHeader() {
  return (
    <>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img 
          style={{width:'100vw',height:'30rem'}}
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/D92807365-_1_Tallhero_2xx._CB598669664_.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img 
          style={{width:'100vw',height:'30rem'}}
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img 
          style={{width:'100vw',height:'30rem'}}
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Aug_23/Unrec/Watches/Revised/Watches_3000._CB597692942_.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img 
          style={{width:'100vw',height:'30rem'}}
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg"
          alt="Forth slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img 
          style={{width:'100vw',height:'30rem'}}
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/ATF/Unrec/OneCard/Shoes/Shoes_3000._CB600652809_.jpg"
          alt="Fifth slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </>
  )
}
