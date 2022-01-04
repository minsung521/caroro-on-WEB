import React, { Fragment } from "react";
import "./Login.scss";
import CaroroLogo from "../assets/caroro-logo.svg";

function Login() {
	return (
		<Fragment id="login-page">
			<div className="container">
				<div className="row">
					<div className="col colTitle">
						<div className="title-box">
							<div className="big-title">Caroro-on</div>
							<div className="small-title">내 손안의 작은 환경지킴이</div>
						</div>
					</div>
					<div className="col colImg">
						<img className="bigLogoImg" src={CaroroLogo} alt="caroro-logo" />

						<ul className="input-wrap">
							<li>
								<div className="input-title">카로로에 로그인하세요</div>
							</li>
							<form action="">
								<li>
									<input
										id="email"
										name="email"
										type="text"
										className="input inputText"
										placeholder="이메일"
									/>
								</li>
								<li>
									<input
										id="password"
										name="password"
										type="text"
										className="input inputText"
										placeholder="비밀번호"
									/>
								</li>
								<li>
									<div className="input-linkText">
										계정이 없나요?
										<a href=""> 회원가입 </a>
										하기
									</div>
								</li>
								<li>
									<button className="input inputBtn" type="submit">
										로그인
									</button>
								</li>
							</form>
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Login;
