import React from "react";
import {connect} from "react-redux";
import UserForm from "./UserForm";
import {SubmissionError} from "redux-form";

const mapDispatch = ({ user: { editUser } }) => ({
    editUser
});

class User extends React.Component {

    handleSubmit = (data) => {
        const { match: { params: { id } }, editUser } = this.props;
        try {
            editUser(data)
        }catch(error){
            console.log(error.data);
            throw new SubmissionError({_error: error.data})
        }
    };

    render() {
        const { match: { params: { id } } } = this.props;

        return (
            <UserForm onSubmit={this.handleSubmit} id={id}/>
        );
    }
}

export default connect(null, mapDispatch)(User);
