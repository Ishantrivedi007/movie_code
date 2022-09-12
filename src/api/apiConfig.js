const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4e353b14f43997c0c803a36b5de45a72",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
