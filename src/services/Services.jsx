import "./services.scss"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
}
const Services = () => {
	const ref = useRef()

	const isInView = useInView(ref, { margin: "-100px" })

	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			ref={ref}
			whileInView="animate"
			animate={"animate"}
		>
			<motion.div
				className="textContainer"
				variants={variants}
			>
				<p>
					I Focus on helping your brand grow <br /> and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div
				className="titleContainer"
				variants={variants}
			>
				<div className="title">
					<img
						src="/people.webp"
						alt=""
					/>
					<h1>
						<motion.b whileHover={{ color: "orange" }}>Unique</motion.b>Ideas
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b whileHover={{ color: "orange" }}>For Your</motion.b>
						Business
					</h1>
					<a
						href="/KARTIKRESUME.pdf"
						download
						class="btn btn2"
					>
						Download CV
					</a>
				</div>
			</motion.div>
			<motion.div
				className="listContainer"
				variants={variants}
			>
				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>Web Design</h2>
					<p>
						"Creative web designer proficient in design software and experienced
						in creating visually appealing, user-friendly websites. Adept at
						typography, color theory, and layout design, with a strong focus on
						responsive and accessible design. Collaborative team player with a
						track record of delivering high-quality, brand-aligned solutions."
					</p>
					<button>GO</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>MERN Stack</h2>
					<p>
						"Proficient MERN stack developer skilled in creating dynamic web
						applications. Experienced in MongoDB, Express.js, React, and
						Node.js, with a strong focus on building efficient and responsive
						solutions. Capable of designing RESTful APIs and collaborating
						effectively in cross-functional teams to deliver high-quality,
						scalable products."
					</p>
					<button>GO</button>
				</motion.div>
				<motion.div
					className="box"
					whileHover={{ background: "lightgray", color: "black" }}
				>
					<h2>Java Development</h2>
					<p>
						"Skilled Java and SQL developer with expertise in creating efficient
						applications and managing complex databases. Proficient in backend
						development using Java and proficient in writing optimized SQL
						queries. Strong problem-solving skills with a focus on delivering
						reliable and scalable solutions. Effective team player with strong
						communication abilities."
					</p>
					<button>GO</button>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default Services
