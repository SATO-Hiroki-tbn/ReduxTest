import store from './store.js';

/* store.getState()の結果(state)を第一引数に、
 * Container componentへ渡されたpropsを第二引数にして呼び出される関数
 * stateとpropsを使って子のPresentational componentにpropsとして渡す値を生成する。
 */
export function mapStateToProps(state) {
  return state;
}

/* store.dispatchを第一引数にして呼び出される関数
 * 子のPresentational componentにpropsとして渡す値を生成する
 */
export function mapDispatchToProps(dispatch) {
  return {
    /* hello文字列を変更。変更後のstateを取得する */
    updateHello: (text) => {
      dispatch( {type: 'HELLO_WORLD', hello: text} );
    },

    /* movieListオブジェクトを変更。変更後のstateを取得する */
    updateMovieList: (movieList) => {
      dispatch( {type: 'MOVIE_LIST', movieList: movieList} );
    }
  }
}