import React, { useEffect, useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import '../AmzHeader/AmzHeader.css'

export default function AmznHeaderNavbar(props) {
  const {setSearch=[],search=[],count=[]}=props||{}
   
  //Use Navigate For On click
  const Navigate = useNavigate('')

  return (
    <>
    <div  className='amz-position-header'>
        <div className='amz-head1'>
            <div className='amz-logo'>
               <NavLink style={{textDecoration:'none',color:'white'}} to='/'><img style={{width:'9rem',height:'4.1rem'}} src="https://rdwgroup.com/wp-content/uploads/2013/08/Amazon-800x450-1.jpg" alt="" /> <span style={{marginInlineStart:'-1.3rem',textDecoration:'none'}}>.in</span></NavLink>
            </div>
            <div className='amz-location'>
                <span className='amz-hello'>Hello</span>
                <h6 className='amz-area'><i className="fa-solid fa-location-dot"></i>Select your address</h6>
            </div>
            <div className='amz-search'>
            <NavDropdown  title="All" id="navbarScrollingDropdownSearch">
              <NavLink style={{textDecoration:'none',paddingInlineStart:"1rem",color:'black'}} to='AmzProductPage'>All Categories</NavLink>
              {/* onClick={()=>Navigate('/AmzProductPage')} */}

              <NavDropdown.Item href="/ErrorPage">Alex Skills</NavDropdown.Item>
              <NavDropdown.Item href="/ErrorPage">Amazon Device</NavDropdown.Item>
              <NavDropdown.Item href="/ErrorPage">Amazon Fashion</NavDropdown.Item>
              <NavDropdown.Item href="/ErrorPage">Amazon Pharmacy</NavDropdown.Item>
              <NavDropdown.Item href="/ErrorPage">Amazon appliances</NavDropdown.Item>
              <NavDropdown.Item href="/ErrorPage">Amazon much more</NavDropdown.Item>
              
            </NavDropdown>
            
          
          <Form className="d-flex">
            <Form.Control
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              type="search"
              placeholder="Search Amazon.in"
              className="me-2"
              aria-label="Search"
            //   value={search}
            //   onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="outline-success"><i className="fa-solid fa-magnifying-glass"></i></Button>
          </Form>
            </div>
            <div className='amz-language'>
              <img className='amz-indian-flag' src="https://media.istockphoto.com/id/519611160/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=0HueaQHkdGC4Fw87s3DbeTE9Orv3mqHRLce88LV47E4=" alt="" />
            <NavDropdown title="EN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Hindi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                English
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Punjabi
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <div className='amz-signin'>
                <span>Hello, <span>sign in</span> </span>
            <NavDropdown title="Account & List" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <div className='amz-return'>
                <span>Return</span>
                <h6>& Order</h6>
            </div>
            <div onClick={()=>Navigate('/AddRemovePage')} className='amz-cart'>
            <span className='counting-of carts'>{count}</span><i className="fa-brands fa-opencart"></i>
            </div>
        </div>

      <div className='amz-head2'>
        <div className='amz-bars' >
        <i style={{cursor:'pointer'}} className="fa-solid fa-bars"></i>
          <span style={{cursor:'pointer'}} className='amz-all'>All</span>
        </div>
        <div>
          <span style={{cursor:'pointer'}}>Amazon miniTV</span>
        </div>
        <div>
          <span style={{cursor:'pointer'}}>Sell</span>
        </div>
        <div>
          <span style={{cursor:'pointer'}}>Best Sellers</span>
        </div>
        <div>
          <span style={{cursor:'pointer'}}>Today's Deals</span>
        </div>
        <div>
          <span style={{cursor:'pointer'}}>Mobiles</span>
        </div>
        <div>
          <span style={{cursor:'pointer'}}>New Releases</span>
        </div>
        <div>
          <span style={{cursor:'pointer'}}>Customer Service</span>
        </div>
        <div>
          <label style={{cursor:'pointer'}} htmlFor="dropdown">Prime</label>
          <select name="Prime" id="dropdown">
            <option className='amz-prime-image' value=""></option>
            <option value="Join Prime"></option>
          </select>
        </div>
        <div>
          <img className='amz-prime-img' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt=""  />
        </div>
      </div>

    </div>

    </>
  )
}
