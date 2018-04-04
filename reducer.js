const initialState = {
  hello: "Hello World",
  count: 0
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    /* hello文字列を変更する */
    case 'HELLO_WORLD':
      return {
        ...state,
        hello: action.hello
      };

    default:
      return state
  }
}