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
  const [card,setCard]=useState("")
  const [date,setDate]=useState("")
  const [cvv,setCvv]=useState("")
  const [cname,setCname]=useState("")
  const  [flag1,setFlag1]=useState(true)
  const  [flag2,setFlag2]=useState(true)
  const  [flag3,setFlag3]=useState(true)
  
  return (
    <div>
     <Text align={"center"} fontWeight={700} fontSize={{base:28, md:32, lg:32}} mb={5} >CHECKOUT </Text>
    <SimpleGrid columns={{base:1,md:2}} spacing={10} w='80%' m="auto">
      <Box  boxShadow='md'  bg='white' p='6' rounded='md' >
      
      <Box display="flex"  justifyContent="space-between"  boxShadow='md' p='6' rounded='md'  mb='5'>
      <Text as='b'>DELIVERY COUNTRY:</Text>
      <Box  boxSize={"80px"} borderRadius="">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1024px-Flag_of_India.svg.png"></img>
      <Text>India</Text>
      </Box>
      <Button>CHANGE</Button>
  </Box>

  <Box  boxShadow='md' p='6'  bg='white' rounded='md' mb='5'>
    <Text  as='b'>EMAIL ADDRESS</Text>
    {
      flag1 ? <Input type="email" placeholder="Enter your email...."  onChange={(e)=>setEmail(e.target.value)}/> : <h1>{email}</h1>
    }
    <br/>
    
    <Button onClick={(e)=>setFlag1(!flag1)}> {flag1? "submit":"Change"}</Button>
  </Box>

  <Box  boxShadow='md' p='6'  bg='white' rounded='md' mb='5'>
  <Text  as='b'>
  DELIVERY ADDRESS
  </Text>
   
   <Box>
   {
    flag2 ? <form>
    <label>FIRST NAME:</label>
    <Input type="text" placeholder="Enter your first name...." onChange={(e)=>setName(e.target.value)}/>
    <br/>

    <label>LAST NAME:</label>
    <Input type="text" placeholder="Enter your last name...." onChange={(e)=>setLast(e.target.value)}/>
    <br/>

    <label>MOBILE:</label>
    <Input type="number" placeholder="Enter your mobile number...." onChange={(e)=>setMobile(e.target.value)}/>
    <br/>

    <label>ADDRESS:</label>
    <Input type="text" placeholder="Enter your address...." onChange={(e)=>setAdd(e.target.value)}/>
 <br/>

    <label>CITY:</label>
    <Input type="text" placeholder="Enter your city...." onChange={(e)=>setCity(e.target.value)}/>
 <br/>

    <label>COUNTRY:</label>
    <Input type="text" placeholder="Enter your country...." onChange={(e)=>setCountry(e.target.value)}/>
 <br/>

    <label>POSTCODE:</label>
    <Input type="number" placeholder="Enter your postcode...." onChange={(e)=>setPostcode(e.target.value)}/>
 <br/>
 </form>
  :<div>
  <Text>  {name+"\n"}  {last+"\n"}</Text>
  <Text>  {add+"\n"}</Text>
  <Text>  {city+"\n"}</Text>
  <Text>  {postcode+"\n"}</Text>
  <Text>  {country+"\n"}</Text>
  <Text>  {mobile+"\n"}</Text>
  </div>}
  <br/>

    <Button  onClick={(e)=>setFlag2(!flag2)}> {flag2? "DELIVER TO THIS ADDRESS":"Change"}</Button>
   </Box>
   </Box>

   <Box  boxShadow='md' p='6'  bg='white' rounded='md'  mb='5'>
   <Text  as='b'>  DELIVERY OPTIONS</Text>
  <Box>
   
    <Box>
    <RadioGroup defaultValue='1'>


      <Radio value='1'>Standard Delivery:</Radio>
      <Text> Delivered within 10 days. </Text>
      <Text>No delivery on Public Holidays. Orders are subject to Customs and Duty charges, payable by the recipient and you may be requested to be pay duty charges prior to exportation of your order from the UK by our delivery agent.</Text>
  
      <Radio value='2'>Express Delivery:</Radio>
      <Text> Delivered within 3 days.</Text>
      </RadioGroup>
    </Box>
  </Box>

  </Box>

  <Box  boxShadow='md' p='6' rounded='md' bg='white'  mb='5'>
  <Text as='b'>PAYMENT</Text>

  <Box>
    <Text>ADD CREDIT/DEBIT CARD</Text>
<br/>

{
  flag3 ? <form>
    <Grid
  h='200px'
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(2, 1fr)'
  gap={4}
>
<Box>

  


<label>CARD NUMBER</label>
<Input colSpan={2} placeholder='Enter your Card Number'  onChange={(e)=>setCard(e.target.value)}/>
</Box>

  <Box><label>EXPIRY DATE</label>
<Input colSpan={1} placeholder='Enter Expiry Date'  onChange={(e)=>setDate(e.target.value)}/></Box>
  <Box><label>NAME ON CARD</label>
<Input colSpan={2} placeholder='EnterCard Holder Name'  onChange={(e)=>setCname(e.target.value)}/></Box>
  <Box><label>CVV</label>
<Input colSpan={2} placeholder='Enter CVV'  onChange={(e)=>setCvv(e.target.value)}/></Box>






  
</Grid>
</form> : <div>
   <Text>Card No. :  {card+"\n"}</Text>
  <Text> Expiry Date: {date+"\n"}</Text>
  <Text>Name:  {cname+"\n"}</Text>
  <Text>CVV:  {cvv+"\n"}</Text>
</div>
}

<Button  onClick={(e)=>setFlag3(!flag3)}> {flag3? "SAVE":"Change"}</Button>


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