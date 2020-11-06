import React from "react"

import "./Header.css"

export default function Header(props) {
	return (
		<>
			<header>
				<h1 className="title">Wishlist App</h1>
				<nav>
					<a className="nav list" href="#">
						Lists
					</a>
					<a className="nav signup" href="#">
						Sign Up
					</a>
				</nav>
			</header>
		</>
	)
}
