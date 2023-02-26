import { Box, Text } from "@chakra-ui/layout";
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getBagData } from "../Redux/Bag/action";
import { BagItems } from "./BagItem";
const CheckoutComponent = () => {
  const bagData = useSelector((store) => store.bagReducer);
  const { payload, isLoading } = bagData;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBagData());
  }, []);
  let Total = 0;
  {
    payload?.map((el) => (Total += el.price));
  }
  return (
    <div>
      <Box  boxShadow='md' p='6'  bg='white' rounded='md' >
        <Text
          align={"center"}
          fontWeight={700}
          fontSize={{ base: 28, md: 32, lg: 32 }}
          mb={5}
        >
          {isLoading === false ? (
            payload.length + " ITEM"
          ) : (
            <Spinner size="xs" />
          )}
        </Text>
        <hr />
        <Box>
          {payload?.map((el) => (
            <BagItems key={el.id} {...el} />
          ))}
        </Box>

        <Box>
          <Text
            align={{ base: "center", md: "center", lg: "center" }}
            fontSize={{ base: 16, md: 20, lg: 20 }}
          >
            GRAND TOTAL{" "}
            <Text as={"span"} fontWeight={700}>
              ₹ {Total}
            </Text>
          </Text>
       
            <Button
              fontSize={{ base: 16, md: 20, lg: 20 }}
              backgroundColor={"black"}
              color={"white"}
              fontWeight={400}
              pt={2}
              pb={2}
              pl={20}
              pr={20}
              mt={5}
              mb={20}
              align={{ base: "center", md: "center", lg: "center" }}
              _hover={false}
              width={{ base: "95%", md: "50%", lg: "50%" }}
              onClick={onOpen}
            >
              PLACE ORDER
            </Button>
      
        </Box>
      </Box>

      <Box>
        <Modal
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
          bg="white"
        >
          <ModalOverlay />
          <ModalContent bg="white" color={"black"}>
            <ModalHeader>Order Successful</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                Yay! Thank you for shopping
                <Image
                  _hover={{ scale: 1 }}
                  w="60%"
                  m="auto"
                  src={
                    "https://i.gifer.com/origin/11/1184b4c0aa977f925dde58d2075772dd_w200.gif"
                  }
                />
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Link to={`/men`}>
                <Button variant="outline" color={"black"}>
                  Continue Shopping
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default CheckoutComponent;
