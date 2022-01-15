import React, { Fragment } from "react";
import "./Login.scss";
import CaroroLogo from "../assets/caroro-logo.svg";

function Login() {
	return (
		<>
			<div className="login-container">
				<div className="login-container__row">
					<div className="login-container__col">
						<div className="title-box">
							<div className="title-box__title">Caroro-on</div>
							<div className="title-box__subtitle">
								내 손안의 작은 환경지킴이
							</div>
						</div>
					</div>
					<div className="login-container__col">
						<img className="logo__img" src={CaroroLogo} alt="caroro-logo" />
						<ul className="input">
							<li>
								<div className="input__title">카로로에 로그인하세요</div>
							</li>
							<form action="">
								<li>
									<input
										id="email"
										name="email"
										type="text"
										className="input__text input__text--form"
										placeholder="이메일"
									/>
								</li>
								<li>
									<input
										id="password"
										name="password"
										type="text"
										className="input__text input__text--form"
										placeholder="비밀번호"
									/>
								</li>
								<li>
									<div className="input__sign-up-text">
										계정이 없나요?
										<a className="input__sign-up-text--link" href="">
											{" "}
											회원가입{" "}
										</a>
										하기
									</div>
								</li>
								<li>
									<button
										className="input__text input__text--submit"
										type="submit"
									>
										로그인
									</button>
								</li>
							</form>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
