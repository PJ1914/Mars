import React from 'react';
import './aboutUs.css';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';

const AboutUs = () => {
  return (
    <>
      <div className="main">
        <div className="container1">
          <div>
            <div className="about">
              <h2 className="about-heading">Mars Productions Private Limited</h2>
              <p>
                Mars productions Private Limited is a Film & Technology Production company located at Sri kalahasthi, Andhra Pradesh, India.
                Mars Productions Private Limited is registered with Government of India on 4th September, 2020 as group of companies with Film production as its first step of operations.
                Mars movie productions is part of Mars productions and is registered with Google as Digital company on 14th May 2020.
              </p>
            </div>
            <div className="note">
              <h2 className="note-heading">Founders Note</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="right-side">
            <img src="/assets/Rectangle 56.png" alt="Image" className="right-img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti adipisci at cumque corporis fugit consequuntur eligendi, similique voluptatibus in natus, quisquam, quod nisi? Totam excepturi cum ratione corrupti at!
            </p>
          </div>
        </div>

        <div className="container3">
          <div className="vision">
            <h2 className="vision-heading">Our Vision</h2>
            <p>
              To create an eco system of creators and consumers with equality and efficiency at its center.
            </p>
            <img className="vision-img" src="/assets/Rectangle 20.png" alt="Vision Image" />
          </div>
          <div className="mission">
            <h2 className="mission-heading">Our Mission</h2>
            <p>
              To give voice to every individual with a story worth telling the world by innovating in their respective craft.
            </p>
            <img className="mission-img" src="/assets/Rectangle 26.png" alt="Mission Image" />
          </div>
        </div>

        <div className="icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
          <a href="#"><MdEmail size={30} /></a>
          <a href="#"><MdCall size={30} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
        </div>
      </div>
    </>
  )
}

export default AboutUs;
