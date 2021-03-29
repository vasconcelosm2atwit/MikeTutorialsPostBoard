import React from 'react'
import {Link} from 'react-router-dom'

function CreatePostButton() {
    return (
        <React.Fragment> {/** React.fragment substitute div without making it a div*/}
            <Link to="/CreatePost" className="btn btn-lg btn-info">
                            Create a Post
            </Link>
        </React.Fragment>
    )
}

export default CreatePostButton
