import * as types from './actionTypes';
import { postApi } from '../api/PostApi';

export function loadPostsSuccess(posts) {
    return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function createPostSuccess(post) {
    return { type: types.CREATE_POST_SUCCESS, post };
}

export function loadPosts() {
    return (dispatch) => {
        return postApi.getPosts().then((posts) => {
            dispatch(loadPostsSuccess(posts));
        }).catch((error) => {
            throw error;
        });
    };
}

export function createPost(post) {
    return (dispatch) => {
        return postApi.addPost(post).then((post) => {
            dispatch(createPostSuccess(post));
        }).catch((error) => {
            throw error;
        });
    };
}