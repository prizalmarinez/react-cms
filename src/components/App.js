import React, { Component } from 'react';
// css
import './App.css';
// router
import { BrowserRouter, Route } from "react-router-dom";
// api
import jsonPlaceholder from '../api/jsonPlaceholder'
// components
import MenuHeader from './MenuHeader'
// post components
import PostList from './posts/PostList'
import AddPost from './posts/AddPost'
import EditPost from './posts/EditPost'

class App extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        jsonPlaceholder.get('/posts').then(res => {
            this.setState({ posts: res.data.slice(0, 10) })
        })
    }

    onDelete = id => {
        jsonPlaceholder.delete(`/posts/${id}`).then(_ => {
            this.setState({ posts: [...this.state.posts.filter(post => post.id !== id)] })
        })
    }

    onAdd = value => {
        console.log(value)
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <MenuHeader />
                    <div className="ui container mt-100">
                        <Route path='/' exact
                            render={() => <PostList
                                posts={this.state.posts}
                                delPost={this.onDelete}
                            />}
                        />
                        <Route path='/posts/new'
                            render={() => <AddPost
                                addPost={this.onAdd}
                            />}
                        />
                        <Route path='/posts/edit/:id' component={EditPost} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;