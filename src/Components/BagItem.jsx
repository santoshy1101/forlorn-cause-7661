import { Box, Button, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBagData, getBagData } from "../Redux/Bag/action";


export function BagItems(el)
{
    const [qnt, setQnt] = useState(1)
    const {id} = el
    const dispatch = useDispatch()

    function deleteHandler()
    {
        dispatch(deleteBagData(id)).then(()=>dispatch(getBagData()))
    }

    function Dec()
    {
        if(qnt > 1)
        {
            setQnt(qnt - 1)
        }
    }

    function Inc()
    {
        setQnt(qnt + 1)
    }


    return(
        <>
            <Flex key={el.id} width={{ base: '100%', md: '95%', lg: '90%' }} margin={"auto"} justify={"space-around"} alignItems={"center"} borderBottom={"1px solid #999999"} mt={2} mb={2} pb={5} pt={5} >
                <Image src={el.image} width={{ base: '100px', md: '120px', lg: '120px' }}  m={0} />
                <Text fontSize={{base:16, md:20, lg:20}} width={{ base: '120px', md: '250px', lg: '400px' }} >{el.productName}</Text>
                <Text fontSize={{base:16, md:20, lg:20}}>₹ {el.actualPrice*qnt}</Text>
                <Flex display={{ base: 'none', md: 'block', lg: 'block' }}>
                    <Button border={"1px solid"} onClick={Dec}  ml={1} mr={1}>-</Button>
                    <Button border={"1px solid"}   ml={1} mr={1}>{qnt}</Button>
                    <Button border={"1px solid"} onClick={Inc}  ml={1} mr={1}>+</Button>
                </Flex>
                <Text display={{ base: 'none', md: 'block', lg: 'block' }}>₹ {el.offerPrice*qnt}</Text>
                <CloseButton display={{ base: 'block', md: 'block', lg: 'block' }} color={"#5b5b5b"} onClick={()=>deleteHandler(id)} />
            </Flex>
        </>
    );
}