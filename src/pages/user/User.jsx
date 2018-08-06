import React from "react";
import {connect} from "react-redux";
import UserForm from "./UserForm";
import {SubmissionError} from "redux-form";
import UserService from "../../services/UserService";
import {select} from '@rematch/select'
import {dispatch} from '@rematch/core'
import {push} from "react-router-redux";
const mapDispatch = ({ user: { editUser, setUser } }) => ({
    editUser,
    setUser
});

const mapStateToProps = state => ({
  user: select.app.getUserAttributes(state)
});

class User extends React.Component {

    handleSubmit = async (data) => {
        const { editUser } = this.props;
        try {
            await editUser(data);
            return dispatch(push("/users/profile"))
        }catch(error){
            throw new SubmissionError({_error: error.data})
        }
    };

    async componentDidMount() {
        const {setUser } = this.props;
        if(!this.props.user) {
          const user = await UserService.currentUser();
          setUser(user);
        }
    }

    render() {
        const { match: { params: { id } } } = this.props;

        return (
            <UserForm onSubmit={this.handleSubmit} id={id} props={this.props}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatch)(User);
