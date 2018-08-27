import React from 'react';
import { orderBy, escapeRegExp } from 'lodash';
import CommentForm from './comments/commentForm';
import CommentGrid from './comments/commentGrid';
import { getComments } from '../lib/api';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: '',
            comments: [],
            loading: true
        };
    }

    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const data = await getComments();
            this.setState({ comments: data, loading: false });
        } catch (err) {
            console.error(err);
        }
    }

    onInputChange = e => {
        this.setState({ filterValue: e.target.value });
    };

    getFilteredComments = () => {
        const { filterValue, comments } = this.state;
        return comments.filter(comment => {
            const { email } = comment;
            const reg = new RegExp(escapeRegExp(filterValue), 'i');
            return reg.test(email);
        });
    }
    
    onCommentsAdd = comment => {
        const { comments } = this.state;
        const newComments = [...comments, comment];
        this.setState({ comments: newComments });
    }

    render() {
        const { loading, filterValue } = this.state;
        const filteredComments = this.getFilteredComments();
        const comments = orderBy(filteredComments, 'createdAt', 'desc');

        return (
            <div className="appContainer">
                <CommentForm onCommentsAdd={this.onCommentsAdd} />
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Filter"
                    value={filterValue}
                    onChange={this.onInputChange}
                />
                <CommentGrid loading={loading} comments={comments} />
            </div>
        );
    }
}

export default App;
