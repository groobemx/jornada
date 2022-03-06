import React, { useState } from "react";
import {
  SimpleGrid,
  Grid,
  GridItem,
  Button,
  Center,
  Box,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import "./Estados.css";
import Videocard2 from "./Videocard2";
import useVideos from "../hooks/useVideos";
import Carousel from "nuka-carousel";
const Estados = () => {
  const [limit, setLimit] = useState(6);

  const { videos } = useVideos({
    tipo: "mundo",
    limit: limit,
  });

  console.log(videos);
  return (
    <div id="estados" className="fondo">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colStart={3} colSpan={1}>
          <Center>
            <Box marginTop={50} marginBottom={10}>
              <Text className="catego">ESTADOS</Text>
            </Box>
          </Center>
        </GridItem>
      </Grid>
      <Carousel
        autoplay
        withoutControls={true}
        wrapAround={true}
        slidesToShow={5}
        transitionMode={"scroll"}
        // defaultControlsConfig={{
        //   nextButtonText: ">",
        //   prevButtonText: "<",
        //   pagingDotsStyle: {
        //     fill: "",
        //     width: "40px",
        //     height: "40px",
        //   },
        // }}
      >
        {videos?.map((video) => (
          <React.Fragment key={video.id}>
            <Videocard2 video={video} />
          </React.Fragment>
        ))}
      </Carousel>
    </div>
  );
};

export default Estados;
