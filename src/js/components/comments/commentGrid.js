import React from 'react';
import UserComment from './userComment';

const CommentsGrid = ({ comments, loading }) => {
    return (
        <div className="gridContainer">
            {loading && <div>Loading...</div>}
            {comments.map( (comment, i) => 
                <UserComment key={`${comment.email}${i}`} comment={comment}/>
            )}
        </div>
    )
}

export default CommentsGrid;