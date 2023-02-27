import { Box, Button, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBagData, getBagData } from "../Redux/Bag/action";

export function BagItems(el) {
  const { _id } = el;
 
  const dispatch = useDispatch();

  function deleteHandler(_id) {
   
    dispatch(deleteBagData(_id)).then(() => dispatch(getBagData())).then(()=>window.location.reload());
    
  }

  

  return (
    <Box >
      <Flex
        key={el._id}
      //  width={{ base: "100%", md: "95%", lg: "90%" }} 
        margin={"auto"}
        // justify={"space-between"}
        alignItems={"flex-start"}
        borderBottom={"1px solid #999999"}
        mt={2}
        mb={2}
        pb={5}
        pt={5}
      
      >
        <Box pr='0'  >
          <Image
            src={el.image}

             width={ "30%"}
             m={0}

            
          />
        </Box>

        <Box  ml={"-44"}>
          <Text
            fontSize={{ base: 16, md: 20, lg: 20 }}
            // width={{ base: "100%", md: "50%", lg: "100%" }}
          >
            {el.product}
          </Text>

        
            {" "}
            <Text fontSize={{ base: 16, md: 20, lg: 20 }}>
              ₹ {el.price}
            </Text>
         

          <s>
          <Text
            display={{ base: "none", md: "block", lg: "block", color: "red" }}
          >
            ₹ {el.strike}
          </Text>
          </s>
        </Box>
        <Box >
          <CloseButton 
            display={{ base: "block", md: "block", lg: "block" }}
            color={"#5b5b5b"}
            onClick={() => deleteHandler(_id)}
          />
        </Box>
      </Flex>
    </Box>
  );
}
