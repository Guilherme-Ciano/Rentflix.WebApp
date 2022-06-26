import React, { ReactNode, useEffect } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useDisclosure,
  Badge,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  Button,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiShoppingBag,
} from "react-icons/fi";
import { GoLock } from "react-icons/go";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import MovieGrid from "./movieGrid";
import { useSelector } from "react-redux";
import CartCard from "../components/cartCard";
import GlobalHandlers from "../services/handlers";
import API_Controller from "../services/api";
import userState from "../store/slices/userState";

const LinkItems = [
  { name: "Home", icon: FiHome, link: "/catalogue" },
  {
    name: "Adicionar filmes",
    icon: MdOutlineSlowMotionVideo,
    link: "/movies/new",
  },
  { name: "Administração", icon: GoLock, link: "/admin" },
];

export default function Catalogue({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const allFilmes = useSelector((state) => state.cartState.data);
  const { executeGetMovies } = API_Controller();

  useEffect(() => {
    executeGetMovies();
  }, []);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <MovieGrid movie={allFilmes.items} />
      </Box>
    </Box>
  );
}

const SidebarContent = (props) => {
  const { onClose, ...rest } = props;
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("#000000", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      color={useColorModeValue("white", "white")}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" color={"#F4AC45"} fontWeight="bold">
          Rentflix
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          color={"white"}
          onClick={() => (window.location.href = link.link)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#F4AC45",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const allFilmes = useSelector((state) => state.cartState.data);
  const userState = JSON.parse(localStorage.getItem("user"));

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("#000000", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      color={useColorModeValue("white", "white")}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontWeight="bold"
        color={"#F4AC45"}
      >
        Rentflix
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <div
          style={{
            position: "relative",
          }}
        >
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiShoppingBag />}
            color={"#F4AC45"}
            _hover={{
              bg: "#F4AC45",
              color: "white",
            }}
            onClick={() => setDrawerIsOpen(!drawerIsOpen)}
          />

          <Badge
            variant="subtle"
            colorScheme="red"
            position={"absolute"}
            top={"-5px"}
            zIndex={"90"}
            right={"-5px"}
            borderRadius={"full"}
          >
            {allFilmes.items.length > 0 ? allFilmes.items.length : ""}
          </Badge>
        </div>

        <MovieDrawer
          isOpenDrawer={drawerIsOpen}
          setDrawerIsOpen={setDrawerIsOpen}
        />

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{userState.nome}</Text>
                  <Text fontSize="xs" color="whitw">
                    Usuário
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <MenuItem onClick={() => (window.location.href = "/")}>
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

function MovieDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenDrawer, setDrawerIsOpen, children } = props;
  const allFilmes = useSelector((state) => state.cartState.data);
  const { executeRentCartMovie } = API_Controller();

  return (
    <Drawer
      isOpen={isOpenDrawer}
      placement="right"
      onClose={() => setDrawerIsOpen(false)}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Finalizar carrinho</DrawerHeader>

        <DrawerBody>
          {allFilmes.items.map((item) => {
            return <CartCard movie={item} />;
          })}
        </DrawerBody>

        <DrawerFooter>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button variant="outline" borderColor="red.400" color={"red.400"}>
              Cancelar
            </Button>
            <Button
              variant="outline"
              borderColor="#F4AC45"
              color={"#F4AC45"}
              onClick={() => executeRentCartMovie(allFilmes)}
            >
              Alugar
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
