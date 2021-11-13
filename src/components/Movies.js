import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Movies() {
	return (
		<Container>
			<h1>Recommended For You</h1>
			<Content>
				<Link to={"/detail/1"}>
					<Wrap>
						<img src="/posters/A tail of two kitties.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/2"}>
					<Wrap>
						<img src="/posters/Bao.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/3"}>
					<Wrap>
						<img src="/posters/Tangled.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/4"}>
					<Wrap>
						<img src="/posters/Soul.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/5"}>
					<Wrap>
						<img src="/posters/Moana.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/6"}>
					<Wrap>
						<img src="/posters/Incredibles 2.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/7"}>
					<Wrap>
						<img src="/posters/Assembled.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/8"}>
					<Wrap>
						<img src="/posters/Burrow.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/9"}>
					<Wrap>
						<img src="/posters/The Simpsons.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/10"}>
					<Wrap>
						<img src="/posters/Legends.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/11"}>
					<Wrap>
						<img src="/posters/Raya.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/12"}>
					<Wrap>
						<img src="/posters/Auntie EDNA.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/13"}>
					<Wrap>
						<img src="/posters/Mickey mouse.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/14"}>
					<Wrap>
						<img src="/posters/The falcon and the winter soldier.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/15"}>
					<Wrap>
						<img src="/posters/My music story2.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/16"}>
					<Wrap>
						<img src="/posters/The Lion King.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/17"}>
					<Wrap>
						<img src="/posters/poster18.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/18"}>
					<Wrap>
						<img src="/posters/poster19.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/19"}>
					<Wrap>
						<img src="/posters/poster20.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/20"}>
					<Wrap>
						<img src="/posters/Up.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/21"}>
					<Wrap>
						<img src="/posters/poster21.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/22"}>
					<Wrap>
						<img src="/posters/poster22.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/23"}>
					<Wrap>
						<img src="/posters/Finding Nemo.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/24"}>
					<Wrap>
						<img src="/posters/poster24.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/25"}>
					<Wrap>
						<img src="/posters/Toy Story.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/26"}>
					<Wrap>
						<img src="/posters/the princess and frog.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/27"}>
					<Wrap>
						<img src="/posters/poster27.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/28"}>
					<Wrap>
						<img src="/posters/poster28.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/29"}>
					<Wrap>
						<img src="/posters/poster29.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/30"}>
					<Wrap>
						<img src="/posters/poster30.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/31"}>
					<Wrap>
						<img src="/posters/poster31.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/32"}>
					<Wrap>
						<img src="/posters/Inside Out.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/33"}>
					<Wrap>
						<img src="/posters/Disney-Pixar-Luca-Poster.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/34"}>
					<Wrap>
						<img src="/posters/poster34.jpg" alt="" />
					</Wrap>
				</Link>
				<Link to={"/detail/35"}>
					<Wrap>
						<img src="/posters/ratatouille.jpg" alt="" />
					</Wrap>
				</Link>
			</Content>
			<Footer>
				<Logo2 src="/images/logo.svg" alt="" />
				<h5>© Disney, All Rights Reserved, Disney Entertainment</h5>
				<button>About Disney</button>
				<button>Help</button>
				<button>Careers</button>
				<button>Contact Us</button>
				<button>Advertise With Us</button>
				<button>Terms Of Use</button>
				<button>Privacy Policy</button>
				<button> Children's Online Privacy Policy</button>
				<button> Interest-Based Ads</button>
			</Footer>
		</Container>
	);
}

export default Movies;

const Container = styled.div``;
const Content = styled.div`
	display: grid;
	grid-gap: 30px;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	overflow: hidden;
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;
const Wrap = styled.div`
	border-radius: 10px;
	cursor: pointer;
	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 3/4;
	}
	&:hover {
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
	}
`;

const Footer = styled.div`
	height: 130px;
	background-color: transparent;
	margin-top: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	button {
		background-color: transparent;
		font-size: 11px;
		border: none;
		color: #fff;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 0 25px;
		/* max-width: 70px; */
		transition: all 100ms ease-in;
		font-weight: 100;
		letter-spacing: 1.1px;
		@media screen and (max-width: 768px) {
			padding-top: 20px;
		}
	}
	button:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
	@media screen and (max-width: 768px) {
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		padding-top: 50px;
	}
`;

const Logo2 = styled.img`
	width: 60px;
	display: flex;
	position: absolute;
	top: 100;
	left: 100;
	top: 0;
	cursor: pointer;
`;
