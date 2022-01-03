import React, { Fragment } from "react";
import "./Login.scss";
import CaroroLogo from "../assets/caroro-logo.svg";

function Login() {
	return (
		<Fragment id="login-page">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="title-box">
							<div className="big-title">Caroro-on</div>
							<div className="small-title">내 손안의 작은 환경지킴이</div>
						</div>
					</div>
					<div className="col">
						<div className="imgFrame">
							<img className="logoImg" src={CaroroLogo} alt="caroro-logo" />
						</div>
						<ul className="input-wrap">
							<li>
								<div className="input-title">카로로에 로그인하세요</div>
							</li>
							<form action="">
								<li>
									<input type="text" />
								</li>
								<li>
									<input type="text" />
								</li>
								<li>
									<button className="submit">
										<span className="btn-text">로그인</span>
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
