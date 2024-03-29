import React from "react";
import ig_logo from "../assets/images/icons/Instagram_Glyph_Black.png";
import fb_logo3 from "../assets/images/icons/fb_logo3.png";
import menu from "../assets/menu.pdf";
// import Contact from "./Contact";

const Footer = () => {
	return (
		<div className="flex items-center justify-center bg-slate-600 gap-10 p-5 text-sm font-bold overflow-auto">
			{/* <div className="flex flex-col justify-between gap-2">
				<a download="menu.pdf" href={menu} className="hover:underline">
					Download the menu
				</a>
				<p>Created by: David Gama</p>
			</div> */}
			<div className="flex flex-col items-center gap-2 ">
				<a
					download="menu.pdf"
					href={menu}
					className="hover:underline text-gray-100"
				>
					Download the menu!
				</a>
				<p className="text-gray-100">Follow us!</p>
				<div className="flex gap-2 m-auto text-[#FC7E2D]">
					<a href="https://www.facebook.com/mariscosmrcamaronmodesto">
						{/* <img
							src={fb_logo3}
							alt="Facebook redirect icon"
							className="h-6"
						></img> */}
						<i className="fa-brands fa-facebook-f fa-xl"></i>
					</a>
					<a href="https://www.instagram.com/mariscosmr.camaron/">
						{/* <img src={ig_logo} alt="Instragram redirect icon" className="h-6" /> */}
						<i className="fa-brands fa-instagram fa-2xl"></i>
					</a>
				</div>
				{/* <button>Signup for Notifications</button> */}
			</div>
		</div>
	);
};

export default Footer;
