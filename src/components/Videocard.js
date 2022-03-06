import { Box, HStack, Text, IconButton } from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import "./Videocard.css";
import ReactPlayer from "react-player/youtube";
import React from "react";
import moment from "moment";
import "moment/locale/es-mx";
import { useState } from "react";
import useModalP from "../hooks/useModalP";
import Playermodal from "./Playermodal";
const Videocard = ({ video }) => {
  const [isShown, setIsShown] = useState(false);
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
        h={320}
        borderRadius="lg"
        overflow="hidden"
      >
        <ReactPlayer
          light={true}
          width={320}
          height={180}
          url={video.url}
        ></ReactPlayer>
        <Box
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
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

          {isShown && (
            <Box>
              <HStack marginBottom={10}>
                {/* <Button size="xs" colorScheme="red">
                {video.tipo}
              </Button> */}
                <IconButton
                  isRound
                  colorScheme="red"
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
                  colorScheme="orange"
                  aria-label="Call Sage"
                  fontSize="20px"
                  icon={<FaInstagram />}
                />
              </HStack>
            </Box>
          )}
        </Box>
      </Box>{" "}
      {goo && <Playermodal video_id={id} goo2={true}></Playermodal>}
    </>
  );
};

export default Videocard;
