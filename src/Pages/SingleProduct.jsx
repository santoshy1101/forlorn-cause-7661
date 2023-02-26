import { Box, Button, Flex, Image, Select, SimpleGrid, Text } from '@chakra-ui/react'
import { IoPricetagOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import "../Styles/SingleProduct.css"
import { FaHeart, FaTruckMoving } from 'react-icons/fa';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
    const [obj,setObj] = useState({})
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    
    let {id} = useParams()  //eg => m63f868ca4d1c716feb485c36
    let path = id[0] //eg => m
    id = id.slice(1) //eg => 63f868ca4d1c716feb485c36
    
    let data = path=="m"?SingleMenBottomdata:SingleWomenBottomdata
    const getData = () =>{
        if(path=="m"){
            axios.get(`https://long-boa-sun-hat.cyclic.app/men/single/${id}`)
            .then((res)=>setObj(res.data[0]))
            .catch((Error)=>(<h1>{Error.message}</h1>))
        }else{
            axios.get(`https://long-boa-sun-hat.cyclic.app/women/single/${id}`)
            .then((res)=>setObj(res.data[0]))
            .catch((Error)=>(<h1>{Error.message}</h1>))
        }
    }
    useEffect(()=>{
        getData()
    },[id])
    const {brand, discount, image, price, product, strike, _id } = obj
    
    const postToBag = () =>{
        // console.log('obj:', obj)
        axios.post(`https://long-boa-sun-hat.cyclic.app/bag`,obj)
        .then((res)=>navigate(`/products/cart`))
        .catch((Error)=>(<h1>{Error.message}</h1>))
    }
  return (
    <Box width={{base:"95%",md:"90",lg:"85%"}} margin="auto" marginTop="20px" marginBottom="20px" >
        <Flex flexDirection={{base:"column", sm:"row"}} width={{md:"100%", lg:"80%"}} margin="auto" >
            <Box display={{base:"none", md:"grid" }} width={{base:"0px",md:"10%"}} height="100%" >
                <Image src={image} alt='Products' w="100%" p="20px 10px" />
            </Box>
            <Box width={{base:"80%",sm:"50%"}} >
                <Image src={image} alt='Products' w="100%" p="0px 10px" />
            </Box>
            <Box width={{base:"100%",sm:"50%", md:"40%"}} padding="20px"  lineHeight={{base:"20px",md:"25px"}} >
                <Text className='productName' fontSize={{base:"12px", sm:"14px", md:"16px"}} >{product}</Text>
                <Flex>
                <Text className='mainPrice' fontSize={{base:"11px", sm:"13px", md:"15px"}} >Price : </Text>
                <Text className='mainPrice' fontSize={{base:"11px", sm:"13px", md:"15px"}} >₹{price}.00</Text>
                <Text p="4px 15px 0px 10px" textDecoration="line-through" fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(255, 0, 85)" >{strike?"₹"+strike+".00":null}</Text>
                </Flex>
                <Flex>
                <Text className='mainPrice' fontSize={{base:"11px", sm:"13px", md:"15px"}} >Brand : </Text>
                <Text className='productName' fontSize={{base:"10px", sm:"12px", md:"13px"}} >{brand}</Text>
                </Flex>
                <Box backgroundColor="lightblue" p="5px 15px" margin="auto" marginTop="20px" >
                    <Flex fontSize={{base:"20px", md:"25px"}} >
                        <IoPricetagOutline />
                        <Box pl="5%" fontSize={{base:"10px", sm:"12px", md:"14px"}} >
                            <Text>NEW HERE?</Text>
                            <Text>Get 15% off 100,000+ styles!*</Text>
                            <Text>With code: <span style={{fontWeight:700}}>MASAI30</span></Text>
                        </Box>
                    </Flex>
                </Box>
                <Box m="20px 0px">
                <Text className='sizeSelect' fontSize={{base:"11px", sm:"12px", md:"14px"}}>Get Discount</Text>
                    <Select isRequired={true} borderRadius="0px" onChange={(e)=>setObj({...obj,price:price-(Math.floor(price*0.15))})} focusBorderColor="black"  placeholder='PROMO-CODE'>
                        <option value='MASAI30'>MASAI30</option>
                    </Select>
                </Box>
                <Box m="20px 0px" >
                <Text className='sizeSelect' fontSize={{base:"11px", sm:"12px", md:"14px"}}>Size</Text>
                    <Select isRequired={true} borderRadius="0px" onChange={(e)=>setObj({...obj,size:e.target.value})} focusBorderColor="black"  placeholder='Please Select'>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='XXL'>XXL</option>
                    </Select>
                </Box>
                <Flex justifyContent="space-between">
                    <Button className='bagButton' onClick={postToBag} _hover={{ bg: '#006128' }} backgroundColor="#018849" variant='solid'>ADD TO BAG</Button>
                    <Box className='heartSymbol' display="flex" justifyContent="center" alignItems="center" fontSize={{base:"15px", md:"17px",lg:"20px"}} >
                        <FaHeart />
                    </Box>
                </Flex>
                <Box fontSize={{base:"10px", sm:"11px", md:"12px"}} border="1px solid #ddd" p="20px 30px" m="20px 0px" >
                    <Flex><Box m="5px 10px 0px 0px" fontSize={{base:"13px", sm:"15px", md:"20px"}}><FaTruckMoving/></Box><Text>Free Delivery.</Text></Flex>
                    <Flex><Box m="5px 10px 0px 0px" fontSize={{base:"13px", sm:"15px", md:"20px"}}><MdOutlineAssignmentReturn/></Box><Text>Free Returns</Text></Flex>
                    <Text>Ts&Cs apply. <a style={{color:"black", textDecoration:"underline"}} href="https://www.asos.com/payments-and-deliveries/delivery/">More delivery info.</a></Text>
                </Box>
            </Box>
        </Flex>

        {/* ----------------------------------------------------------------------------------------- */}
        <SimpleGrid margin="50px 0px" columns={{base:2,sm:3,md:4,lg:6}} spacing="10px" >
            {data.map((el)=>(
                <Box key={el.price+el.strike} p="20px 0px">
                    <Box position="relative" >
                        <Image src={el.image} alt='Products' w="100%" />
                        <Box backgroundColor="white" fontSize={{base:"10px", sm:"11px", md:"12px"}} p="3px 8px" color="red" position="absolute" top="20px"  >
                        <Text>{el.discount}</Text>
                    </Box>
                    </Box>
                    <Text fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.product}</Text>
                    <Text fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.name}</Text>
                    <Flex>
                        <Text fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(100, 100, 100)" className='mainPrice'>₹{el.price?el.price:el.strike}.00</Text>
                        <Text p="5px 15px 0px 5px" textDecoration="line-through" fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(255, 0, 85)" >{el.price?"$"+el.strike+".00":null}</Text>
                    </Flex>
                </Box>
            ))}
        </SimpleGrid>
    </Box>
  )
}

export default SingleProduct

export const SingleMenBottomdata=[
    {
      product: "adidas Sportwear Lounge x Street t-shirt in white",
      strike: 1500,
      image: "https://images.asos-media.com/products/adidas-sportwear-lounge-x-street-t-shirt-in-white/203407123-1-white?$n_480w$&wid=476&fit=constrain",
      price: 1100,
      discount: "-14%",
    },
    {
      product: "ASOS DESIGN oversized t-shirt in butterfly back print",
      strike: 1130,
      image: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-black-with-photographic-butterfly-back-print/203670018-1-black?$n_480w$&wid=476&fit=constrain",
      price: "",
      discount: "",
    },
    {
      product: "New Look denim jacket with borg lining in black",
      strike: 820,
      image: "https://images.asos-media.com/products/new-look-denim-jacket-with-borg-lining-in-black/204087595-1-black?$n_480w$&wid=476&fit=constrain",
      price: 760,
      discount: "-14%",
    },
    {
      product: "ASOS DESIGN 5 pack muscle fit t-shirt with crew neck save - MULTI",
      strike: 930,
      image: "https://images.asos-media.com/products/asos-design-5-pack-muscle-fit-t-shirt-with-crew-neck-save-multi/203370423-1-multi?$n_480w$&wid=476&fit=constrain",
      price: 2500,
      discount: "-14%",
    },
    {
      product: "ASOS DESIGN oversized t-shirt white with celestial print",
      strike: 1180,
      image: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-off-white-with-celestial-front-and-spine-print/203356290-1-marshmallow?$n_480w$&wid=476&fit=constrain",
      price: "",
      discount: "",
    },
    {
      product: "The North Face Glacier 100 1/4 zip fleece in black",
      strike: 830,
      image: "https://images.asos-media.com/products/the-north-face-glacier-100-1-4-zip-fleece-in-black/203213274-1-black?$n_480w$&wid=476&fit=constrain",
      price: "",
      discount: "",
    }
  ]
export const SingleWomenBottomdata=[
    {
        product: "Floral Wrap Dress",
        strike: 2399,
        image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10856160/2019/11/5/f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.jpg",
        price: 1031,
        discount: "-57%"
    },
    {
        product: "Slit Sleeves Maxi Dress",
        strike: 3999,
        image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10813300/2019/12/2/34fdf73a-8f2c-41e3-b3ed-53729f77d7841575272619313-Athena-Black-Embellished-Slit-Sleeves-Maxi-Dress-67715752726-1.jpg",
        price: "",
        discount: "-51%"
    },
    {
        product: "Floral Flared Belted Dress",
        strike: 2249,
        image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2299060/2022/11/22/a84c7bbf-b121-4a67-a65f-5a14ae1baf5f1669112698422TokyoTalkiesBlackFloralPrintFlaredMaxiDresswithaBelt1.jpg",
        price: 607,
        discount: "-73%"
    },
    {
        product: "A-Line Top",
        strike: 1785,
        image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5965271/2018/5/16/163f23bf-fdd2-4965-a8e0-b1afe572fbba1526460475925-nA-3871526460475766-1.jpg",
        price: "",
        discount: "-21%"
    },
    {
        product: "The Ultimate Flare Pants",
        strike: 2299,
        image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17380124/2022/12/8/2b2fcdea-f12f-4403-ac6b-e22384369c991670480971396-BlissClub-Women-Black-High-Waist-The-Ultimate-Flare-Pants-32-11.jpg",
        price: 1977,
        discount: "-14%"
    },
    {
        product: "Accordion Pleats Empire Dress",
        strike: 1599,
        image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10308591/2019/7/29/1b9df8fd-214e-4e8c-a0b6-759a9167e1e61564379559418-SASSAFRAS-Women-Black-A-Line-Dress-291564379558115-1.jpg",
        price: 767,
        discount: "-52%"
    }
  ]