import React, { useState } from 'react'
import "./Mens.css"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FaRegHeart } from "react-icons/fa";

const MensProducts = () => {

  const [min,setMin]=useState(300)
  const [max,setMax]=useState(800)
  console.log('min:', min)
  console.log('max:', max)
  let arr=[
    {
      image:"https://images.asos-media.com/products/jack-jones-originals-oversized-t-shirt-with-butterfly-back-print-in-gray/203817753-2?$n_320w$&wid=317&fit=constrain",
      name:"back print in gray",
      brif:"Jack & Jones Originals oversized t-shirt with butterfly",
      price:"26.51",
      strick:"12.22",
      dis:"-14%"
    },
    {
      image:"https://images.asos-media.com/products/jack-jones-originals-oversized-t-shirt-with-butterfly-back-print-in-gray/203817753-2?$n_320w$&wid=317&fit=constrain",
      name:"back print in gray",
      brif:"Jack & Jones Originals oversized t-shirt with butterfly",
      price:"26.52",
      strick:"",
      dis:"-14%"
    },
    {
      image:"https://images.asos-media.com/products/jack-jones-originals-oversized-t-shirt-with-butterfly-back-print-in-gray/203817753-2?$n_320w$&wid=317&fit=constrain",
      name:"back print in gray",
      brif:"Jack & Jones Originals oversized t-shirt with butterfly",
      price:"26.53",
      strick:"49.00",
      dis:"-14%"
    },
    {
      image:"https://images.asos-media.com/products/jack-jones-originals-oversized-t-shirt-with-butterfly-back-print-in-gray/203817753-2?$n_320w$&wid=317&fit=constrain",
      name:"back print in gray",
      brif:"Jack & Jones Originals oversized t-shirt with butterfly",
      price:"26.54",
      strick:"",
      dis:"-14%"
    },
    {
      image:"https://images.asos-media.com/products/jack-jones-originals-oversized-t-shirt-with-butterfly-back-print-in-gray/203817753-2?$n_320w$&wid=317&fit=constrain",
      name:"back print in gray",
      brif:"Jack & Jones Originals oversized t-shirt with butterfly",
      price:"26.55",
      strick:"49.00",
      dis:"-14%"
    }
  ]
  return (
    <Box className='Container' backgroundColor="white" >
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
      <SimpleGrid columns={{base:2,sm:3,lg:4}} spacing="10px" p={{base:"10px", md:"20px"}} >
        {arr.map((el)=>(
          <Box key={el.price} pb="10px">
            <Box position="relative" >
              <Image src={el.image} alt='Products' w="100%" />
              <Box backgroundColor="white" fontSize={{base:"10px", sm:"11px", md:"12px"}} p="3px 8px" color="red" position="absolute" top="20px"  >
                  <Text>{el.dis}</Text>
              </Box>
              <Box className='tag' right="0%" bottom={{base:"20%", md:"15%"}} fontSize={{base:"9px", sm:"11px", md:"13px",lg:"14px"}} >
                  <Text>SELLING FAST</Text>
              </Box>
              <Box position="absolute" right="1%" bottom="2%" fontSize={{base:"12px", md:"14px",lg:"15px"}} className='heart' >
                <FaRegHeart />
              </Box>
            </Box>
            <Text className='productName' fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.brif}</Text>
            <Text className='productName' fontSize={{base:"10px", sm:"11px", md:"12px"}} lineHeight={{base:"17px",md:"22px"}} >{el.name}</Text>
            <Flex>
              <Text p="0px 15px 0px 5px" textDecoration="line-through" fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(255, 0, 85)" >{el.strick!=""?"$"+el.strick:null}</Text>
              <Text fontSize={{base:"12px", sm:"13px", md:"14px"}} color="rgb(100, 100, 100)" className='mainPrice'>${el.price}</Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default MensProducts