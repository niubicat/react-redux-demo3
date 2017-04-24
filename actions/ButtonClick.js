import * as types from '../constants/ActionTypes';

// export function FetchButtonClick(text) {
// 	return dispatch => {
// 		return dispatch(ButtonClick(text));
// 	};
// }

export function ButtonClick(text){
    return {
        type: types.BUTTON_CLICK,
        text: text,
    };
}