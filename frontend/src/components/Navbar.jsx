import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiCirclePlus, CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";



const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row"
      }}
      >

        <Text
        fontSize={{base:"22", sm:"28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"} //now the gradient n the bg wil only apply on the text 
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={3} alignItems={"center"}>
          <Link to={"/create"}>
          <Button >
            <CiCirclePlus fontSize={20}/>
          </Button>
         </Link>   
          <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <CiLight /> : <MdNightlight/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
