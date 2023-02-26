import axios from 'axios'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    useToast
  } from '@chakra-ui/react'
import './addjob.css'
  import { v4 as uuid } from 'uuid'
import { RiContactsBookLine } from 'react-icons/ri'
import MAdmin from './MAdmin'
const addProduct=(data={})=>{
    return axios.post(`https://long-boa-sun-hat.cyclic.app/men`,{
        
    image:data.image,
    brand:data.brand,
    product:data.product,
    price:data.price,
    strike:data.strike,
    discount:data.discount,
    })
  
}

//  image: String,
// brand: String,
// product: String,
// price: Number,
// strike: Number,
// discount: String,
function ProductCrud() {
    const unique_id = uuid();
    const [loading,setLoading]=useState(false)
    const [formState,setFormState]=useState({
        image:"",
        brand:"",
        product:"",
        price:"",
        strike:"",
        discount:"",
    })
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormState({...formState,[name]:value})
    }


    const toast = useToast()

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true)

        setTimeout(()=>{

        toast({
          title: 'Success.',
          description: "Product Added.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        setLoading(false)
      },1000)
     
      return  addProduct(formState)
    }
    console.log(formState)
  return (
    <div className='addb122'>
<div className="cxy--123">
<FormControl>

  <FormLabel>Image</FormLabel>
  <Input type='url'name='image' onChange={handleInput} value={formState.image}></Input>

  <FormLabel>Brand</FormLabel>
  <Input name="brand"  onChange={handleInput}  value={formState.brand} type='text' />

  <FormLabel>Product</FormLabel>
  <Input type='text' name='product' onChange={handleInput} value={formState.product}></Input>
  <FormLabel>Price</FormLabel>
  <Input type='text' name='price' onChange={handleInput} value={formState.price}></Input>

  <FormLabel>Strike</FormLabel>
  <Input type='text' name='strike' onChange={handleInput} value={formState.strike}></Input>

  <FormLabel>Discount</FormLabel>
  <Input type='text' name='discount' onChange={handleInput} value={formState.discount}></Input>


  <Button disabled={loading} onClick={handleSubmit}>Submit</Button>

</FormControl>


</div>


    </div>
  )
}

export default ProductCrud