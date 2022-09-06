import Link from 'next/link';
import {
  Box,
  Flex,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Realtor
      </Link>
    </Box>
    <Spacer />
    <Hide breakpoint="(max-width: 768px)">
      <Box p={2} fontWeight="bold">
        <Link href="/" passHref>
          Home
        </Link>
      </Box>
      <Box p={2} fontWeight="bold" paddingLeft="8">
        <Link href="/search" passHref>
          Search
        </Link>
      </Box>
      <Box p={2} fontWeight="bold" paddingLeft="8">
        <Link href="/search?purpose=for-rent" passHref>
          Rent
        </Link>
      </Box>
      <Box p={2} fontWeight="bold" paddingLeft="8">
        <Link href="/search?purpose=for-sale" passHref>
          Buy
        </Link>
      </Box>
    </Hide>
    <Show breakpoint="(max-width: 768px)">
      <Box>
        <Menu>
          <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Show>
  </Flex>
);

export default Navbar;
