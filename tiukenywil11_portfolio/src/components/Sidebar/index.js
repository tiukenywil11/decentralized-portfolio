import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.scss';
import Logo from '../../assets/images/Logo.png';

const Sidebar = () => {
	return (
        <div className='nav-bar'>
            <Link className='logo' to ='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#ffffff" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#ffffff" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kenywil-tiu-0b6a4612b">
                        <FontAwesomeIcon icon={faLinkedin} color="#ffffff"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/tiukenywil11">
                        <FontAwesomeIcon icon={faGithub} color="#ffffff"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
