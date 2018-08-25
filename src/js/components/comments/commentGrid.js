import React from 'react';
import md5 from 'md5';
import axios from 'axios';
import UserComment from './userComment';
const commentUrl = "http://localhost:9999/api/v1/comments";

class CommentGrid extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            commentsList:[]
        }
        this.dispayComments = this.dispayComments.bind(this);
    }

    async componentDidMount(){
        try{
            const response = await axios.get(commentUrl);
            this.setState({commentsList: response.data});
        }catch(err){
            console.error(err);
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.newComment!=this.props.newComment){
            let newCommentsArr = this.state.commentsList;
            newCommentsArr.push(this.props.newComment);
            this.setState({commentsList: newCommentsArr});
        }
    }

    dispayComments(){
        return this.state.commentsList.map((item)=>{
            if(item.email.indexOf(this.props.searchVal)>-1){
                return <UserComment email={item.email} msg={item.message}/>
            }
        })
    }

    render(){
        return (
            <div className="gridContainer">
                { this.dispayComments() }
            </div>
        )
    }
}

export default CommentGrid;