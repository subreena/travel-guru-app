import React from "react";

const SignUpForm = (props) => {
	const { toggleUser, validation, submit, errors } = props;
	console.log(errors);

	return (
		<div className="container">
			
			<h3>Create an account</h3>

			<form onSubmit={submit}  className="form">
				<div className="form-group">
				<input type="text" name="name" id="" className="form-control" placeholder="Your Name"  onBlur={validation}/>
				
				</div>

				<div className="form-group">
					<input type="email" className="form-control" placeholder="Email" name="email" onBlur={validation} />
				
				</div>

				<div className="form-group">
				<input type="password" className="form-control" name="password" placeholder="Password" onBlur={validation} />
				{errors.password.length > 0 && <p className="text-danger">{errors.password}</p>}
				</div>

				<div className="form-group">
					<input
						type="password"
						className="form-control"
						placeholder="Confirm Password"
						name="confirmPassword"
						onBlur={validation}
					/>
					{errors.confirmPassword.length > 0 && <p className="text-danger">{errors.confirmPassword}</p>}
				</div>

				<button type="submit" className="btn btn-warning tg-primary btn-block">
					Create an account
				</button>
			</form>

			
			<p className="text-center mt-3">Already have an account? 
                   <span className="orange-text" onClick={toggleUser}>Log In</span> 
			</p>
		</div>
			
	);
};

export default SignUpForm;