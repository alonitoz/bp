import React from 'react';
import { postComment } from '../../lib/api';


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            error: ''
        };
    }

    inputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { email, message } = this.state;
        const { onCommentsAdd } = this.props;
        try {
            const data = await postComment(email, message);
            onCommentsAdd(data);
            this.setState({ email: '', message: '', error: '' });
        } catch (ex) {
            this.setState({ error: 'Email or message is not valid' });
        }
    };

    render() {
        const { email, message, error } = this.state;

        return (
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.inputChange}
                        value={email}
                    />
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Message"
                        onChange={this.inputChange}
                        value={message}
                    />
                    <div id="btnSection">
                        <span id="errSpan">{error}</span>
                        <button> SUBMIT </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;
