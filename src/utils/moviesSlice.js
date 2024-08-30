import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTeaser: null,
    popularMovies: null,
    topRatedMovies: null,
    searchedMovies:null,
  },
  reducers: {
    addTeaser: (state, action) => {
      state.nowPlayingTeaser = action.payload;
    },
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export const {addMovie,addPopularMovies,addTopRatedMovies,addTeaser,addSearchedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;

