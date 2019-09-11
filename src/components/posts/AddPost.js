import React, { Component } from 'react';

class AddPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    handleChange = e => {
        e.persist();
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                [e.target.name]: e.target.value
            }
        }));
    }

    onSubmit = () => {
        console.log('HIT')
        this.props.addPost.bind(this, this.state.post)
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>
                            Title
                        </label>
                        <input type="text" name="title" placeholder="This is the title" value={this.state.post.title} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="field" >
                        <label>Text</label>
                        <textarea value={this.state.post.body} name="body" placeholder="Say something..." onChange={this.handleChange.bind(this)} ></textarea>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPost;