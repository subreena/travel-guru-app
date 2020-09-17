import React from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
	const { toggleUser, validation, submit} = props;

	return (
		<div className="container">
			<h3>Login</h3>

			<form onSubmit={submit} className="form">
			<div className="form-group">
                        <input type="email" name="email" id="" placeholder="User Name or Email"  onBlur={validation} />
                    </div>

				<div className="form-group">
				<input type="password" name="password" id="" placeholder="Password" onBlur={validation}  />
					
				</div>

				<div className="form-group d-flex justify-content-between mt-3">
                        <div> 
							<input type="checkbox" name="rememberme" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe"> Remember me</label>
							</div>
                        <div>
					<Link to="/">
						<span style={{
							color: '#F9A51A',
							fontWeight: '500',
							fontSize: '16px',
							lineHeight: '20px',
							textDecoration: 'underline',

						}}>Forgot Password</span>
					</Link>
				</div>
				</div>

				<button type="submit" className="btn form-btn">
					Login
				</button>
			</form>

			<p className="text-center mt-3">Don't have an account? 
                   <span class="orange-text"  onClick={toggleUser}>Create Acount</span> </p>
                   
		</div>
	);
};

export default LoginForm;