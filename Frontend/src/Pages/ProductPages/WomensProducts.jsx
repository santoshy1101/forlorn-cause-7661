import { useRef, useState, useEffect } from "react";
import "../../Styles/Women.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Heading, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Text,} from "@chakra-ui/react";
import ProductsLoading from "../../Components/ProductsLoading";
import ProductCard from "../../Components/ProductCard";
import { getBrandFun, getColorFun, getFun, sortFun } from "../../Redux/Women/women.action";

const WomensProducts = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(7000);
  const [sortPrice, setSortPrice] = useState([]);
  const [search, setSearch] = useState("");
  let ref = useRef(null);

  const store = useSelector((state) => state.womenReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFun({ search, min, max }));
  }, [search, sortPrice]);

  const debounce = (val, delay) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setSortPrice(val);
    }, delay);
  };

  let data = store.data;
  let loading = store.loading;
  if (loading) return <ProductsLoading />;
  return (
    <Box className="Container" backgroundColor="white">
      <Box className="headBox" h="80px">
        <Heading fontSize="25px">Bestsellers clothing</Heading>
      </Box>
      <SimpleGrid
        display={{ base: "none", md: "grid" }}
        columns={{ md: 4, lg: 5, xl: 6 }}
        spacing="20px"
        className="sortBox"
        p={{ base: "10px", md: "20px" }}
      >
        <Menu closeOnSelect={false}>
          <MenuButton
            transition="all 0.2s"
            className="menubutton"
            w="100%"
            p="10px 20px"
          >
            <Flex justifyContent="space-between">
              <Text>Sort</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
            <MenuOptionGroup onChange={(e) => dispatch(sortFun(e))}>
              <MenuItemOption value="reset">Reset</MenuItemOption>
              <MenuItemOption value="htl">Price high to low</MenuItemOption>
              <MenuItemOption value="lth">Price low to high</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            transition="all 0.2s"
            className="menubutton"
            w="100%"
            p="10px 20px"
          >
            <Flex justifyContent="space-between">
              <Text>Category</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
            <MenuOptionGroup
              onChange={(e) => (e == "all" ? setSearch("") : setSearch(e))}
            >
              <MenuItemOption value="all">ALL</MenuItemOption>
              <MenuItemOption value="A-Line%20Dress">
              A-Line Dress(20)
              </MenuItemOption>
              <MenuItemOption value="Top">
              Top(61)
              </MenuItemOption>
              <MenuItemOption value="Blazer">
              Blazer(12)
              </MenuItemOption>
              <MenuItemOption value="High-Rise">
              High-Rise(62)
              </MenuItemOption>
              <MenuItemOption value="Bootcut">
              Bootcut(32)
              </MenuItemOption>
              <MenuItemOption value="Jogger">
              Jogger(12)
              </MenuItemOption>
              <MenuItemOption value="Full%20Set">
              Full Set(9)
              </MenuItemOption>
              <MenuItemOption value="Striped">
              Striped(8)
              </MenuItemOption>
              <MenuItemOption value="Fit%20Jeans">
              Fit Jeans(52)
              </MenuItemOption>
              <MenuItemOption value="Cotton">
              Cotton Material(53)
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            transition="all 0.2s"
            className="menubutton"
            w="100%"
            p="10px 20px"
          >
            <Flex justifyContent="space-between">
              <Text>Price Range</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList p="30px 20px">
            <Flex justifyContent="space-between">
              <Text>Min : {min}</Text>
              <Text>Max : {max}</Text>
            </Flex>
            <RangeSlider
              aria-label={["min", "max"]}
              colorScheme="blue"
              min={0}
              max={1000}
              defaultValue={[1, 7000]}
              // onChangeEnd={(val) =>{setMin(val[0]); setMax(val[1])}}
              onChangeEnd={(val) => {
                debounce(val, 2500);
                setMin(val[0] * 7);
                setMax(val[1] * 7);
              }}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} bg="red.300" />
              <RangeSliderThumb index={1} bg="red.300" />
            </RangeSlider>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            transition="all 0.2s"
            className="menubutton"
            w="100%"
            p="10px 20px"
          >
            <Flex justifyContent="space-between">
              <Text>Brands</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
            <MenuOptionGroup onChange={(e) => dispatch(getBrandFun(e))}>
              <MenuItemOption value="reset">ALL</MenuItemOption>
              <MenuItemOption value="Roadster">Roadster(36)</MenuItemOption>
              <MenuItemOption value="Berrylush">Berrylush(39)</MenuItemOption>
              <MenuItemOption value="Puma">Puma(9)</MenuItemOption>
              <MenuItemOption value="SASSAFRAS">SASSAFRAS(48)</MenuItemOption>
              <MenuItemOption value="Athena">Athena(27)</MenuItemOption>
              <MenuItemOption value="Kotty">Kotty(15)</MenuItemOption>
              <MenuItemOption value="Levis">Levis(19)</MenuItemOption>
              <MenuItemOption value="Tokyo%20Talkies">Tokyo Talkies(48)</MenuItemOption>
              <MenuItemOption value="H&M">H&M(14)</MenuItemOption>
              <MenuItemOption value="plusS">plusS(13) </MenuItemOption>
              <MenuItemOption value="DressBerry">DressBerry(8) </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            transition="all 0.2s"
            className="menubutton"
            w="100%"
            p="10px 20px"
          >
            <Flex justifyContent="space-between">
              <Text>Color</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
            <MenuOptionGroup onChange={(e) => dispatch(getColorFun(e))}>
              <MenuItemOption value="reset">ALL</MenuItemOption>
              <MenuItemOption value="Black">Black(92)</MenuItemOption>
              <MenuItemOption value="Blue">Blue(139)</MenuItemOption>
              <MenuItemOption value="Printed">Printed(65)</MenuItemOption>
              <MenuItemOption value="Pink">Pink(94)</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            transition="all 0.2s"
            className="menubutton"
            w="100%"
            p="10px 20px"
          >
            <Flex justifyContent="space-between">
              <Text>Style</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
            <MenuOptionGroup onChange={(e) => (e == "all" ? setSearch("") : setSearch(e))} >
              <MenuItemOption value="all">ALL</MenuItemOption>
              <MenuItemOption value="Fit">Slim Fit(22)</MenuItemOption>
              <MenuItemOption value="A-Line">A-Line(20)</MenuItemOption>
              <MenuItemOption value="Jogger">Jogger(12)</MenuItemOption>
              <MenuItemOption value="High-Rise">High-Rise(62)</MenuItemOption>
              <MenuItemOption value="Track%20Pants">Track Pants(7)</MenuItemOption>
              <MenuItemOption value="Casual ">Casual (7)</MenuItemOption>
              <MenuItemOption value="Round%20Neck">Round Neck(7)</MenuItemOption>
              <MenuItemOption value="Crop%20Top">Crop Top(6)</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </SimpleGrid>
      <SimpleGrid
        display={{ base: "flex", md: "none" }}
        columns={{ md: 4, lg: 5, xl: 6 }}
        spacing="20px"
        className="sortBox"
        p={{ base: "10px", md: "20px" }}
      >
        <Menu closeOnSelect={false}>
          <MenuButton transition="all 0.2s" w="100%" p="10px 20px">
            <Flex justifyContent="space-between">
              <Text>Sort</Text>
              <Text fontSize="20px">
                <ChevronDownIcon />
              </Text>
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
          <MenuOptionGroup onChange={(e) => dispatch(sortFun(e))}>
              <MenuItemOption value="reset">Reset</MenuItemOption>
              <MenuItemOption value="htl">Price high to low</MenuItemOption>
              <MenuItemOption value="lth">Price low to high</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton transition="all 0.2s" w="100%" p="10px 20px">
            <Flex justifyContent="space-between">
              <Text>Style</Text>
              <Text fontSize="20px">
                <ChevronDownIcon />
              </Text>
            </Flex>
          </MenuButton>
          <MenuList borderRadius="none">
          <MenuOptionGroup onChange={(e) => (e == "all" ? setSearch("") : setSearch(e))} >
              <MenuItemOption value="all">ALL</MenuItemOption>
              <MenuItemOption value="Fit">Slim Fit(22)</MenuItemOption>
              <MenuItemOption value="A-Line">A-Line(20)</MenuItemOption>
              <MenuItemOption value="Jogger">Jogger(12)</MenuItemOption>
              <MenuItemOption value="High-Rise">High-Rise(62)</MenuItemOption>
              <MenuItemOption value="Track%20Pants">Track Pants(7)</MenuItemOption>
              <MenuItemOption value="Casual ">Casual (7)</MenuItemOption>
              <MenuItemOption value="Round%20Neck">Round Neck(7)</MenuItemOption>
              <MenuItemOption value="Crop%20Top">Crop Top(6)</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </SimpleGrid>

      <Box
        textAlign="center"
        fontSize={{ base: "11px", md: "13px" }}
        p={{ base: "10px", md: "20px" }}
        fontStyle="sans-serif"
      >
        <Text>{data.length} styles found</Text>
      </Box>
{/* ---------------------- Men Products ---------------------------------------------------------- */}
      <SimpleGrid
        columns={{ base: 2, sm: 3, lg: 4 }}
        spacing="20px"
        p={{ base: "10px", md: "0px 20px", lg: "0px 40px" }}
      >
        {data && data.map((el) => <ProductCard key={el._id} menOrwomen="w" el={el} />)}
      </SimpleGrid>
    </Box>
  );
};

export default WomensProducts;
