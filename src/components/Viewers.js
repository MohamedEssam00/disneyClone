import React from "react";
import styled from "styled-components";

function Viewers() {
	return (
		<Container>
			<Wrap>
				<img src="/images/viewers-disney.png" alt="" />
				<video
					onMouseOver={(event) => event.target.play()}
					onMouseOut={(event) => event.target.pause()}
					src={"/videos/1564674844-disney.mp4"}
				></video>
			</Wrap>
			<Wrap>
				<img src="/images/viewers-pixar.png" alt="" />
				<video
					onMouseOver={(event) => event.target.play()}
					onMouseOut={(event) => event.target.pause()}
					src={"/videos/1564676714-pixar.mp4"}
				></video>
			</Wrap>
			<Wrap>
				<img src="/images/viewers-marvel.png" alt="" />
				<video
					onMouseOver={(event) => event.target.play()}
					onMouseOut={(event) => event.target.pause()}
					src={"/videos/1564676115-marvel.mp4"}
				></video>
			</Wrap>
			<Wrap>
				<img src="/images/viewers-starwars.png" alt="" />
				<video
					onMouseOver={(event) => event.target.play()}
					onMouseOut={(event) => event.target.pause()}
					src={"/videos/1608229455-star-wars.mp4"}
				></video>
			</Wrap>
			<Wrap>
				<img src="/images/viewers-national.png" alt="" />
				<video
					onMouseOver={(event) => event.target.play()}
					onMouseOut={(event) => event.target.pause()}
					src={"/videos/1564676296-national-geographic.mp4"}
				></video>
			</Wrap>
		</Container>
	);
}

export default Viewers;

const Container = styled.div`
	margin-top: 30px;
	padding: 30px 0 26px;
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	@media screen and (max-width: 768px) {
		grid-gap: 10px;
		padding: 15px 0 20px;
	}
`;

const Wrap = styled.div`
	width: 95%;
	height: 90%;
	margin: 20px;
	align-items: center;
	justify-content: center;
	display: flex;
	position: relative;
	box-sizing: border-box;
	border: 3px solid rgba(249, 249, 249, 0.1);
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	cursor: pointer;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	@media screen and (max-width: 768px) {
		width: 85px;
		display: flex;
		align-items: center;
		margin: 10px;
	}
	img {
		width: 85%;
		height: 35%;
		object-fit: cover;
		z-index: 1;
	}
	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
	video {
		z-index: -1;
		display: flex;
		position: absolute;
		max-width: 250px;
		z-index: auto;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all ease-in 250ms;
	}
`;
