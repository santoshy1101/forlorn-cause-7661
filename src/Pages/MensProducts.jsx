import React, { useState } from 'react'
import "../Styles/Mens.css"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FaRegHeart } from "react-icons/fa";

const MensProducts = () => {

  const [min,setMin]=useState(300)
  const [max,setMax]=useState(800)
  console.log('min:', min)
  console.log('max:', max)
  let data=[
    {
      productLink: "https://www.asos.com/asos-design/asos-design-relaxed-t-shirt-in-grey-with-floral-outline-back-print/prd/203353303?colourWayId=203353314&cid=16691",
      ProductName: "ASOS DESIGN relaxed t-shirt in grey with floral outline back print",
      price: 18,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-relaxed-t-shirt-in-grey-with-floral-outline-back-print/203353303-1-belgianblock?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/adidas-performance/adidas-sportwear-lounge-x-street-t-shirt-in-white/prd/203407123?colourWayId=203407137&cid=16691",
      ProductName: "adidas Sportwear Lounge x Street t-shirt in white",
      price: 35,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/adidas-sportwear-lounge-x-street-t-shirt-in-white/203407123-1-white?$n_480w$&wid=476&fit=constrain",
      saleAmount: 30,
      productDeal: "-14%",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-oversized-t-shirt-in-black-with-photographic-butterfly-back-print/prd/203670018?colourWayId=203670019&cid=16691",
      ProductName: "ASOS DESIGN oversized t-shirt in black with photographic butterfly back print",
      price: 24,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-black-with-photographic-butterfly-back-print/203670018-1-black?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/new-look/new-look-denim-jacket-with-borg-lining-in-black/prd/204087595?colourWayId=204087597&cid=16691",
      ProductName: "New Look denim jacket with borg lining in black",
      price: 45,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/new-look-denim-jacket-with-borg-lining-in-black/204087595-1-black?$n_480w$&wid=476&fit=constrain",
      saleAmount: 38,
      productDeal: "-14%",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-5-pack-muscle-fit-t-shirt-with-crew-neck-save-multi/prd/203370423?colourWayId=203370431&cid=16691",
      ProductName: "ASOS DESIGN 5 pack muscle fit t-shirt with crew neck save - MULTI",
      price: 34,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-5-pack-muscle-fit-t-shirt-with-crew-neck-save-multi/203370423-1-multi?$n_480w$&wid=476&fit=constrain",
      saleAmount: 29,
      productDeal: "-14%",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-oversized-t-shirt-in-off-white-with-celestial-front-and-spine-print/prd/203356290?colourWayId=203356293&cid=16691",
      ProductName: "ASOS DESIGN oversized t-shirt in off white with celestial front and spine print",
      price: 21,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-off-white-with-celestial-front-and-spine-print/203356290-1-marshmallow?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/the-north-face/the-north-face-glacier-100-1-4-zip-fleece-in-black/prd/203213274?colourWayId=203213275&cid=16691",
      ProductName: "The North Face Glacier 100 1/4 zip fleece in black",
      price: 53,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/the-north-face-glacier-100-1-4-zip-fleece-in-black/203213274-1-black?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/new-look/new-look-twill-bomber-jacket-in-black/prd/204266795?colourWayId=204266802&cid=16691",
      ProductName: "New Look twill bomber jacket in black",
      price: 30,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/new-look-twill-bomber-jacket-in-black/204266795-1-black?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-straight-leg-joggers-with-pintucks-in-off-white/prd/204277573?colourWayId=204277592&cid=16691",
      ProductName: "ASOS DESIGN straight leg joggers with pintucks in off white",
      price: 30,
      sellingFastBadge: "",
      productImage: "https://images.asos-media.com/products/asos-design-straight-leg-joggers-with-pintucks-in-off-white/204277573-1-jetstream?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/vans/vans-small-logo-t-shirt-in-black/prd/23731570?colourWayId=60507852&cid=16691",
      ProductName: "Vans Small Logo t-shirt in black",
      price: 19,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/vans-small-logo-t-shirt-in-black/23731570-1-black?$n_480w$&wid=476&fit=constrain",
      saleAmount: 16,
      productDeal: "-13%",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-90s-oversized-cord-shirt-in-mustard-in-cotton-blend/prd/203917416?colourWayId=203917442&cid=16691",
      ProductName: "ASOS DESIGN 90s oversized cord shirt in mustard in cotton blend",
      price: 30,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-90s-oversized-cord-shirt-in-mustard-in-cotton-blend/203917416-1-mustard?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: "MORE COLOURS"
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-oversized-t-shirt-in-black-with-line-drawing-back-print/prd/203353253?colourWayId=203353270&cid=16691",
      ProductName: "ASOS DESIGN oversized t-shirt in black with line drawing back print",
      price: 17,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-black-with-line-drawing-back-print/203353253-1-black?$n_480w$&wid=476&fit=constrain",
      saleAmount: 14,
      productDeal: "-14%",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/adidas-performance/adidas-football-squadra-21-t-shirt-in-navy/prd/202733385?colourWayId=202733387&cid=16691",
      ProductName: "adidas Football Squadra 21 t-shirt in navy",
      price: 20,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/adidas-football-squadra-21-t-shirt-in-navy/202733385-1-navy?$n_480w$&wid=476&fit=constrain",
      saleAmount: 17,
      productDeal: "-15%",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/the-north-face/the-north-face-himalayan-down-puffer-jacket-in-black-and-off-white/prd/203210404?colourWayId=203210428&cid=16691",
      ProductName: "The North Face Himalayan down puffer jacket in black and off white",
      price: 36,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/the-north-face-himalayan-down-puffer-jacket-in-black-and-off-white/203210404-1-blackandoffwhite?$n_480w$&wid=476&fit=constrain",
      saleAmount: 31,
      productDeal: "-14%",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/new-look/new-look-double-breasted-shower-resistant-trench-coat-in-stone/prd/204266804?colourWayId=204266810&cid=16691",
      ProductName: "New Look double breasted shower resistant trench coat in stone",
      price: 65,
      sellingFastBadge: "",
      productImage: "https://images.asos-media.com/products/new-look-double-breasted-shower-resistant-trench-coat-in-stone/204266804-1-stone?$n_480w$&wid=476&fit=constrain",
      saleAmount: 55,
      productDeal: "-14%",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/collusion/collusion-t-shirt-with-varsity-embroidery-in-red/prd/203590774?colourWayId=203590776&cid=16691",
      ProductName: "COLLUSION t-shirt with varsity embroidery in red",
      price: 10,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/collusion-t-shirt-with-varsity-embroidery-in-red/203590774-1-red?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-90s-oversized-linen-shirt-in-ecru/prd/203387022?colourWayId=203387023&cid=16691",
      ProductName: "ASOS DESIGN 90s oversized linen shirt in ecru",
      price: 32,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-90s-oversized-linen-shirt-in-ecru/203387022-1-ecru?$n_480w$&wid=476&fit=constrain",
      saleAmount: 27,
      productDeal: "-14%",
      productBadge: "MORE COLOURS"
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-oversized-t-shirt-in-beige/prd/203609046?colourWayId=203609056&cid=16691",
      ProductName: "ASOS DESIGN oversized t-shirt in beige",
      price: 10,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-beige/203609046-1-rugbytan?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: "MORE COLOURS"
    },
    {
    productLink: "https://www.asos.com/asos-design/asos-design-t-shirt-with-crew-neck-in-white/prd/203772649?colourWayId=203772650&cid=16691",
    ProductName: "ASOS DESIGN t-shirt with crew neck in white",
    price: 8,
    sellingFastBadge: "",
    productImage: "https://images.asos-media.com/products/asos-design-t-shirt-with-crew-neck-in-white/203772649-1-white?$n_480w$&wid=476&fit=constrain",
    saleAmount: "",
    productDeal: "",
    productBadge: "MORE COLOURS"
    },
    {
      productLink: "https://www.asos.com/adidas-performance/adidas-sportswear-3-pack-ankle-socks-in-black/prd/203407160?colourWayId=203407178&cid=16691",
      ProductName: "adidas Sportswear 3 pack ankle socks in black",
      price: 10,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/adidas-sportswear-3-pack-ankle-socks-in-black/203407160-1-black?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-shirt-in-aztec-stripe-print/prd/203648124?colourWayId=203648141&cid=16691",
      ProductName: "ASOS DESIGN shirt in aztec stripe print",
      price: 27,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-shirt-in-aztec-stripe-print/203648124-1-multi?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    },
    {
      productLink: "https://www.asos.com/asos-design/asos-design-2-pack-slim-linen-shorts-in-khaki-and-beige/prd/203382493?colourWayId=203382495&cid=16691",
      ProductName: "ASOS DESIGN 2 pack slim linen shorts in khaki and beige",
      price: 48,
      sellingFastBadge: "Selling fast",
      productImage: "https://images.asos-media.com/products/asos-design-2-pack-slim-linen-shorts-in-khaki-and-beige/203382493-1-seaturtroastedcash?$n_480w$&wid=476&fit=constrain",
      saleAmount: "",
      productDeal: "",
      productBadge: ""
    }
  ]
  
  return (
    <Box className='Container' backgroundColor="white">
      <Box className="headBox" h="80px" >
        <Heading fontSize="25px" >Bestsellers clothing</Heading>
      </Box>
      <SimpleGrid display={{base:"none", md:"grid"}} columns={{md:4,lg:5,xl:6}} spacing="20px" className='sortBox' p={{base:"10px", md:"20px"}}>
        <Menu>
          <MenuButton transition='all 0.2s' className='menubutton' w="100%" p="10px 20px">
            <Flex justifyContent="space-between">
              <Text>Sort</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius='none'>
            <MenuItem>Recommended</MenuItem>
            <MenuItem>What's New</MenuItem>
            <MenuItem>Price high to low</MenuItem>
            <MenuItem>Price low to high</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton transition='all 0.2s' className='menubutton' w="100%" p="10px 20px">
            <Flex justifyContent="space-between">
              <Text>Category</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius='none' >
            <MenuItem>Suits & Tailoring(310)</MenuItem>
            <MenuItem>Jeans & Trousers(185)</MenuItem>
            <MenuItem>Tops(180)</MenuItem>
            <MenuItem>Outerwear(83)</MenuItem>
            <MenuItem>Knitwear & Sweats(75)</MenuItem>
            <MenuItem>Shorts(18)</MenuItem>
            <MenuItem>All in ones(1)</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton transition='all 0.2s' className='menubutton' w="100%" p="10px 20px">
            <Flex justifyContent="space-between">
              <Text>Price Range</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList p="20px" >
            <Box>
              <Text>Min : {min}</Text>
              <Text>Max : {max}</Text>
            </Box>
          <RangeSlider
            aria-label={['min', 'max']}
            colorScheme='blue'
            min={0} max={1000}
            defaultValue={[300, 800]}
            onChangeEnd={(val) =>{setMin(val[0]); setMax(val[1])}}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton transition='all 0.2s' className='menubutton' w="100%" p="10px 20px">
            <Flex justifyContent="space-between">
              <Text>Product Type</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius='none' >
            <MenuItem>Suit Jackets(191)</MenuItem>
            <MenuItem>Suit Pants(155)</MenuItem>
            <MenuItem>Shirts(144)</MenuItem>
            <MenuItem>Pants(94)</MenuItem>
            <MenuItem>Jackets(63)</MenuItem>
            <MenuItem>Jeans(39)</MenuItem>
            <MenuItem>Sweatpants(31)</MenuItem>
            <MenuItem>Sweaters(30)</MenuItem>
            <MenuItem>T-shirts(29)</MenuItem>
            <MenuItem>Suit vests(22)</MenuItem>
            <MenuItem>Chinos(21)</MenuItem>
            <MenuItem>Hoodies(20)</MenuItem>
            <MenuItem>Blazers(20)</MenuItem>
            <MenuItem>Shorts(18)</MenuItem>
            <MenuItem>Sweatshirts(18)</MenuItem>
            <MenuItem>Coats(17)</MenuItem>
            <MenuItem>Cardigans(6)</MenuItem>
            <MenuItem>Polo Shirts(5)</MenuItem>
            <MenuItem>Vests(3)</MenuItem>
            <MenuItem>tank tops(2)</MenuItem>
            <MenuItem>Fleeces(1)</MenuItem>
            <MenuItem>Tracksuits(1)</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton transition='all 0.2s' className='menubutton' w="100%" p="10px 20px">
            <Flex justifyContent="space-between">
              <Text>Color</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius='none' >
            <MenuItem>Dark(210)</MenuItem>
            <MenuItem>Light(245)</MenuItem>
            <MenuItem>Tranding</MenuItem>
            <MenuItem>Royal(150)</MenuItem>
            <MenuItem>Classic(165)</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton transition='all 0.2s' className='menubutton' w="100%" p="10px 20px">
            <Flex justifyContent="space-between">
              <Text>Style</Text>
              <ChevronDownIcon />
            </Flex>
          </MenuButton>
          <MenuList borderRadius='none' >
            <MenuItem>Skinny(199)</MenuItem>
            <MenuItem>Regular(153)</MenuItem>
            <MenuItem>Slim(110)</MenuItem>
            <MenuItem>Oversized(61)</MenuItem>
            <MenuItem>Super Skinny(60)</MenuItem>
            <MenuItem>Other(41)</MenuItem>
            <MenuItem>Tapered(29)</MenuItem>
            <MenuItem>Wide Leg(28)</MenuItem>
            <MenuItem>Relaxed(27)</MenuItem>
            <MenuItem>Cargo Pants(25)</MenuItem>
            <MenuItem>Muscle(16)</MenuItem>
            <MenuItem>Puffer(15)</MenuItem>
            <MenuItem>Bomber Jacket(13)</MenuItem>
            <MenuItem>Shackets(13)</MenuItem>
            <MenuItem>Overshirts(9)</MenuItem>
            <MenuItem>Straight Leg(9)</MenuItem>
            <MenuItem>Tuxedo(9)</MenuItem>
          </MenuList>
        </Menu>
      </SimpleGrid>
      <Accordion display={{base:"flex", md:"none"}} className='sortBox' allowToggle>
          <AccordionItem width="50%" borderBottom="1px solid #ddd" >
            <h2>
              <AccordionButton>
                <Box as="span" textAlign='left'>
                  Sort
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box p="5px 0px"><Link >Recommended</Link></Box>
              <hr />
              <Box p="5px 0px"><Link >What's New</Link></Box>
              <hr />
              <Box p="5px 0px"><Link >Price high to low</Link></Box>
              <hr />
              <Box p="5px 0px"><Link >Price low to high</Link></Box>
              <hr />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem width="50%" >
            <h2>
              <AccordionButton>
                <Box as="span" textAlign='left'>
                  Filter
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box p="5px 0px"><Link >Lorem ipsum dolor sit amet, consectetur</Link></Box>
              <hr />
              <Box p="5px 0px"><Link >Lorem ipsum dolor sit amet, consectetur</Link></Box>
              <hr />
              <Box p="5px 0px"><Link >Lorem ipsum dolor sit amet, consectetur</Link></Box>
              <hr />
              <Box p="5px 0px"><Link >Lorem ipsum dolor sit amet, consectetur</Link></Box>
              <hr />
              <Box p="5px 0px"><Link >Lorem ipsum dolor sit amet, consectetur</Link></Box>
              <hr />
              <Box p="5px 0px"><Link >Lorem ipsum dolor sit amet, consectetur</Link></Box>
              <hr />
            </AccordionPanel>
          </AccordionItem>
      </Accordion>
      <Box textAlign="center" fontSize={{base:"10px",md:"12px"}} p={{base:"10px", md:"20px"}} >
        <Text>{data.length} styles found</Text>
      </Box>
      <SimpleGrid columns={{base:2,sm:3,lg:4}} spacing="10px" >
        {data.map((el)=>(
          <Box key={el.price} pb="10px">
            <Box position="relative" >
              <Image src={el.productImage} alt='Products' w="100%" />
              <Box backgroundColor="white" fontSize={{base:"10px", sm:"11px", md:"12px"}} p="3px 8px" color="red" position="absolute" top="20px"  >
                  <Text>{el.productDeal}</Text>
              </Box>
              <Box className='tag' right="0%" bottom={{base:"20%", md:"15%"}} fontSize={{base:"9px", sm:"11px", md:"13px",lg:"14px"}} >
                  <Text>SELLING FAST</Text>
              </Box>
              <Box position="absolute" right="1%" bottom="2%" fontSize={{base:"12px", md:"14px",lg:"15px"}} className='heart' >
                <FaRegHeart />
              </Box>
            </Box>
            <Text className='productName' fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.ProductName}</Text>
            <Text className='productName' fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.name}</Text>
            <Flex>
              <Text fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(100, 100, 100)" className='mainPrice'>${el.saleAmount?el.saleAmount:el.price}.00</Text>
              <Text p="0px 15px 0px 5px" textDecoration="line-through" fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(255, 0, 85)" >{el.saleAmount?"$"+el.price+".00":null}</Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default MensProducts