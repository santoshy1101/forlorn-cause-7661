import React from 'react'
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import "../Styles/Mens.css"

const ProductCard = ({menOrwomen,el}) => {
    const navigate = useNavigate();
  return (
    <Box onClick={()=>navigate(`/singleproduct/${menOrwomen}${el._id}`)} key={el._id} pb="10px">
        <Box position="relative" >
            <Image src={el.image} alt='Products' w="100%" />
            <Box backgroundColor="white" fontSize={{base:"10px", sm:"11px", md:"12px"}} p="3px 8px" color="red" position="absolute" top="20px"  >
                <Text>{el.discount}</Text>
            </Box>
            <Box className='tag' right="0%" bottom={{base:"20%", md:"15%"}} fontSize={{base:"9px", sm:"11px", md:"13px",lg:"14px"}} >
                <Text>SELLING FAST</Text>
            </Box>
            <Box right="1%" bottom="2%" fontSize={{base:"13px", md:"16px",lg:"20px"}} className='heart' >
                <FaRegHeart />
            </Box>
        </Box>
        <Text className='productName' fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.product}</Text>
        <Text className='productName' fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.brand}</Text>
        <Flex>
            <Text fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(100, 100, 100)" className='mainPrice'>₹{el.strike?el.price:el.strike}.00</Text>
            <Text p="4px 15px 0px 5px" textDecoration="line-through" fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(255, 0, 85)" >{el.strike?"₹"+el.strike+".00":null}</Text>
        </Flex>
  </Box>
  )
}

export default ProductCard