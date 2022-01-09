import React, { Fragment, useState } from "react";
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

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Fragment id="main-page">
			<div className="container">
				<img className="smallFixedImg" src={caroroLogo} alt="caroro-logo" />
				<div className="row">
					<div className="userInfoCard">
						<img
							className="userProfileImg"
							src={userProfileImg}
							alt="user-profile"
						/>
						<div className="userName">{user.name}</div>
						<div className="userPoint">{user.point + " 포인트"}</div>
					</div>
				</div>
				<Slider {...settings}>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
				</Slider>
			</div>
		</Fragment>
	);
}

export default Main;
