import React, { useState,useEffect } from "react";
import PropTypes from "prop-types"
import {useDispatch, useSelector} from 'react-redux';
import { createAPost } from "../../actions/postActions"
import classnames from "classnames";
import { useHistory } from "react-router";

function CreatePost() {

    const [postData,setpostData] = useState({
        id: "",
        title: "",
        description: ""
    })

    const postError = useSelector( state => state.errors);
    const history = useHistory();
    const dispatch = useDispatch();

    {/** adding the values to the postData, */}
    const onChange = (e) => {
        setpostData((values) => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    }
    {/** adding the values to the submit form */}
    const onSubmit = (e) => {
        {/** Stops the page from updating */}
        e.preventDefault() 
        if(!postError)
          dispatch(createAPost(postData,history));
    }

  return (
    <div className="register">
      
      <div className="container">
      
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Create New Post</h5>
            <hr />
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg ",{
                    "is-invalid" : postError.title
                  })}
                  placeholder="Post title"
                  name ="title"
                  value = {postData.title} 
                  onChange = {e => onChange(e)} // Handles OnChange

                />
                {postError.title && (
                  <div className="invalid-feedback">{postError.title}</div>
                )}
              </div>

              <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": postError.description
                      })}
                      placeholder="Post Description"
                      name="description"
                      value={postData.description}
                      onChange={e => onChange(e)}
                    />
                    {postError.description && (
                      <div className="invalid-feedback">
                        {postError.description}
                      </div>
                    )}
                  </div>
              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

CreatePost.propTypes = {
    createAPost: PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired
  }
  

export default CreatePost;
