import { Box, HStack, Text, Divider, Select } from "@chakra-ui/react";

import "./Videocard.css";
import React from "react";
import "moment/locale/es-mx";
import { useState } from "react";

import useVideos from "../hooks/useVideos";
import VideoCard3 from "./VideoCard3";
const VideoList = () => {
  const [limit, setLimit] = useState(5);
  const [value, setValue] = useState("mundo");
  const { videos } = useVideos({
    tipo: value,
    limit: limit,
  });

  return (
    <>
      <Box
        className="list"
        width={480}
        bg="#444444"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box bg="#000">
          <HStack spacing={150}>
            <Text padding={4} className="titu2">
              {" "}
              Lo más Visto
            </Text>
            <Select
              onChange={(e) => setValue(e.target.value)}
              bg="#808080"
              borderColor="transparent"
              color="white"
              w={"200px"}
              size={"sm"}
              fontFamily="Oswald"
              placeholder="TODO"
            >
              <option
                style={{
                  backgroundColor: "#808080",
                  color: "white",
                  fontFamily: "Oswald",
                }}
                value="politica"
              >
                POLÍTICA
              </option>
              <option
                style={{
                  backgroundColor: "#808080",
                  color: "white",
                  fontFamily: "Oswald",
                }}
                value="economia"
              >
                ECONOMÍA
              </option>
              <option
                style={{
                  backgroundColor: "#808080",
                  color: "white",
                  fontFamily: "Oswald",
                }}
                value="mundo"
              >
                MUNDO
              </option>
            </Select>
          </HStack>
        </Box>
        <Box className="scroller">
          {videos?.map((video) => (
            <Box key={video.id}>
              <VideoCard3 video={video} />
              <Divider
                colorScheme={"whiteAlpha"}
                orientation="horizontal"
              />{" "}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default VideoList;
