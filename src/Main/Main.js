import React, { Fragment, useState, useEffect } from "react";
import "./Main.scss";
import Slider from "react-slick";
import caroroLogo from "../assets/caroro-small-topright.svg";
import userProfileImg from "../store/test/userProfileImg.png";

function Main() {
	const [user, setUser] = useState({
		name: "인화",
		profileImg: "../store/test/userProfileImg.png",
		point: 2022,
	});

	const [userCaroros, setUserCaroros] = useState([
		{
			id: 1,
			image: "../store/test/caroroImg1.png",
			title: "tetasfsad",
			date_created: "2021-11-01T11:31:16.913175Z",
			point: -1,
		},
		{
			id: 5,
			image: "/media/caroro/2021/11/1/bc191260-62c2-43a0-b169-8aa7c3222616.jpg",
			title: "second",
			date_created: "2021-11-01T11:35:01.043176Z",
			point: null,
		},
		{
			id: 6,
			image: "/media/caroro/2021/11/1/143e92aa-eb84-4012-a5c8-5d3f092a87e8.jpg",
			title: "second",
			date_created: "2021-11-01T11:37:07.413925Z",
			point: null,
		},
		{
			id: 7,
			image: "/media/caroro/2021/11/1/9b767bec-b43c-43b1-b2b0-5b0ebe2d9e75.jpg",
			title: "second",
			date_created: "2021-11-01T11:37:18.665488Z",
			point: null,
		},
	]);

	const [activeSlide, setActiveSlide] = useState(0);

	// const settings = {
	// 	dots: true,
	// 	infinite: false,
	// 	speed: 1000,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	// beforeChange: (current, next) => this.setState({ activeSlide: next }),
	// 	beforeChange: (current, next) => setActiveSlide(next),
	// };

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	useEffect(() => {
		console.log(activeSlide);
	}, [activeSlide]);

	return (
		<>
			<div className="main-container">
				<img
					className="main-container__fixed-logo"
					src={caroroLogo}
					alt="caroro-logo"
				/>
				<div className="main-container__row">
					<div className="profileCard">
						<img
							className="profileCard__img"
							src={userProfileImg}
							alt="user-profile"
						/>
						<div className="profileCard__name">{user.name}</div>
						<div className="profileCard__point">{user.point + " 포인트"}</div>
					</div>
				</div>
				<div className="main-container__row">
					<img src="" alt="" />
					<div className="test slide">
						<h2>beforeChange and afterChange hooks</h2>
						<p>
							<strong>{activeSlide}</strong>
						</p>

						<Slider {...settings}>
							<div className="test">
								<h3>1</h3>
							</div>
							<div className="test">
								<h3>2</h3>
							</div>
							<div className="test">
								<h3>3</h3>
							</div>
							<div className="test">
								<h3>4</h3>
							</div>
							<div className="test">
								<h3>5</h3>
							</div>
							<div className="test">
								<h3>6</h3>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}

export default Main;
