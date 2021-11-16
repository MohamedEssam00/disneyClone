import React, {useEffect} from "react";
import styled from "styled-components";
import {useHistory, Link} from "react-router-dom";
import Home from "../components/Home";
import {
	selectUserName,
	selectUserPhoto,
	setSignOut,
	setUserLogin,
} from "../features/user/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {auth, provider} from "../firebase";

export default function Header() {
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(
					setUserLogin({
						name: user.displayName,
						email: user.email,
						userPhoto: user.photoURL,
					})
				);
			}
		});
	}, []);
	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			let user = result.user;
			history.push("/home");
			dispatch(
				setUserLogin({
					name: user.displayName,
					email: user.email,
					photo: user.photoURL,
				})
			);
		});
	};
	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut());
		});
		history.push("/");
	};

	return (
		<div>
			<Nav>
				<Logo src="/images/logo.svg" alt="" />
				{!userName ? (
					<LoginContainer>
						<Login
							onClick={() => {
								signIn();
							}}
						>
							Login
						</Login>
						{/* </Link> */}
					</LoginContainer>
				) : (
					<>
						<NavMenu>
							<a>
								<img src="images/home-icon.svg" alt="" />
								<span>HOME</span>
							</a>
							<a>
								<img src="images/search-icon.svg" alt="" />
								<span>SEARCH</span>
							</a>
							<a>
								<img src="images/watchlist-icon.svg" alt="" />
								<span>WATCHLIST</span>
							</a>
							<a>
								<img src="images/original-icon.svg" alt="" />
								<span>ORIGINALS</span>
							</a>
							<a>
								<img src="images/movie-icon.svg" alt="" />
								<span>MOVIES</span>
							</a>
							<a>
								<img src="images/series-icon.svg" alt="" />
								<span>SERIES</span>
							</a>
						</NavMenu>
						<UserImg onClick={signOut} src="/images/avatar-icon.jpg" alt="" />
					</>
				)}
			</Nav>
		</div>
	);
}

const Nav = styled.nav`
	height: 70px;
	background-color: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 20px;
	align-items: center;
	/* a:hover {
      background-color: rgba(255,255,255,0.2);
      cursor: pointer;
    } */
	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;
		img {
			height: 20px;
		}
		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;
			&:after {
				content: "";
				height: 2px;
				background-color: #fff;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform: scaleX(0);
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
			}
		}
		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
	@media screen and (max-width: 768px) {
		visibility: hidden;
	}
`;

const UserImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 40%;
	cursor: pointer;
`;

const Login = styled.div`
	border-radius: 4px;
	border: 1px solid #f9f9f9;
	padding: 8px 16px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 0.2s ease 0s;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

const LoginContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

// @media screen and (max-width: 768px) {
// 	visibility: visible;
// }
