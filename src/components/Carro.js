import ReactPlayer from "react-player/youtube";
import Carousel from "nuka-carousel";
import "./styles.css";
import useVideos from "../hooks/useVideos";
import { Box } from "@chakra-ui/react";
const Carro = () => {
  const { videos } = useVideos({
    tipo: "politica",
    limit: 5,
  });
  return (
    <>
      <Box>
        <Carousel
          autoplay
          wrapAround={true}
          slidesToShow={1}
          transitionMode={"fade"}
          defaultControlsConfig={{
            nextButtonText: ">",
            prevButtonText: "<",
            pagingDotsStyle: {
              fill: "red",
              width: "40px",
              height: "40px",
            },
          }}
        >
          {videos?.map((video) => (
            <Box key={video.id} video={video}>
              <ReactPlayer
                width={1500}
                height={720}
                controls
                url={video.url}
              ></ReactPlayer>
            </Box>
          ))}
        </Carousel>

        {/* <Carousel
        autoplay
        wrapAround="true"
        slidesToShow={1}
        transitionMode={"fade"}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "red",
            width: "40px",
            height: "40px",
          },
        }}
      >
        <ReactPlayer width={1500} height={720} controls url={video.url}></ReactPlayer>
      </Carousel> */}
      </Box>
    </>
  );
};
export default Carro;
