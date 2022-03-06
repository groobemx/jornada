import getVideoId from "get-video-id";

const useModalP = ({ dominio }) => {
  // getVideoId(dominio);
  //=> { id: '8rSH8-pbHZ0', service: 'youtube' }

  const { id } = getVideoId(dominio);
  //=> '8rSH8-pbHZ0'

  return {
    id,
  };
};
export default useModalP;
