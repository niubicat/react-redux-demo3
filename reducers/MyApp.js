import * as types from '../constants/ActionTypes';

const initialState = {
    text: 'Hello'
}
export default function myApp(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_TEXT:
            return Object.assign({}, state, {
                text:state.text=='Hello'?'Stark':'Hello'
            });
        case types.BUTTON_CLICK:
            return Object.assign({}, state, {
                text: 'You just click button'
            });
        default:
          return {
            text:'Hello'
        };
    }
}