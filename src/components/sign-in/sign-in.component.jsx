import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
        const { email, password  } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    
    render(){
        return(
            <div className='sign-in'>
                <h2>i already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange} required/>
                    <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
