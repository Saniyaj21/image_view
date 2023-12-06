import axios from "axios";
import React, { useEffect, useState } from "react";
import "./login.scss";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser } from "../../../redux/slices/auth";

function Login() {
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {isAuthenticated} = useSelector(selectUser)

	useEffect(() => {
		
		if (isAuthenticated === true) {
			navigate("/");
		}
	}, [dispatch, isAuthenticated, navigate]);




	const hendleData = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		if (Object.entries(user).length == 0) {
			return toast.error("plese input valid data....");
		}
		if (!user.password || !user.email) {
			return toast.error("email and password required....");
		}
		dispatch(loginUser(user));
	};

	return (
		<div>
			<form action='' className='auth-form' onSubmit={handleLogin}>
				<b style={{ fontSize: "25px" }}>Login form</b>
				<input
					type='email'
					name='email'
					id=''
					placeholder='enter valid Email'
					onChange={hendleData}
				/>
				<input
					type='password'
					name='password'
					id=''
					placeholder='enter vaild password '
					onChange={hendleData}
				/>
				<button type='submit'>Log In</button>

				<p>
					If you loss your password
					<strong>
						<Link to={"/auth/forgotPassword"}>
							<span>Forget password</span>
						</Link>
					</strong>
				</p>
				<br />
				<hr />
				<b>If you are not Register </b>
				<Link to={"/auth/registretion"}>
					<button type=''>Register</button>
				</Link>
			</form>
		</div>
	);
}

export default Login;
