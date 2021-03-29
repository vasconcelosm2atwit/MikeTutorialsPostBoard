import React, {useState,useEffect} from 'react'
import CreatePostButton from './Project/CreatePostButton'
import PostList from './Project/PostList'
import {getPosts} from "../actions/postActions";
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from "prop-types"

function Dashboard() {
    const allPosts = useSelector(state => state.postList)
    const dispatch = useDispatch()

    const {post, posts } = allPosts


    useEffect( () => {
        dispatch(getPosts())

    },[dispatch])


    return (
        <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Tutorials and Tech News</h1>
                    <br />
                    <CreatePostButton></CreatePostButton>
                    <br />
                    <hr />
                    { posts.map( (p) => 
                    <PostList post = {p}></PostList>
                        
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}

Dashboard.propTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
}

export default Dashboard;
