import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AmznHeaderNavbar from '../AllJS/AmzHeader/AmzHeader'
import axios from 'axios'
import AllCartsAfterSlider from '../AllJS/HomePage/AllCarts/AllCartsAfterSlider'
import AmzProductPage from '../AllJS/AmzProductPage/AmzProductPage'
import AddRemovePage from '../AllJS/AddRemoveCart/AddRemovePage'
import BuyNowPage from '../AllJS/BuyNowPage/BuyNowPage'

export default function AmzRouter() {

    //Hook for Cart Counting
    const [count, setCount] = useState(0)

    //Hook for main Api
    const [mainApi, setMainApi] = useState([])
    const HandleMainApi = async() =>{
        const Apidata = await axios.get('https://fakestoreapi.com/products')
        setMainApi(Apidata.data)
    }
    useEffect(()=>{
        HandleMainApi();
    },[])

    //Hook for Search
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState([])

    const HandleSearch = () =>{
        if(search?.length>0){
            const searchdata = mainApi?.filter((item)=>item?.title?.includes(search))
            setSearchText(searchdata)
        }else{
            setSearchText(mainApi)
        }
    }
    useEffect(()=>{
        HandleSearch(search);
    },[search])

    //Hook for Add to Cart 
    const [addtoCart, setAddtoCart] = useState([])

    const HandleAddtoCart = (item) =>{
        const aCart = [...addtoCart]
        aCart.push(item)
        setAddtoCart(aCart)
        setCount(count+1)
    }


    //Hook for Remove From Cart
    const [removeFromCart, setRemoveFromCart] = useState(addtoCart)
    useEffect(()=>{
        setRemoveFromCart(addtoCart)
    },[addtoCart])

    const HandleRemovefromCart = (sum) =>{
        const rCart = removeFromCart?.filter((item)=>item?.id !== sum )
        setRemoveFromCart(rCart)
        setCount(count-1)
    }

    //Hook for Buy Now Page
    const [buyNow, setBuyNow] = useState([])
   
    const HandleBuyNow = (data) =>{
        const BuyProduct = mainApi?.filter((item)=>item?.id == data)
        setBuyNow(BuyProduct)
    }


  return (
    <>
        <BrowserRouter>
            <AmznHeaderNavbar search={search} setSearch={setSearch} count={count}/>
            <Routes>
                <Route path='/' element={<AllCartsAfterSlider mainApi={mainApi} HandleAddtoCart={HandleAddtoCart} HandleBuyNow={HandleBuyNow}/>}  />
                <Route path='/AmzProductPage' element={<AmzProductPage mainApi={mainApi} searchText={searchText} HandleAddtoCart={HandleAddtoCart} HandleBuyNow={HandleBuyNow}/>}/>
                <Route path='/AddRemovePage' element={<AddRemovePage mainApi={mainApi} addtoCart={addtoCart} HandleRemovefromCart={HandleRemovefromCart} removeFromCart={removeFromCart} HandleBuyNow={HandleBuyNow}/>}/>
                <Route path='/BuyNowPage' element={<BuyNowPage mainApi={mainApi} buyNow={buyNow} HandleAddtoCart={HandleAddtoCart} />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
