import ReactPlayer from "react-player/youtube";
import "./Top.css";
import { Box, Center, HStack, Image } from "@chakra-ui/react";
import VideoList from "./VideoList";
import Carro from "./Carro";
const Top = () => {
  return (
    <>
      <Box id="top" className="fondos">
        <HStack>
          <Box width={1200}>
            <Carro />
          </Box>
          <VideoList></VideoList>
        </HStack>
      </Box>
    </>
  );
};
export default Top;
