import './Footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    BsGithub, 
    BsTwitter, 
    BsYoutube, 
    BsInstagram } from 'react-icons/bs';
import {   
    FaTiktok, 
    FaEnvelope, 
    FaFacebookF, 
    FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__links'>
            <div className='footer__link'><Link to='/about'>About</Link></div>
            <div className='footer__link'><Link to='/contact'>Contact</Link></div>
            <div className='footer__link'><Link to='/privacy'>Privacy</Link></div>
        </div>
        <div className='footer__icons'>
            <div className='footer__icon'>
                <a href='https://www.github.com/derekpeterson-plutus' target='_blank' rel='noopener noreferrer'><BsGithub size={25} /></a>
            </div>
            <div className='footer__icon'>
                <a href='https://www.linkedin.com/in/derekpeterson-plutus' target='_blank' rel='noopener noreferrer'><FaLinkedinIn size= {25}/></a>
            </div>
            <div className='footer__icon'>
                <a href='https://www.twitter.com/plutusmercurius' target='_blank' rel='noopener noreferrer'><BsTwitter size={25}/></a>
            </div>
            <div className='footer__icon'>
                <a href='https://www.gmail.com/' target='_blank' rel='noopener noreferrer'><FaEnvelope size={25}/></a>
            </div> 
            <div className='footer__icon'>
                <a href='https://www.instagram.com/pgatour/' target='_blank' rel='noopener noreferrer'><BsInstagram size={25}/></a>
            </div>
            <div className='footer__icon'>
                <a href='https://www.facebook.com/pgatour' target='_blank' rel='noopener noreferrer'><FaFacebookF size={25}/></a>
            </div>
            <div className='footer__icon'>
                <a href='https://www.tiktok.com/@pgatour' target='_blank' rel='noopener noreferrer'><FaTiktok size={23}/></a>
            </div>
            <div className='footer__icon'>
                <a href='https://www.youtube.com/pgatour' target='_blank' rel='noopener noreferrer'><BsYoutube size={26}/></a>
            </div> 
        </div>
        <div className='footer__copyright'>
            <p>Copyright © Top PGA 2023. All rights reserved.</p>
        </div>
    </div>
  )
};

export default Footer;