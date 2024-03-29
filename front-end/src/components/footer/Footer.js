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
        <div className='footer__container'>
            <div className='footer__links'>
                <div className='footer__link'><Link to='/about'>About</Link></div>
                <div className='footer__link'><Link to='/contact'>Contact</Link></div>
                <div className='footer__link'><Link to='/privacy'>Privacy Policy</Link></div>
            </div>
            <div className='footer__icons'>
                <div className='footer__icon' title='GitHub'>
                    <a href='https://www.github.com' target='_blank' rel='noopener noreferrer'><BsGithub size={25} /></a>
                </div>
                <div className='footer__icon' title='LinkedIn'>
                    <a href='https://www.linkedin.com/in/derekpeterson-plutus' target='_blank' rel='noopener noreferrer'><FaLinkedinIn size= {25} /></a>
                </div>
                <div className='footer__icon' title='Twitter'>
                    <a href='https://www.twitter.com/pgatour' target='_blank' rel='noopener noreferrer'><BsTwitter size={25} /></a>
                </div>
                <div className='footer__icon' title='Email'>
                    <a href='https://www.gmail.com/' target='_blank' rel='noopener noreferrer'><FaEnvelope size={25} /></a>
                </div> 
                <div className='footer__icon' title='Instagram'>
                    <a href='https://www.instagram.com/pgatour/' target='_blank' rel='noopener noreferrer'><BsInstagram size={25} /></a>
                </div>
                <div className='footer__icon' title='Facebook'>
                    <a href='https://www.facebook.com/pgatour' target='_blank' rel='noopener noreferrer'><FaFacebookF size={25} /></a>
                </div>
                <div className='footer__icon' title='Tiktok'>
                    <a href='https://www.tiktok.com/@pgatour' target='_blank' rel='noopener noreferrer'><FaTiktok size={25} /></a>
                </div>
                <div className='footer__icon' title='YouTube'>
                    <a href='https://www.youtube.com/pgatour' target='_blank' rel='noopener noreferrer'><BsYoutube size={25} /></a>
                </div> 
            </div>
            <div className='footer__copyright'>
                <p>Copyright © Top PGA 2023. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
};

export default Footer;