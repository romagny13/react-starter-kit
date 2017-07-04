import { assert } from 'chai';
import postReducer from './postReducer';
import * as postActions from '../actions/postActions';

describe('Post reducer', () => {
    it('should add post on CREATE_POST_SUCCESS', () => {
        const initialState = [
            { title: 'Post 1', content: 'Content 1' },
            { title: 'Post 2', content: 'Content 2' }
        ];

        // action
        const newPost = { title: 'Post 3', content: 'Content 3' };
        const action = postActions.createPostSuccess(newPost);

        // reducer + new state
        const newState = postReducer(initialState, action);

        assert.equal(newState.length, 3);
        assert.deepEqual(newState[2], newPost);
    });
});