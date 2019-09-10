import React, { Component } from 'react';
// api
import jsonPlaceholder from '../api/jsonPlaceholder'
// components
import PostList from './posts/PostList'
import MenuHeader from './MenuHeader'

class App extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        jsonPlaceholder.get('/posts').then(res => {
            this.setState({ posts: res.data.slice(0, 10) })
            console.log(this.state.posts);
        })
    }

    onDelete = id => {
        jsonPlaceholder.delete(`/posts/${id}`).then(res => {
            this.setState({ posts: [...this.state.posts.filter(post => post.id !== id)] })
        })
    }

    render() {
        return (
            <div>
                <MenuHeader />
                <div className="ui container">
                    <PostList posts={this.state.posts} delPost={this.onDelete} />
                </div>
            </div>
        );
    }
}

export default App;