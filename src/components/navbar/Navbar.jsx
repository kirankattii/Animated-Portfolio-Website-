import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
	return (
		<div className="navbar">
			{/* {sidebar} */}
			<Sidebar />

			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Karthik Katti
				</motion.span>
				<div className="social">
					<a href="https://github.com/kartik-ashok">
						<img
							src="/gt.png"
							alt=""
						/>
					</a>
					<a href="https://www.instagram.com/katti.kartik/?hl=en">
						<img
							src="/instagram.png"
							alt=""
						/>
					</a>
					<a href="https://www.linkedin.com/in/kartik-katti-603812264/">
						<img
							src="/linkdin.png"
							alt=""
						/>
					</a>
					<a href="https://www.facebook.com/profile.php?id=100025978114146">
						<img
							src="/facebook.png"
							alt=""
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
