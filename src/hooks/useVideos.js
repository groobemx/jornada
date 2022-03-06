import { gql, useQuery } from "@apollo/client";

const GET_VIDEOS_QUERY = gql`
  query GetVideos($tipo: String!, $limit: Int = 1) {
    videos(
      order_by: { tiempo: desc }
      where: { tipo: { _eq: $tipo } }
      limit: $limit
    ) {
      id
      tipo
      tiempo
      title
      url
    }
  }
`;

const useVideos = ({ tipo, limit }) => {
  const {
    data: { videos } = {},
    loading: institucionLoading,

    error,
  } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      tipo: tipo,
      limit: limit,
    },
  });
  const loading = institucionLoading;
  if (error) {
    console.log("Error!", error);
  }

  return {
    videos,
    loading,
    error,
  };
};

export default useVideos;
