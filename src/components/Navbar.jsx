import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="title">
                <motion.span
                    initial = {{opacity:0, scale: 0.5}}
                    animate = {{opacity: 1, scale: 1}}
                    transition={{duration: 2}}
                >
                Niraj Shrestha
                </motion.span>
            </div>
            <div className="nav">
                <a href ="/"> Home</a>
                <a href ="/"> About Me</a>
                <a href ="/"> Career</a>
                <a href ="/"> Project</a>
                <a href ="/"> Hobbies</a>
                <a href ="/"> Contact</a>
            </div>
            
        </div>
    )
}

export default Navbar