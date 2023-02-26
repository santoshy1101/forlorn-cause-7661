import React, { useEffect, useState } from 'react'
import axios from 'axios'



import {
    FormControl,
    FormLabel,
  
    Input,
    Button,
  
    useToast,
    Heading,
    
  } from '@chakra-ui/react'
import './addjob.css'
  import { v4 as uuid } from 'uuid'


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
const getCount=()=>(
    axios.get(`https://long-boa-sun-hat.cyclic.app/men`
    )
  )

const getData=()=>(
    axios.get(`https://long-boa-sun-hat.cyclic.app/men`
    )
  )
const ProductView = ({update,setUpdate}) => {
    const [data,setData]=useState([])

    const [countM,setMCount]=useState([])


    useEffect(()=>{
     getCount().then((res)=>(
         setMCount(res.data)
     ))
    },[update])
    
    useEffect(()=>{
        getData().then((res)=>(
            setData(res.data)
        ))
    },[update])

    const handleDelete = (id) => {
        axios.delete(`https://long-boa-sun-hat.cyclic.app/men/${id}`)
          .then(response => {
           
            console.log(response.data)
            setUpdate(!update)
            
          })
          .catch(error => {
            console.log(error);
          });
      };
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
        setUpdate(!update)
        
      },1000)
     
      return  addProduct(formState)
    }
    
  return (
    <div>
         <div className='addb122'>
         <Heading as={'h1'} textAlign={"center"}>Add Product</Heading>
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
    <Heading as={'h1'} textAlign={'center'}>Products</Heading>
    Total Results {countM.reduce((a,c)=>a+1,0)}
    
        
        {data.map((item)=>{
            return <div key={item.id} className="crud__box">
                <img style={{width:"100px"}} src={item.image} alt={item.product}/>
                <div className='flex '>
                    <div>
                    <p>{item.product}</p>
                    <p>{item.brand}</p>
                 
                    <p>{item.price}</p>
                    <p>{item.strike}</p>
                    <p>{item.discount}</p>
                    </div>
                    
                </div>
                <div className='flexDelete'>
                <Button colorScheme={"red"} onClick={()=>handleDelete(item._id)}>Remove</Button>
                </div>
                
            </div>
        })}


     
    </div>
  )
}

export default ProductView