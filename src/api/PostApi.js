// fake api example
export class PostApi {
    constructor() {
        this._posts = [
            {
                id: 1,
                title: 'Post 1',
                content: 'Content 1'
            },
            {
                id: 2,
                title: 'Post 2',
                content: 'Content 2'
            }
        ];

    }
    getPosts() {
        return new Promise((resolve) => {
            resolve(this._posts);
        });
    }
    addPost(post) {
        return new Promise((resolve) => {
            post.id = this._posts.length + 1;
            this._posts.push(post);
            resolve(post);
        });
    }
}

export const postApi = new PostApi();
