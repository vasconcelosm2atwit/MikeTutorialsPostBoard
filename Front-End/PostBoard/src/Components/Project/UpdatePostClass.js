import React, { Component } from "react";
import { getPost, createAPost } from "../../actions/postActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdatePost extends Component {
  //set state
  constructor() {
    super();

    this.state = {
      id: "",
      title: "",
      description: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors){
        this.setState({ errors: nextProps.errors})
    }
    const {
      id,
      title,
      description,
    } = nextProps.post;

    this.setState({
      id,
      title,
      description
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const updatePost = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
    };

    this.props.createAPost(updatePost, this.props.history);
  }

  render() {
      const {errors} = this.state;
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create new Post</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ",{
                        "is-invalid" : errors.title
                      })}
                    placeholder="Post title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
      
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Post Description"
                    name="description"
                    onChange={this.onChange}
                    value={this.state.description}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdatePost.propTypes = {
  getPost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.postList.post,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getPost, createAPost }
)(UpdatePost);