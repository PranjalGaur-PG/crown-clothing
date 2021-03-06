import React, { Component } from "react";
import './signin.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email:'', password:'' });
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label='email' required handleChange={this.handleChange} />
                    
                    <FormInput name="password" type="password" value={this.state.password} label='password' required handleChange={this.handleChange} />

                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton onClick = { SignInWithGoogle }>
                        Sign In With Google
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;