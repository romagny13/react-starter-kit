import { assert } from 'chai';
import * as postActions from './postActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// sync action
describe('Post Actions', () => {
    describe('createPostSuccess', () => {
        it('should create a CREATE_POST_SUCCESS action', () => {
            const post = { title: 'Post 1', content: 'Content 1' };
            const action = postActions.createPostSuccess(post);

            assert.deepEqual(action, {
                type: types.CREATE_POST_SUCCESS,
                post
            });
        });
    });
});


// async
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
describe('Get Actions', () => {
    it('should create LOAD_POSTS_SUCCESS when loading posts', (done) => {
        const store = mockStore({ posts: [] });

        store.dispatch(postActions.loadPosts())
            .then(() => {
                const actions = store.getActions();
                assert.equal(actions[0].type, types.LOAD_POSTS_SUCCESS);
                done();
            });
    });
});