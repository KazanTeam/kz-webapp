import React from "react";
import {connect} from "react-redux";
import UserForm from "./UserForm";
import {SubmissionError} from "redux-form";
import { Auth } from 'aws-amplify';

const mapDispatch = ({ user: { editUser, setUser } }) => ({
    editUser,
    setUser
});

class User extends React.Component {

    handleSubmit = (data) => {
        const { match: { params: { id } }, editUser } = this.props;
        try {
            editUser(data)
        }catch(error){
            throw new SubmissionError({_error: error.data})
        }
    };

    async componentDidMount() {
        const {setUser } = this.props;
        let user = await Auth.currentAuthenticatedUser();
        user.getUserAttributes(function(err, result) {
            let data = new Object();
            data.username = user.username;
            if (err) {
                console.log(err.message || JSON.stringify(err));
                return;
            }

            for ( let i = 0; i < result.length; i++) {
                var field_name = result[i].getName();
                switch (field_name){
                    case "email":
                        data.email = result[i].getValue();
                        break;
                    case "phone_number":
                        data.phoneNumber = result[i].getValue();
                        break;
                    case "nickname":
                        data.telegramUsername = result[i].getValue();
                        break;
                    default:
                        break;

                }
            }
            setUser(data);
        });
    }

    render() {
        const { match: { params: { id } } } = this.props;

        return (
            <UserForm onSubmit={this.handleSubmit} id={id}/>
        );
    }
}

export default connect(null, mapDispatch)(User);
