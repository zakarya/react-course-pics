import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID pDa0rNkOAQZ0U2_HgV-GH7eYoxGGf5VvaDFN-tLH2OM",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
