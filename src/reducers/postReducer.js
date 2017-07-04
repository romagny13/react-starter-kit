import * as types from '../actions/actionTypes';

// reducer example
export default function postReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return action.posts;
        case types.CREATE_POST_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.post)
            ];
        default:
            return state;
    }
}
