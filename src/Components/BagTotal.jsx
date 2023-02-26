import React from "react";
import { Text, Button, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BagTotal = ({t}) => {
  return (
    <Box>
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
