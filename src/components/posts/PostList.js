import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PostList extends Component {

    onDelete = id => {
        console.log('hit')
        this.props.delPost.bind(this, id)
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="card" key={post.id}>
                    <div className="content">
                        <div className="header">
                            {post.title}
                        </div>
                        <div className="ui divider"></div>
                        <div className="description">
                            {post.body}
                        </div>
                    </div>
                    <Link className="ui bottom attached button" to={`/posts/edit/${post.id}`}>
                        <i className="pencil icon"></i>
                        Edit
                    </Link>
                    <button className="ui bottom attached button" onClick={this.props.delPost.bind(this, post.id)}>
                        <i className="trash icon"></i>
                        Delete
                    </button>
                </div >
            )
        })
    }

    render() {
        return (
            <div>
                <div className="ui cards">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default PostList;