import React from "react";
import { Text, Button, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BagTotal = ({t}) => {
  return (
    <Box lineHeight={10}  bg='white' boxShadow='md' p='6' rounded='md'>
      <Text  align={"left"} fontWeight={700} fontSize={{base:28, md:32, lg:32}} mb={5} >TOTAL </Text>
      <Text fontSize="xl">Total:<Text as={"span"} fontWeight={700}  >₹ {t}</Text></Text>
      <hr />
  <Link to="/products/cart/checkout">
  <Button w="80%" color="white" bg="green">
        CHECKOUT
      </Button>
  </Link>
     
      <Text fontSize="md">WE ACCEPT</Text>
      <Image
        boxSize="30%"
        src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
      />
      <Text fontSize="sm">Got a discount code? Add it in the next step.</Text>
    </Box>
  );
};

export default BagTotal;
