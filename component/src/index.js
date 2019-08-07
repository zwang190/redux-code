import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author='Sam' timeAgo='13:39pm' content="Nice blog post" avatar={faker.image.avatar()}/>
            <CommentDetail author='John' timeAgo='13:00pm' content="Nice blog post" avatar={faker.image.avatar()}/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
