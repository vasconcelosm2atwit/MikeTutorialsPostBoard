import React from "react";
import { Link } from "react-router-dom";

function PostList(props) {

  const { post } = props;

  return (
    // <!-- Project Item Component -->
    <div class="container">
      <div class="card card-body bg-light mb-3">
        <div class="row">
          <div class="col-2">
            <span class="mx-auto">{props.post.id}</span>
          </div>
          <div class="col-lg-6 col-md-4 col-8">
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <ul class="list-group">
              <a href="#">
                <li class="list-group-item board">
                  <i class="fa fa-flag-checkered pr-1"> View Post </i>
                </li>
              </a>
              <Link to = {`/UpdatePostClass/${post.id}`} >
                <li class="list-group-item update">
                  <i class="fas fa-bookmark">  Save</i>
                </li>
              </Link>
              <a href="">
                <li class="list-group-item share">
                  <i class="fas fa-share-alt">  Share</i>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
