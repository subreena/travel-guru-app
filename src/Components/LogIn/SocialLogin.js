import React from "react";
import fbImg from '../../images/Icon/fb.png'
import googleImg from '../../images/Icon/google.png';

const SocialLogin = (props) => {
	return (
		<div>
			<div className="divider mt-4 text-center d-flex">
			<hr/>
				<p>Or</p>
			<hr/>
			</div>
				<div>
				<button className="btn btn-lg social-btn" onClick={props.facebook}>
					<span>
						<img src={fbImg} height="32px" width="32px" alt="fb logo" className="mr-3" />
					</span>
					<span>Continue with Facebook</span>
				</button>
				</div>
			<div>
			<button className="btn btn-lg social-btn" onClick={props.google}>
					<span>
						<img src={googleImg} height="32px" width="32px" alt="fb logo" className="mr-3" />
					</span>
					<span>Continue with Google</span>
				</button>
			</div>
			
		</div>
	);
};

export default SocialLogin;