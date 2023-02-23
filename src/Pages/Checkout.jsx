import { SimpleGrid,Box,Text } from '@chakra-ui/layout'
import React from 'react'
import { Button, Input,Checkbox,Radio, RadioGroup, Grid, GridItem  } from '@chakra-ui/react'
import {useState } from "react"
import CheckoutComponent from '../Components/CheckoutComponent'
const Checkout = () => {

  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [last,setLast]=useState("")
  const [mobile,setMobile]=useState("")
  const [add,setAdd]=useState("")
  const [city,setCity]=useState("")
  const [country,setCountry]=useState("")
  const [postcode,setPostcode]=useState("")
  const  [flag1,setFlag1]=useState(true)
  const  [flag2,setFlag2]=useState(true)
  return (
    <div>
    <Text>CHECKOUT</Text>
    <SimpleGrid columns={2} spacing={10} w='80%' m="auto">
      <Box  boxShadow='md' p='6' rounded='md' bg='red'>
      
      <Box display="flex"  justifyContent="space-between"  boxShadow='md' p='6' rounded='md' bg='skyblue' mb='5'>
      <Text as='b'>DELIVERY COUNTRY:</Text>
      <Box  boxSize={"80px"} borderRadius="">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1024px-Flag_of_India.svg.png"></img>
      <Text>India</Text>
      </Box>
      <Button>CHANGE</Button>
  </Box>

  <Box  boxShadow='md' p='6' rounded='md' bg='green' mb='5'>
    <Text  as='b'>EMAIL ADDRESS</Text>
    {
      flag1 ? <Input placeholder="Enter your email...."  onChange={(e)=>setEmail(e.target.value)}/> : <h1>{name}</h1>
    }
    
    <Button onClick={(e)=>setFlag1(!flag1)}> {flag1? "submit":"Change"}</Button>
  </Box>

  <Box  boxShadow='2xl' p='6' rounded='md' bg='blue' mb='5'>
  <Text  as='b'>
  DELIVERY ADDRESS
  </Text>
   
   <Box>
   {
    flag2 ? <>
    <label>FIRST NAME:</label>
    <Input placeholder="Enter your first name...." onChange={(e)=>setName(e.target.value)}/>
    <br/>

    <label>LAST NAME:</label>
    <Input placeholder="Enter your last name...." onChange={(e)=>setLast(e.target.value)}/>
    <br/>

    <label>MOBILE:</label>
    <Input placeholder="Enter your mobile number...." onChange={(e)=>setMobile(e.target.value)}/>
    <br/>

    <label>ADDRESS:</label>
    <Input placeholder="Enter your address...." onChange={(e)=>setAdd(e.target.value)}/>
 <br/>

    <label>CITY:</label>
    <Input placeholder="Enter your city...." onChange={(e)=>setCity(e.target.value)}/>
 <br/>

    <label>COUNTRY:</label>
    <Input placeholder="Enter your country...." onChange={(e)=>setCountry(e.target.value)}/>
 <br/>

    <label>POSTCODE:</label>
    <Input placeholder="Enter your postcode...." onChange={(e)=>setPostcode(e.target.value)}/>
 <br/>
 </>
  :<h1>
    {name}
    {/* {last}{add}{city}{postcode}{country}{mobile} */}
  </h1>}

    <Button onClick={(e)=>setFlag2(!flag1)}> {flag2? "DELIVER TO THIS ADDRESS":"Change"}</Button>
   </Box>
   </Box>

   <Box  boxShadow='2xl' p='6' rounded='md' bg='yellow' mb='5'>
   <Text  as='b'>  DELIVERY OPTIONS</Text>
  <Box>
   
    <Box>
    <RadioGroup defaultValue='2'>


      <Radio value='1'>Standard Delivery:</Radio>
      <Text> Delivered within 10 days. </Text>
      <Text>No delivery on Public Holidays. Orders are subject to Customs and Duty charges, payable by the recipient and you may be requested to be pay duty charges prior to exportation of your order from the UK by our delivery agent.</Text>
  
      <Radio value='2'>Express Delivery:</Radio>
      <Text> Delivered within 3 days.</Text>
      </RadioGroup>
    </Box>
  </Box>

  </Box>

  <Box  boxShadow='2xl' p='6' rounded='md' bg='green' mb='5'>
  <Text as='b'>PAYMENT</Text>

  <Box>
    <Text>ADD CREDIT/DEBIT CARD</Text>

    <Grid
  h='200px'
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(2, 1fr)'
  gap={4}
>
<Box>
<label>CARD NUMBER</label>
<Input colSpan={2} placeholder='Enter your Card Number'/>
</Box>

  <Box><label>EXPIRY DATE</label>
<Input colSpan={1} placeholder='Enter Expiry Date'/></Box>
  <Box><label>NAME ON CARD</label>
<Input colSpan={2} placeholder='EnterCard Holder Name'/></Box>
  <Box><label>CVV</label>
<Input colSpan={2} placeholder='Enter CVV'/></Box>






  
</Grid>
  </Box>
   
    
 

  </Box>

      </Box>




      <Box>
<CheckoutComponent/>
      </Box>
    </SimpleGrid>
    
    </div>
  )
}

export default Checkout