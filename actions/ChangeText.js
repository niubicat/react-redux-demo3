import * as types from '../constants/ActionTypes';

// export function FetchChangeText(text) {
// 	return dispatch => {
// 		return dispatch(ChangeText(text));
// 	};
// }

export function ChangeText(text) {
    return {
        type: types.CHANGE_TEXT,
        text: text,
    };
}