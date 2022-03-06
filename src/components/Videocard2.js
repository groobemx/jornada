import { Box, HStack, Text, VStack, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import moment from "moment";
import "moment/locale/es-mx";
import "./Videocard.css";

import ReactPlayer from "react-player/youtube";
import React from "react";
import Playermodal from "./Playermodal";
import useModalP from "../hooks/useModalP";
const Videocard2 = ({ video }) => {
  const [goo, setGoo] = useState(false);

  const { id } = useModalP({
    dominio: video.url,
  });

  return (
    <>
      <Box
        onClick={() => setGoo(true)}
        bg="#444444"
        w={320}
        borderRadius="lg"
        overflow="hidden"
      >
        <ReactPlayer
          light={true}
          width={320}
          height={180}
          url={video.url}
        ></ReactPlayer>
        <VStack alignItems={"center"}>
          <Box>
            <Text
              noOfLines={2}
              className="titulo"
              padding={4}
              fontSize="20px"
              color="white"
            >
              {video.title}
            </Text>
            <Text className="fecha" padding={4} color="GrayText">
              {moment(video.tiempo).format("LLL")}
            </Text>
          </Box>
          <Box>
            <HStack marginBottom={5}>
              {/* <Button size="xs" colorScheme="red">
                {video.tipo}
              </Button> */}
              <IconButton
                isRound
                colorScheme="whatsapp"
                variant="solid"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<FaEnvelope />}
              />
              <IconButton
                isRound
                variant="solid"
                colorScheme="facebook"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<FaFacebookF />}
              />
              <IconButton
                isRound
                variant="solid"
                colorScheme="twitter"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<FaTwitter />}
              />
              <IconButton
                isRound
                variant="solid"
                colorScheme="red"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<FaInstagram />}
              />
            </HStack>
          </Box>
        </VStack>
      </Box>
      {goo && <Playermodal video_id={id} goo2={true}></Playermodal>}
    </>
  );
};
export default Videocard2;
