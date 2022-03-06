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
import "./Mundo.css";
import Videocard2 from "./Videocard2";
import useVideos from "../hooks/useVideos";
const Mundo = () => {
  const [limit, setLimit] = useState(4);
  const [pos1, setPos1] = useState(false);
  const toggleChecked = () => setPos1((value) => !value);

  const { videos } = useVideos({
    tipo: "mundo",
    limit: limit,
  });

  console.log(videos);
  return (
    <div id="mundo" className="fondo">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colStart={3} colSpan={1}>
          <Center>
            <Box marginTop={50} marginBottom={10}>
              <Text className="catego">MUNDO</Text>
            </Box>
          </Center>
        </GridItem>
        <GridItem colStart={5} colSpan={1}>
          <ButtonGroup
            marginTop={50}
            marginBottom={10}
            size={"lg"}
            className="botonesjuntos"
            isAttached
          >
            {pos1 === false && (
              <>
                <Button backgroundColor={"#353535"} color="red">
                  Lo más reciente
                </Button>
                <Button
                  onClick={() => {
                    setLimit(6);
                    setPos1(true);
                  }}
                  backgroundColor={"#2c2c2c"}
                  color="GrayText"
                >
                  Mostrar más
                </Button>
              </>
            )}
            {pos1 && (
              <>
                <Button
                  onClick={() => {
                    toggleChecked();
                    setLimit(5);
                  }}
                  backgroundColor={"#2c2c2c"}
                  color="GrayText"
                >
                  Lo más reciente
                </Button>
                <Button backgroundColor={"#353535"} color="red">
                  Mostrar más
                </Button>{" "}
              </>
            )}
          </ButtonGroup>
        </GridItem>
      </Grid>
      <SimpleGrid columns={5} spacing={10}>
        {videos?.map((video) => (
          <React.Fragment key={video.id}>
            <Videocard2 video={video} />
          </React.Fragment>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Mundo;
