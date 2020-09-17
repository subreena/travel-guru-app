import React, { useContext, useState } from "react";
import "./LogIn.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import SocialLogin from "./SocialLogin";
import firebaseConfig from "./firebase/firebase.config";



const LogIn = () => {
	const [newUser, setNewUser] = useState(false);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [currentUser, setCurrentUser] = useState({
		isSignedIn: false,
		email: "",
		password: "",
		photo: "",
		error: "",
		success: false,
	});

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/" } };

	const handleToggleForm = () => {
		setNewUser(!newUser);
	};

	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);;
	}
	/* GOOGLE*/
	const handleGoogleSignIn = () => {
		const googleProvider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(googleProvider)
			.then(function(result) {
				const { displayName, email , photoURL } = result.user;
				const newUser = {
					isSignedIn: true,
					email: email,
					name: displayName,
					photo: photoURL,
				};
				setCurrentUser(newUser);

				setLoggedInUser(newUser);
				history.replace(from);
				console.log(newUser);
			})
			.catch(function(error) {
				const newUser = { ...currentUser };
				newUser.error = error.message;
				newUser.success = false;
				setLoggedInUser(newUser);
				console.log(error);
			});
	};

	/* FACEBOOK */
	const handleFacebookSignIn = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				const { displayName, email , photoURL } = result.user;
				const newUser = {
					isSignedIn: true,
					email: email,
					name: displayName,
					photo: photoURL,
				};
				setCurrentUser(newUser);

				setLoggedInUser(newUser);
				history.replace(from);
				console.log(newUser);
			})
			.catch(function(error) {
				const newUser = { ...currentUser };
				newUser.error = error.message;
				newUser.success = false;
				setLoggedInUser(newUser);
				console.log(error);
			});
	};

	/* Form validation and give error */
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	let pass1, pass2;
	const handleFormValidation = (e) => {
		let isFieldValid = true;
		const newError = { ...errors };

		if (e.target.name === "password" || e.target.name === "confirmPassword") {
			const isPasswordLengthValid = e.target.value.length > 5;
			const passwordHasNumber = /\d{1}/.test(e.target.value);

			isFieldValid = isPasswordLengthValid && passwordHasNumber;

			if (e.target.name === "password") {
				pass1 = e.target.value;
				if (!isFieldValid) {
					newError[e.target.name] = "Password is not valid";
					setErrors(newError);
				} else {
					newError[e.target.name] = "";
					setErrors(newError);
				}
			}
			if (e.target.name === "confirmPassword") {
				pass2 = e.target.value;
				if (!isFieldValid && pass1 !== pass2) {
					newError[e.target.name] = "Password is not matched";
					setErrors(newError);
				} else {
					newError[e.target.name] = "";
					setErrors(newError);
				}
			}
		}

		if (isFieldValid) {
			const newUser = { ...currentUser };
			newUser[e.target.name] = e.target.value;
			setCurrentUser(newUser);
			
		}
	};

	/* Email and Password sign up */
	const handleCreateNewUser = (e) => {
		e.preventDefault();
		if (!currentUser.email && !currentUser.password) {
			const newError = { ...errors };
		
			newError.confirmPassword = "Password did not match";
			setErrors(newError);
		} else {
			firebase.auth().createUserWithEmailAndPassword(currentUser.email, currentUser.password)
				.then((result) => {
					const { displayName, email } = result.user;
					const newUser = {
						email: email,
						name: displayName,
						success: true,
						error: "",
					};
					setCurrentUser(newUser);
					setLoggedInUser(newUser);
					console.log(result.user);
				})
				.catch((error) => {
					const newUser = { ...currentUser };
					newUser.error = error.message;
					newUser.success = false;
					setLoggedInUser(newUser);
					console.log(error.message);
				});
		}
	};

	// Email and Password sign in
	const handleSignIn = (e) => {
		e.preventDefault();
		if (!currentUser.email && !currentUser.password) {
			const newError = { ...errors };
		
			setErrors(newError);
		} else {
			firebase.auth().signInWithEmailAndPassword(currentUser.email, currentUser.password)
				.then((result) => {
					const { displayName, email } = result.user;
					const newUser = {
						isSignedIn: true,
						email: email,
						name: displayName,
						success: true,
						error: "",
					};
					setCurrentUser(newUser);
                    setLoggedInUser(newUser);
					history.replace(from);
				})
				.catch((error) => {
					const newUser = { ...currentUser };
					newUser.error = error.message;
					newUser.success = false;
					setLoggedInUser(newUser);
				});
		}
	};

	return (
		
			<div className="container">
			<div className="login">
				<div className="login-content">
			
				{newUser ? (
					<SignUpForm
						toggleUser={handleToggleForm}
						validation={handleFormValidation}
						submit={handleCreateNewUser}
						errors ={errors}
						
					></SignUpForm>
				) : (
					<LoginForm
						toggleUser={handleToggleForm}
						validation={handleFormValidation}
						submit={handleSignIn}
						
					></LoginForm>
				)}
					{currentUser.success 
				&& (
					<span className="text-center text-success">
						User {!newUser ? "logged in" : "created"} successfully
					</span>
				)}
				{loggedInUser.error && (
					<span className="text-center text-danger">
						{loggedInUser.error}
					</span>
				)}
				</div>
			
				<SocialLogin google={handleGoogleSignIn} facebook={handleFacebookSignIn}></SocialLogin>
				</div>
				</div>
			
	
	);
};

export default LogIn;