import { assert } from 'chai';
import { createStore, combineReducers } from 'redux';
import posts from '../reducers/postReducer';
import * as postActions from '../actions/postActions';

describe('Store', function () {
    it('Should handle creating posts', function () {
        const store = createStore(combineReducers({ posts }), { posts: [] });
       
        const post = {
            title: 'Post 1',
            content: 'Content 1'
        };
        const action = postActions.createPostSuccess(post);
        store.dispatch(action);

        const actual = store.getState().posts[0];
        assert.deepEqual(actual, post);
    });
});
