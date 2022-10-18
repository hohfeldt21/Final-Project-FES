const API_KEY = "9becca1cf40cd1079c159dc0d7dc1c74";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `https://api.themoviedb.org/3movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
