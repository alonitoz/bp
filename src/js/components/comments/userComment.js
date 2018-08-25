import React from 'react';
import md5 from 'md5';


class UserComment extends React.Component{
    render(){
        const { email, msg } = this.props;
        const mdHash = md5(email);
        const imgUrl = `https://www.gravatar.com/avatar/${mdHash}?d=mp`;
        return (
            <div className="userCommentDiv">
                <img src={imgUrl} alt=""/>
                <div>
                    <div className="userEmail">
                        {email}
                    </div>
                    <div className="userMsg">
                        {msg}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserComment;