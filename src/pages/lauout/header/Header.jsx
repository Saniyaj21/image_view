import { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import sani from "../../../assets/sani.jpg";

const Header = () => {
	const [dp, setDp] = useState(sani);
	return (
		<div className='header-container'>
			<div className='header'>
				<div>
					<Link to={"/"}>
						<img className='img ' src={dp} alt='' />
					</Link>
				</div>
				<div>
					<Link className='upload-btn' to={"/"}>
						Upload <i className='fa-solid fa-cloud-arrow-up'></i>
					</Link>
					<Link className='profile-options' to={"/"}>
						<img className='img' src={dp} alt='' />
					</Link>
					<div className='options'>
						<div>
							<i class='fa-solid fa-right-from-bracket'></i> Logout
						</div>
						<div>
							<i className='fa-solid fa-user'></i> Profile
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;