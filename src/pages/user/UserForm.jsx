import React from "react";
import PropTypes from "prop-types";

import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import {select} from '@rematch/select';
import {connect} from 'react-redux';

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Send from '@material-ui/icons/Send'
import Button from "components/CustomButtons/Button.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";

import compose from "recompose/compose";
import {Field, reduxForm} from "redux-form";

import 'react-phone-number-input/rrui.css'
import 'react-phone-number-input/style.css'
import PhoneNumber from 'react-phone-number-input'
import customRegisterPageStyled from './styled.jsx'
import renderCustomInput from "components/RenderCustomInput/RenderCustomInput";
import Danger from "components/Typography/Danger";

class UserForm extends React.Component {
    componentDidMount() {
        if(!this.props.id) {
            this.props.clear();
        }
    }

    render() {
        const { classes, handleSubmit, submitting, error } = this.props;
        return(
            <div>
                <GridContainer>
                    <ItemGrid xs={12} sm={12} md={8}>
                        <IconCard
                            icon={PermIdentity}
                            iconColor="rose"
                            title="My Profile - "
                            category="Complete your profile"
                            content={
                                <div>
                                    <form className={classes.form} onSubmit={handleSubmit}>
                                        <GridContainer justify="space-between">
                                            <div className={classes.center}>
                                                <Danger>{error}</Danger>
                                            </div>
                                            <ItemGrid xs={12} sm={12} md={6}>
                                                <Field
                                                    disabled
                                                    name="username"
                                                    component={renderCustomInput}
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className: classes.customFormControlClasses
                                                    }}
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start"
                                                                            className={classes.inputAdornment}
                                                            >
                                                                <Face className={classes.inputAdornmentIcon} />
                                                            </InputAdornment>
                                                        ),
                                                        placeholder: "Username",
                                                        disabled: true
                                                    }}
                                                />
                                            </ItemGrid>

                                            <ItemGrid xs={12} sm={12} md={6}>
                                                <Field
                                                    name="email"
                                                    component={renderCustomInput}
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className: classes.customFormControlClasses
                                                    }}
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment
                                                                position="start"
                                                                className={classes.inputAdornment}
                                                            >
                                                                <Email className={classes.inputAdornmentIcon} />
                                                            </InputAdornment>
                                                        ),
                                                        placeholder: "Email *"
                                                    }}
                                                />
                                            </ItemGrid>

                                            <ItemGrid xs={12} sm={12} md={12}>
                                                <Field
                                                    name="telegramUsername"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className: classes.customFormControlClasses
                                                    }}
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment
                                                                position="start"
                                                                className={classes.inputAdornment}
                                                            >
                                                                <Send
                                                                    className={classes.inputAdornmentIcon}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                        placeholder: "TelegramID...",
                                                    }}
                                                    component={renderCustomInput}
                                                />
                                            </ItemGrid>

                                            <ItemGrid xs={12} sm={11} md={11} className={classes.phoneNumber}>
                                                <Field
                                                    name="phoneNumber"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className: classes.customFormControlClasses
                                                    }}
                                                    component={(field) => (
                                                        <PhoneNumber {...field.input}/>
                                                    )}
                                                />
                                            </ItemGrid>

                                            <ItemGrid xs={12} sm={12} md={6}>
                                                <Field
                                                    name="firstName"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className: classes.customFormControlClasses
                                                    }}
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment
                                                                position="start"
                                                                className={classes.inputAdornment}
                                                            >
                                                                <Face
                                                                    className={classes.inputAdornmentIcon}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                        placeholder: "FirstName..."
                                                    }}
                                                    component={renderCustomInput}
                                                />
                                            </ItemGrid>

                                            <ItemGrid xs={12} sm={12} md={6}>
                                                <Field
                                                    name="lastName"
                                                    formControlProps={{
                                                        fullWidth: true,
                                                        className: classes.customFormControlClasses
                                                    }}
                                                    inputProps={{
                                                        startAdornment: (
                                                            <InputAdornment
                                                                position="start"
                                                                className={classes.inputAdornment}
                                                            >
                                                                <Face
                                                                    className={classes.inputAdornmentIcon}
                                                                />
                                                            </InputAdornment>
                                                        ),
                                                        placeholder: "Last Name..."
                                                    }}
                                                    component={renderCustomInput}
                                                />
                                            </ItemGrid>
                                        </GridContainer>
                                        <Button color="rose" right type="submit" disabled={submitting}>
                                            Update Profile
                                        </Button>
                                    </form>
                                    <Clearfix />
                                </div>
                            }
                        />

                    </ItemGrid>
                </GridContainer>
            </div>
        );
    }
}

UserForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapState = (state) => {
    return {
        initialValues: select.user.getUser(state)
    }
};

const mapDispatch = ({user: {setUser, clear}}) => ({
    setUser, clear
});
export default compose(
    withStyles(customRegisterPageStyled, {
        name: 'User'
    }),
    connect(mapState, mapDispatch),
    reduxForm({
        form: 'User',
        enableReinitialize: true
    })
)( UserForm);
