import React from 'react';
import CommentForm from './comments/commentForm';
import CommentGrid from './comments/commentGrid';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            lastComment: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e){
        this.setState({inputValue: e.target.value})
    }

    render() {
        let { inputValue } = this.state;
        const refreshApp = lastComment => { 
            console.log('the last comment is', lastComment)
            this.setState({ lastComment })
         } 
        return (
            <div className="appContainer">
                <CommentForm onFormSubmit={refreshApp}/>
                <input className="searchInput" type="text" placeholder="Filter" value={inputValue} onChange={this.onInputChange}/>
                <CommentGrid searchVal={inputValue} newComment={this.state.lastComment}/>
            </div>
        )
    }
}

export default App;