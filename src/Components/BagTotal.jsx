import React from "react";
import { Text, Button, Image, Box } from "@chakra-ui/react";

const BagTotal = () => {
  return (
    <Box>
      <Text fontSize="xl">Total</Text>
      <hr />
      <Text fontSize="md" justifyContent={"space-between"}>
        Sub-total Delivery <span>100</span>
      </Text>
      <Button w="80%" color="white" bg="green">
        CHECKOUT
      </Button>
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
