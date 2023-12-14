import { useRef } from "react"
import "./portfolio.scss"
// import { Link } from "react-router-dom"
import { motion, useSpring, useScroll, useTransform } from "framer-motion"

const items = [
	{
		id: 1,
		title: "Taxi Booking App",
		img: "./public/taxi.png",
		desc: "In this application development, users could book their vehicle from their current location to a desired destination, seamlessly navigating through Google Maps. The process included payment transactions for the booking system and the creation of user profiles with authentication. Built an application with React, Next.js, Typescript, Tailwind CSS, and Mapbox, demonstrating proficiency in past front-end technologies, JavaScript, responsive design, and mapping integration.",
		press: "https://taxi-booking-app-olive.vercel.app/",
	},
	{
		id: 2,
		title: "Student DBMS",
		img: "https://images.pexels.com/photos/9588205/pexels-photo-9588205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		desc: "Created a student database management system (DBMS) using Java, MySQL, and Spring Boot, focusing on efficient data modeling and secure data management. Developed RESTful APIs for seamless communication and prioritized data integrity and system performance optimization, resulting in an effective student management solution.",
		press: "https://github.com/kartik-ashok/StudentDataBaseManagement.git",
	},
	{
		id: 3,
		title: "FullStack Blogging App",
		img: "./public/blog.png",
		desc: "created an advanced blogging application that makes it easy to create, modify, and comment on blogs. Using the Mern stack (MongoDB, Express, React.js), a strong user profile system with username authentication was implemented. Tailwind CSS styling creates a UI that is both enticing and responsive.Allow users to share multimedia content such as images, videos, and infographics to convey their messages effectively.",
		press: "https://github.com/kartik-ashok/blogingapp.git",
	},
]

const Single = ({ item }) => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({
		target: ref,
	})

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div
						className="imageContainer"
						ref={ref}
					>
						<img
							src={item.img}
							alt=""
						/>
					</div>
					<motion.div
						className="textContainer"
						style={{ y }}
					>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<a href={item.press}>See More</a>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

const Portfolio = () => {
	const ref = useRef()

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	})

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	})

	return (
		<div
			className="portfolioo"
			ref={ref}
		>
			<div className="progresss">
				<h1>Featured Works</h1>
				<motion.div
					style={{ scaleX }}
					className="progressBar"
				></motion.div>
			</div>
			{items.map((item) => (
				<Single
					item={item}
					key={item.id}
				/>
			))}
		</div>
	)
}

export default Portfolio
