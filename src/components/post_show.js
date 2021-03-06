import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';


class PostShow extends Component {

    componentDidMount() {
        if (!this.props.post) {
            this.props.fetchPost(this.props.match.params.id);
        }
    }

    onDeleteClick() {
        const id = this.props.match.params.id;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading</div>
        }

        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li style={{width: '100%'}}>
                            <Link to="/">Back to index</Link>
                            <button
                                className="btn btn-sm btn-danger float-right"
                                onClick={this.onDeleteClick.bind(this)}
                            >
                                Delete Post
                        </button>
                        </li>
                    </ol>
                </nav>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }, ownProps) => {
    return {
        post: posts[ownProps.match.params.id],
    }
};

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
