import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {movieData} from "../moviesData";
import {useParams} from "react-router-dom";
function Detail() {
	const {id} = useParams();
	const [data, setData] = useState({});
	useEffect(() => {
		const myData = movieData.filter((item) => item.id === Number(id));
		setData(myData[0]);
	}, []);
	return (
		<Container>
			<Background>
				<img src={data.backgroundImg} />
			</Background>
			<ImageTitle>
				<img src={data.titleImg} />
			</ImageTitle>
			<Controls>
				<PlayButton>
					<img src="/images/play-icon-black.png" alt="" />
					<span>PLAY</span>
				</PlayButton>
				<TrailerButton>
					<img src="/images/play-icon-white.png" alt="" />
					<span>Trailer</span>
				</TrailerButton>
				<AddButton>
					<span>+</span>
				</AddButton>
				<GroupWatchButton>
					<img src="/images/group-icon.png" alt="" />
				</GroupWatchButton>
			</Controls>
			<SubTitle>{data.subTitle}</SubTitle>
			<Description>{data.description}</Description>
		</Container>
	);
}

export default Detail;

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	
`;
const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	@media screen and (max-width: 768px) {
		display: flex;
		flex: 1;
		width: 500px;
		height: 100vh;
		background-size: cover;
		background-position: center;
		overflow-x: hidden;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
`;

const ImageTitle = styled.div`
	height: 30vh;
	position: absolute;
	margin-bottom: 125px;
	z-index: -1;
	img {
		background: transparent;
		z-index: 1;
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: contain;
		margin-top: 60px;
	}
`;

const Controls = styled.div`
	padding-top: 450px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const PlayButton = styled.div`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	border: 2px solid #fff;
	height: 56px;
	background-color: rgba(255, 255, 255, 0.9);
	border: none;
	padding: 0 24px;
	margin-right: 22px;
	letter-spacing: 1.8px;
	cursor: pointer;
	&:hover {
		background-color: rgba(198, 198, 198, 0.7);
	}
	span {
		color: black;
	}
`;

const TrailerButton = styled(PlayButton)`
	background-color: rgba(0, 0, 0, 0.3);
	border: 2px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
	text-transform: uppercase;
	span {
		color: #fff;
	}
	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;

const AddButton = styled.button`
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	margin-right: 16px;

	span {
		font-size: 30px;
		color: white;
	}
	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;

const GroupWatchButton = styled(AddButton)`
	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;

const SubTitle = styled.div`
	margin-top: 20px;
	color: rgb(249, 249, 249);
	font-size: 18px;
	min-height: 20px;
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 35px;
	color: rgb(249, 249, 249);
	max-width: 760px;
`;
