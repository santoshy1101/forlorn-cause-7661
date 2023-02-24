import { Box, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBagData } from "../Redux/Bag/action";
import { BagItems } from "./BagItem";
const CheckoutComponent = () => {
  const bagData = useSelector((store) => store.bagReducer);
  const { payload, isLoading } = bagData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBagData());
  }, []);
  let Total = 0;
  {
    payload?.map((el) => (Total += el.offerPrice));
  }
  return (
    <div>
      <Box>
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
          <Text>
            Total To Pay <span>{Total}</span>
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutComponent;
