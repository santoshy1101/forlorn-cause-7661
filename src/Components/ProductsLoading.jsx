import { Box, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const ProductsLoading = () => {
  let arr=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <Box>
    <Skeleton isLoaded={false} w="100%" height="70px" ></Skeleton>
    <Box height="10px" ></Box>
    <Skeleton isLoaded={false} w="100%" height="80px" ></Skeleton>
    <SimpleGrid columns={{base:2,sm:3,lg:4}} spacing="20px"  p={{base:"10px", md:"15px 20px",lg:"30px 40px"}} >
    {arr.map((el)=>(
      <Box key={el} pb="10px">
        <Skeleton isLoaded={false} w="100%" height="380px" ></Skeleton>
        <SkeletonText isLoaded={false} mt='4' noOfLines={3} spacing='3' skeletonHeight='2' />
      </Box>
    ))}
  </SimpleGrid>
  </Box>
  )
}

export default ProductsLoading