import React from 'react';
import axios from 'axios';
const commentUrl = "http://localhost:9999/api/v1/comments"


class CommentForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            message: '',
            error: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    async handleSubmit(e){
        e.preventDefault();
        const { email, message } = this.state;
        try{
            const response = await axios.post(commentUrl, {email, message});
            this.setState({email: '', message:'', error: ''});
            this.props.onFormSubmit(response.data);
        }catch(err){
            this.setState({error: 'wrong credentials'})
            console.error(err);
        }
    }

    render(){
        return (
            <div className="formContainer">
                <form method="POST" onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="Email" onChange={this.inputChange} value={this.state.email}/>
                    <textarea type="text" name="message" placeholder="Message"  onChange={this.inputChange} value={this.state.message} />
                    <div id="btnSection">
                        <span id="errSpan">{this.state.error}</span>
                        <button> SUBMIT </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentForm;