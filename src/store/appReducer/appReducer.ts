const SHOW_MESSAGE = 'SHOW_MESSAGE'
const HIDE_MESSAGE = 'HIDE_MESSAGE'

const initialState = {
   message: null
};

export const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SHOW_MESSAGE:
         return { message: action.payload }
      case HIDE_MESSAGE:
         return { message: null }
      default:
         return { ...state, }
   }
}
export const showMessage = (message: string) => (dispatch) => {
   dispatch({ type: SHOW_MESSAGE, payload: message })
   setTimeout(() => {
      dispatch(hideMessage())
   }, 4000);
}
export const hideMessage = () => ({ type: HIDE_MESSAGE })