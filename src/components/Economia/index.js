import React from "react";

import {
  EconomiaContainer,
  EconomiaH1,
  EconomiaWrapper,
  EconomiaCard,
} from "./EconomiaElements";
import "../Videocard.css";
import Videocard2 from "../Videocard2";
import useVideos from "../../hooks/useVideos";
const Economia = () => {
  const { videos } = useVideos({
    tipo: "economia",
    limit: 5,
  });
  return (
    <EconomiaContainer id="economia">
      <EconomiaH1> ECONOMÍA</EconomiaH1>
      <EconomiaWrapper>
        {videos?.map((video) => (
          <EconomiaCard key={video.id}>
            <Videocard2 video={video} />
          </EconomiaCard>
        ))}
      </EconomiaWrapper>
    </EconomiaContainer>
  );
};

export default Economia;
