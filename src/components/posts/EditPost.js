import React, { Component } from 'react';
import jsonPlaceholder from '../../api/jsonPlaceholder'

class EditPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        jsonPlaceholder.get(`/posts/${id}`).then(res => {
            this.setState({ post: res.data })
            console.log(this.state.post)
        })
    }

    handleChange = e => {
        // this.setState({ post: { ...this.state.post, [e.target.name]: e.target.value } });
        e.persist();
        // const value = e.target.value;
        this.setState(prevState => ({
            post: {
                ...prevState.post,
                [e.target.name]: e.target.value
            }
        }));
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { id } = this.props.match.params;
        jsonPlaceholder.get(`/posts/${id}`, this.state.post).then(res => {
            this.setState({ post: res.data })
            console.log('Successfull Update')
        })
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
                        <textarea value={this.state.post.body} name="body" onChange={this.handleChange.bind(this)} ></textarea>
                    </div>
                    <button className="ui button" type="submit">Update</button>
                </form>
            </div>
        );
    }
}

export default EditPost;