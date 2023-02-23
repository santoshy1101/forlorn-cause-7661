import { Box, Button, Flex, Image, Select, SimpleGrid, Text } from '@chakra-ui/react'
import { IoPricetagOutline } from "react-icons/io5";
import React from 'react'
import "../Styles/SingleProduct.css"
import { FaHeart, FaTruckMoving } from 'react-icons/fa';
import { MdOutlineAssignmentReturn } from 'react-icons/md';

const SingleProduct = () => {
    let data=[
        {
          productLink: "https://www.asos.com/adidas-performance/adidas-sportwear-lounge-x-street-t-shirt-in-white/prd/203407123?colourWayId=203407137&cid=16691",
          ProductName: "adidas Sportwear Lounge x Street t-shirt in white",
          price: 35,
          sellingFastBadge: "Selling fast",
          productImage: "https://images.asos-media.com/products/adidas-sportwear-lounge-x-street-t-shirt-in-white/203407123-1-white?$n_480w$&wid=476&fit=constrain",
          saleAmount: 30,
          productDeal: "-14%",
          productBadge: ""
        },
        {
          productLink: "https://www.asos.com/asos-design/asos-design-oversized-t-shirt-in-black-with-photographic-butterfly-back-print/prd/203670018?colourWayId=203670019&cid=16691",
          ProductName: "ASOS DESIGN oversized t-shirt in black with photographic butterfly back print",
          price: 24,
          sellingFastBadge: "Selling fast",
          productImage: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-black-with-photographic-butterfly-back-print/203670018-1-black?$n_480w$&wid=476&fit=constrain",
          saleAmount: "",
          productDeal: "",
          productBadge: ""
        },
        {
          productLink: "https://www.asos.com/new-look/new-look-denim-jacket-with-borg-lining-in-black/prd/204087595?colourWayId=204087597&cid=16691",
          ProductName: "New Look denim jacket with borg lining in black",
          price: 45,
          sellingFastBadge: "Selling fast",
          productImage: "https://images.asos-media.com/products/new-look-denim-jacket-with-borg-lining-in-black/204087595-1-black?$n_480w$&wid=476&fit=constrain",
          saleAmount: 38,
          productDeal: "-14%",
          productBadge: ""
        },
        {
          productLink: "https://www.asos.com/asos-design/asos-design-5-pack-muscle-fit-t-shirt-with-crew-neck-save-multi/prd/203370423?colourWayId=203370431&cid=16691",
          ProductName: "ASOS DESIGN 5 pack muscle fit t-shirt with crew neck save - MULTI",
          price: 34,
          sellingFastBadge: "Selling fast",
          productImage: "https://images.asos-media.com/products/asos-design-5-pack-muscle-fit-t-shirt-with-crew-neck-save-multi/203370423-1-multi?$n_480w$&wid=476&fit=constrain",
          saleAmount: 29,
          productDeal: "-14%",
          productBadge: ""
        },
        {
          productLink: "https://www.asos.com/asos-design/asos-design-oversized-t-shirt-in-off-white-with-celestial-front-and-spine-print/prd/203356290?colourWayId=203356293&cid=16691",
          ProductName: "ASOS DESIGN oversized t-shirt in off white with celestial front and spine print",
          price: 21,
          sellingFastBadge: "Selling fast",
          productImage: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-off-white-with-celestial-front-and-spine-print/203356290-1-marshmallow?$n_480w$&wid=476&fit=constrain",
          saleAmount: "",
          productDeal: "",
          productBadge: ""
        },
        {
          productLink: "https://www.asos.com/the-north-face/the-north-face-glacier-100-1-4-zip-fleece-in-black/prd/203213274?colourWayId=203213275&cid=16691",
          ProductName: "The North Face Glacier 100 1/4 zip fleece in black",
          price: 53,
          sellingFastBadge: "Selling fast",
          productImage: "https://images.asos-media.com/products/the-north-face-glacier-100-1-4-zip-fleece-in-black/203213274-1-black?$n_480w$&wid=476&fit=constrain",
          saleAmount: "",
          productDeal: "",
          productBadge: ""
        }
      ]
    
  return (
    <Box width={{base:"95%",md:"90",lg:"85%"}} margin="auto" marginTop="20px" marginBottom="20px" >
        <Flex flexDirection={{base:"column", sm:"row"}} width={{md:"100%", lg:"80%"}} margin="auto" >
            <Box display={{base:"none", md:"grid" }} width={{base:"0px",md:"10%"}} height="100%" >
                <Image src="https://images.asos-media.com/products/adpt-wide-fit-chino-in-black/203798946-1-black?$n_320w$&wid=317&fit=constrain" alt='Products' w="100%" p="20px 10px" />
            </Box>
            <Box width={{base:"80%",sm:"50%"}} >
                <Image src="https://images.asos-media.com/products/adpt-wide-fit-chino-in-black/203798946-1-black?$n_320w$&wid=317&fit=constrain" alt='Products' w="100%" p="0px 10px" />
            </Box>
            <Box width={{base:"100%",sm:"50%", md:"40%"}} padding="20px"  lineHeight={{base:"20px",md:"25px"}} >
                <Text className='productName' fontSize={{base:"12px", sm:"14px", md:"16px"}} >COLLUSION Unisex knitted jumper with knibble detail in charcoal</Text>
                <Text className='mainPrice' fontSize={{base:"11px", sm:"13px", md:"15px"}} >$99.00</Text>
                <Box backgroundColor="lightblue" p="5px 15px" margin="auto" marginTop="20px" >
                    <Flex fontSize={{base:"20px", md:"25px"}} >
                        <IoPricetagOutline />
                        <Box pl="5%" fontSize={{base:"10px", sm:"12px", md:"14px"}} >
                            <Text>NEW HERE?</Text>
                            <Text>Get 15% off 100,000+ styles!*</Text>
                            <Text>With code: <span style={{fontWeight:700}}>HIFRIEND</span></Text>
                        </Box>
                    </Flex>
                </Box>
                <Box m="20px 0px" >
                <Text className='sizeSelect' fontSize={{base:"11px", sm:"12px", md:"14px"}}>Size</Text>
                    <Select borderRadius="0px" placeholder='Please Select'>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='XXL'>XXL</option>
                    </Select>
                </Box>
                <Flex justifyContent="space-between" >
                    <Button className='bagButton' _hover={{ bg: '#006128' }} backgroundColor="#018849" variant='solid'>ADD TO BAG</Button>
                    <Box className='heart' display="flex" justifyContent="center" alignItems="center" fontSize={{base:"15px", md:"17px",lg:"20px"}} >
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
                <Box key={el.price} pb="10px">
                    <Box position="relative" >
                        <Image src={el.productImage} alt='Products' w="100%" />
                        <Box backgroundColor="white" fontSize={{base:"10px", sm:"11px", md:"12px"}} p="3px 8px" color="red" position="absolute" top="20px"  >
                        <Text>{el.productDeal}</Text>
                    </Box>
                    </Box>
                    <Text fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.ProductName}</Text>
                    <Text fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.name}</Text>
                    <Flex>
                        <Text fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(100, 100, 100)" className='mainPrice'>${el.saleAmount?el.saleAmount:el.price}.00</Text>
                        <Text p="0px 15px 0px 5px" textDecoration="line-through" fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(255, 0, 85)" >{el.saleAmount?"$"+el.price+".00":null}</Text>
                    </Flex>
                </Box>
            ))}
        </SimpleGrid>
    </Box>
  )
}

export default SingleProduct