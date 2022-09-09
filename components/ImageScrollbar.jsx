import { useContext } from 'react';
import Image from 'next/image';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        fontSize="2xl"
        cursor="pointer"
        as={FaArrowAltCircleLeft}
        onClick={() => {
          scrollPrev();
        }}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        fontSize="2xl"
        cursor="pointer"
        as={FaArrowAltCircleRight}
        onClick={() => {
          scrollNext();
        }}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
    {data.map((image) => (
      <Box key={image.id} width="910px" itemID={image.id} overflow="hidden" p="1">
        <Image
          src={image.url}
          alt="property"
          placeholder="blur"
          blurDataURL={image.url}
          width={1000}
          height={500}
          sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;
