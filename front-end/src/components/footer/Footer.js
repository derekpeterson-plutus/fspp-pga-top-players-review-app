import './Footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    BsGithub, 
    BsTwitter, 
    BsYoutube, 
    BsFacebook, 
    BsLinkedin, 
    BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__links'>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/privacy'>Privacy</Link>
        </div>
        <div className='footer__icons'>
            <a href='https://www.github.com/' target='_blank' rel='noopener noreferrer'><BsGithub size={25}/></a>
            <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'><BsYoutube size={25}/></a>
            <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'><BsTwitter size={25}/></a>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><BsFacebook size={25}/></a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'><BsLinkedin size={25}/></a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><BsInstagram size={25}/></a>
        </div>
        <div className='footer__copyright'>
            <p>Copyright © Top PGA 2023. All rights reserved.</p>
        </div>
    </div>
  )
};

export default Footer;