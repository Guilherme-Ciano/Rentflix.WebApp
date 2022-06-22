import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

export default function Navbar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position={"fixed"}
        width="100%"
        bg={useColorModeValue("transparent", "gray.900")}
        px={4}
        color={useColorModeValue("white", "white")}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Text
              color={useColorModeValue("#F4AC45", "white")}
              fontWeight={"bold"}
              fontSize={"lg"}
              onClick={() => (window.location.href = "/")}
              cursor={"pointer"}
            >
              Rentflix
            </Text>
          </HStack>
          <Flex alignItems={"center"}>
            <div className="buttons">
              <Button
                borderColor={"#F4AC45"}
                borderWidth={"2px"}
                color={"#F4AC45"}
                variant="outline"
                width={{
                  base: "50%",
                }}
                _hover={{
                  bg: "#F4AC45",
                  color: "black",
                }}
                onClick={() => (window.location.href = "/sign-up")}
              >
                Cadastre-se
              </Button>

              <Button
                backgroundColor={"#F4AC45"}
                variant="solid"
                width={{
                  base: "50%",
                }}
                _hover={{
                  bg: "#F4AC45",
                  color: "black",
                }}
                onClick={() => (window.location.href = "/sign-in")}
              >
                Entrar
              </Button>
            </div>
          </Flex>
        </Flex>
      </Box>

      {children}
    </>
  );
}
