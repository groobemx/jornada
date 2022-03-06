import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
const Playermodal = ({ video_id, goo2 }) => {
  const [isOpen, setOpen] = useState(goo2);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={video_id}
        onClose={() => setOpen(false)}
      />
    </React.Fragment>
  );
};
export default Playermodal;
