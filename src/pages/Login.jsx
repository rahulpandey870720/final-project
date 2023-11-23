// import { event } from 'jquery';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../FirebaseConfig';
// import { error } from 'jquery';
let initialState = {
	email:'',
	password:''

}
export default function Login() {
	
    let [formData, setFormData] = useState(initialState);
    

    let {  email, password } = formData

    const inputChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

	const submit =(event) =>{
		event.preventDefault()
		signInWithEmailAndPassword(auth,formData.email,formData.password)
		.then((userCredential) =>{
			const user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage=error.message;
		});
	}
  return (
    <div class="global-container">
	<div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Log in</h3>
		<div class="card-text">
		
			
			<form>
				
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" 
					className="form-control form-control-sm" 
					id="email" 
					name='email'
					aria-describedby="emailHelp"
					value={email}
					onChange={inputChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					{/* <a href="#" style="float:right;font-size:12px;">Forgot password?</a> */}
					<input type="password" 
					className="form-control form-control-sm"
					 id="password"
					 name='password'
					 value={password}
					 onChange={inputChange}
					 />
				</div>
				<button type="submit" className="btn btn-auth btn-primary btn-block">Sign in</button>
				
				<div className="sign-up">
					Don't have an account? <Link to="./Register">Create One</Link>
				</div>
			</form>
		</div>
	</div>
</div>
</div>

  )
}
