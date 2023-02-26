import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Box, Text, SimpleGrid,Spinner, Flex, Button, Skeleton} from "@chakra-ui/react"
import { getBagData } from "../Redux/Bag/action";
import { BagItems } from "../Components/BagItem";
import {Link} from "react-router-dom"
import BagTotal from "../Components/BagTotal";

export default function Bag ()
{
    const bagData = useSelector(store=>store.bagReducer)
    const {payload, isLoading} = bagData;
   
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBagData())
    }, [])

    
    if(isLoading)
    {
        return <Skeleton height={"80vh"}/>
    }

    let Total = 0;
     {payload?.map(el=>Total+=el.strike)}

    return (
        <Box fontSize={{base:12, md:14, lg:16}} letterSpacing={0.9} fontWeight={400} mt={5} mb={5}>


<div className="flex justify-around text-center font-semibold mb-[2px]">
        <p className=" cursor-pointer hover:border-2 border-gray-500 bg-[#ff385c] w-[100%]">
          UP TO 50% OFF LAYERING LEGENDS!
          <br />
          COATS, HOODIES AND MORE
        </p>
        <p className="hover:border-2 border-gray-500 cursor-pointer w-[100%]">
          ASOS PREMIER
          <br />
          Unlimited Next Day Delivery – just $24.99 a year!
        </p>
      </div>




            <Text align={"center"} fontWeight={700} fontSize={{base:28, md:32, lg:32}} mb={5} >MY BAG ({isLoading === false ? payload.length : <Spinner size="xs" />})</Text>
            <Box w={{base:"100%", md:"95%", lg:"90%"}} margin={"auto"} align={"center"} backgroundColor={"black"} color={"white"} pt={2} pb={2} mb={5}  >
                <Text  fontWeight={600} fontSize={{base:18, md:20, lg:20}} width={{base:"95%"}}>Congrats! You're eligible for free gift Please select.</Text>
            </Box>
            <SimpleGrid  columns={{base:1,md:2}} spacing={10} w="80%" justifyContent="space-around" alignItems="flex-start" m="auto">
            <Box>
            {payload?.map(el=><BagItems key={el.id} {...el} />)}
            </Box>
          
                <Box>
                    <BagTotal t={Total} />
                </Box>
               
                </SimpleGrid>
           
            <Flex align={"center"} pt={3} pb={3} backgroundColor={"gray.200"} display={{ base: 'block', md: 'flex', lg: 'flex' }} justify={"space-evenly"} >
                <Text align={{ base: 'center', md: 'center', lg: 'center' }} >You will earn  <Text as={"span"} fontWeight={700} fontSize={{base:16, md:20, lg:20}}>₹ {payload.length > 0 && payload.length*10} Good Points</Text> as cashback on this order.</Text>
                <Text  display={{ base: 'none', md: 'block', lg: 'block' }}   align={{ base: 'center', md: 'center', lg: 'center' }}  >GRAND TOTAL <Text as={"span"} fontWeight={700} fontSize={{base:16, md:20, lg:20}} >₹ {Total}</Text></Text>
            </Flex>
            <Box align={"center"}>
           
            </Box>
        </Box>
    )
}