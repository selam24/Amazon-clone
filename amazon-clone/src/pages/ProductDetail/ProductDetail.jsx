import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
// import classes from "./Product.module.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../API/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  // setisLoading(true)
  const [product,setproduct] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const { productId } = useParams();
  useEffect(()=>{

    axios.get(`${productUrl}/products/${productId}`)
    .then((res) =>{
      setproduct(res.data)
      setisLoading(false)
    }).catch((err) =>{
      console.log(err)
      setisLoading(false)
    })
  }, [])
  return (
    <LayOut>
      {isLoading ? <Loader/> : <ProductCard product={product} />}
    </LayOut>
  );
}

export default ProductDetail