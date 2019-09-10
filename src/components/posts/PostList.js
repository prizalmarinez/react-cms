import React, { Component } from 'react';

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
                    <div className="ui bottom attached button">
                        <i className="pencil icon"></i>
                        Edit
                    </div>
                    <button className="ui bottom attached button" onClick={this.props.delPost.bind(this, post.id)}>
                        <i className="trash icon"></i>
                        Delete
                    </button>
                </div>
            )
        })
    }

    render() {
        console.log(this.props.posts)

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