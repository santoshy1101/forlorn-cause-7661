import { useRef, useState, useEffect } from "react";
import "../../Styles/Mens.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Heading, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Text,} from "@chakra-ui/react";
import { getBrandFun, getColorFun, getFun, sortFun,} from "../../Redux/Men/men.action";
import ProductsLoading from "../../Components/ProductsLoading";
import ProductCard from "../../Components/ProductCard";

const MensProducts = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(7000);
  const [sortPrice, setSortPrice] = useState([]);
  const [search, setSearch] = useState("");
  let ref = useRef(null);

  const store = useSelector((state) => state.menReducer);
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
              <MenuItemOption value="Cotton%20T-shirt">
                Cotton T-shirt(101)
              </MenuItemOption>
              <MenuItemOption value="Casual%20Shirt">
                Casual Shirt(74)
              </MenuItemOption>
              <MenuItemOption value="Formal%20Blazer">
                Formal Blazer(6)
              </MenuItemOption>
              <MenuItemOption value="Casual%20Blazer">
                Casual Blazer(3)
              </MenuItemOption>
              <MenuItemOption value="Kurta">Kurta(12)</MenuItemOption>
              <MenuItemOption value="Printed%20T-shirt">
                Printed T-shirt(23)
              </MenuItemOption>
              <MenuItemOption value="Sweatshirt">Sweatshirt(3)</MenuItemOption>
              <MenuItemOption value="Striped">
                Striped Shirt & T-shirt(25)
              </MenuItemOption>
              <MenuItemOption value="Collar%20T-shirt">
                Collar T-shirt(50)
              </MenuItemOption>
              <MenuItemOption value="Round%20Neck">
                Round Neck(19)
              </MenuItemOption>
              <MenuItemOption value="Oversized">
                Oversized T-shirt(10)
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
              <MenuItemOption value="Roadster">Roadster(70)</MenuItemOption>
              <MenuItemOption value="HRX">
                HRX by Hrithik Roshan(41)
              </MenuItemOption>
              <MenuItemOption value="ADIDAS">ADIDAS(13)</MenuItemOption>
              <MenuItemOption value="Puma">Puma(10)</MenuItemOption>
              <MenuItemOption value="HIGHLANDER">HIGHLANDER(26)</MenuItemOption>
              <MenuItemOption value="Louis">
                Louis Philippe Sport(25)
              </MenuItemOption>
              <MenuItemOption value="HERE&NOW">HERE&NOW(21)</MenuItemOption>
              <MenuItemOption value="WROGN">WROGN(20)</MenuItemOption>
              <MenuItemOption value="Powerlook">Powerlook(11)</MenuItemOption>
              <MenuItemOption value="Harbour">
                Mast & Harbour(10)
              </MenuItemOption>
              <MenuItemOption value="Dennis">Dennis Lingo(8) </MenuItemOption>
              <MenuItemOption value="INVICTUS">INVICTUS(8) </MenuItemOption>
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
              <MenuItemOption value="Black">Black(91)</MenuItemOption>
              <MenuItemOption value="Green">Green(82)</MenuItemOption>
              <MenuItemOption value="printed">Printed()</MenuItemOption>
              <MenuItemOption value="Red">Red()</MenuItemOption>
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
            <MenuOptionGroup
              onChange={(e) => (e == "all" ? setSearch("") : setSearch(e))}
            >
              <MenuItemOption value="all">ALL</MenuItemOption>
              <MenuItemOption value="Slim%20Fit">Slim Fit(78)</MenuItemOption>
              <MenuItemOption value="Checked">Checked(9)</MenuItemOption>
              <MenuItemOption value="Typography">Typography(16)</MenuItemOption>
              <MenuItemOption value="Round%20Neck">
                Round Neck(19)
              </MenuItemOption>
              <MenuItemOption value="Oversized">Oversized(10)</MenuItemOption>
              <MenuItemOption value="Embroidered">
                Embroidered(3)
              </MenuItemOption>
              <MenuItemOption value="Sustainable">
                Sustainable(5)
              </MenuItemOption>
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
            <MenuOptionGroup
              onChange={(e) => (e == "all" ? setSearch("") : setSearch(e))}
            >
              <MenuItemOption value="all">ALL</MenuItemOption>
              <MenuItemOption value="Cotton%20T-shirt">
                Cotton T-shirt(101)
              </MenuItemOption>
              <MenuItemOption value="Casual%20Shirt">
                Casual Shirt(74)
              </MenuItemOption>
              <MenuItemOption value="Formal%20Blazer">
                Formal Blazer(6)
              </MenuItemOption>
              <MenuItemOption value="Casual%20Blazer">
                Casual Blazer(3)
              </MenuItemOption>
              <MenuItemOption value="Kurta">Kurta(12)</MenuItemOption>
              <MenuItemOption value="Printed%20T-shirt">
                Printed T-shirt(23)
              </MenuItemOption>
              <MenuItemOption value="Sweatshirt">Sweatshirt(3)</MenuItemOption>
              <MenuItemOption value="Striped">
                Striped Shirt & T-shirt(25)
              </MenuItemOption>
              <MenuItemOption value="Collar%20T-shirt">
                Collar T-shirt(50)
              </MenuItemOption>
              <MenuItemOption value="Round%20Neck">
                Round Neck(19)
              </MenuItemOption>
              <MenuItemOption value="Oversized">
                Oversized T-shirt(10)
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </SimpleGrid>

      <Box
        textAlign="center"
        fontSize={{ base: "10px", md: "12px" }}
        p={{ base: "10px", md: "20px" }}
      >
        <Text>{data.length} styles found</Text>
      </Box>
{/* ---------------------- Men Products ---------------------------------------------------------- */}
      <SimpleGrid
        columns={{ base: 2, sm: 3, lg: 4 }}
        spacing="10px"
        p={{ base: "10px", md: "15px 20px", lg: "30px 40px" }}
      >
        {data && data.map((el) => <ProductCard key={el._id} el={el} />)}
      </SimpleGrid>
    </Box>
  );
};

export default MensProducts;
