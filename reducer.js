const initialState = {
  hello: "Hello World",
  movieList: { title: "", description: "", moveis: [] }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    /* テキストエリアの内容を state.helloに保存する */
    case 'HELLO_WORLD':
      return {
        ...state,
        hello: action.hello
      };
    
    /* ムービー情報をJSONで取得したものを state.movieListに保存する */
    case 'MOVIE_LIST':
      return {
        ...state,
        movieList: action.movieList
      };

    default:
      return state
  }
}