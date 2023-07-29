import React from "react";
import "./Featured.scss";

const Featured = () => {
	return (
		<div className="featured">
			<div className="container">
				<div className="left">
					<h1>Find The Perfect <i>FreeLance</i> Service For Your Business</h1>
					<div className="search">
						<div className="searchInput">
							<img src="./img/search.png" alt="" />
							
							<input type="text" placeholder="try building mobile app" />
						</div>
						<button>Search</button>
					</div>
					<div className="popular">
						<span>popular:</span>
						<button>Web Design</button>
						<button>Wordpress</button>
						<button>Logo Design</button>
						<button>Ai Services</button>
					</div>
				</div>
				<div className="right">
					<img src="./img/man.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Featured;
