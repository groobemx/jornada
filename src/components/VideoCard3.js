import { Box, HStack, Text } from "@chakra-ui/react";

import "moment/locale/es-mx";
import "./Videocard.css";

import ReactPlayer from "react-player/youtube";
import React from "react";

const Videocard3 = ({ video }) => {
  return (
    <>
      <Box padding={4} bg="#444444" borderRadius="lg" overflow="hidden">
        <HStack>
          <Box>
            <ReactPlayer
              light={true}
              width={160}
              height={110}
              url={video.url}
            ></ReactPlayer>
          </Box>
          <Box>
            <Text
              className="listtipe"
              padding={4}
              fontSize="20px"
              color="white"
            >
              {video.tipo}
            </Text>
            <Text className="listtitle" noOfLines={2} color="GrayText">
              {video.title}
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};
export default Videocard3;
