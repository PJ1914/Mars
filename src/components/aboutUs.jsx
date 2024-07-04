import React from 'react'
import './aboutUs.css'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';


const AboutUs = () => {
  return (
    <>
        <div className="main">
            <div className="container1">
                <div className="about">
                    <h2 className='about-heading'>Mars Productions Private Limited</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque expedita ex molestiae quis enim blanditiis, obcaecati consectetur ad omnis mollitia! Neque dolorem blanditiis dicta hic optio perspiciatis modi animi.
                        Quaerat, a! A quae natus modi tenetur, esse tempore nisi autem eius consequuntur soluta suscipit, voluptate sequi ullam, cumque architecto magnam amet eveniet? Distinctio error consequatur voluptatibus eveniet provident animi.
                        Voluptatum iste asperiores assumenda quas fugit vero maiores officia, voluptate consectetur, totam nam accusamus aspernatur, dolorum architecto sequi perferendis cumque in possimus facilis sint rerum. Mollitia aliquam dolorem ea labore.
                    </p>
                </div>

                <div className="note">
                    <h2 className='note-heading'>
                        Founders Note
                    </h2>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste at, nulla maiores blanditiis repellendus rem natus eos ex inventore, enim quaerat alias illo. Doloremque, minima soluta? Quibusdam fugit et quae.
                        Quibusdam fuga commodi enim quos ducimus, sit quo, alias ad nemo aperiam quaerat, aliquid numquam facere? Esse neque delectus cupiditate recusandae dignissimos assumenda doloremque? Explicabo excepturi dolorem facilis aut qui.
                    </p>
                </div>
            </div>

            <div className="right-side">
                <img src="" alt="Image" className="right-img" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti adipisci at cumque corporis fugit consequuntur eligendi, similique voluptatibus in natus, quisquam, quod nisi? Totam excepturi cum ratione corrupti at!</p>
            </div>
        </div>

        <div className="container3">
            <div className="vision">
                <div>
                <h2 className="vision-heading">Our Vision</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor sequi temporibus explicabo quae maxime unde exercitationem eos dolorum quibusdam quaerat! Non suscipit, laudantium cupiditate maiores enim iste veritatis eos consequatur.</p>
                </div>
                <img className="vision-img" src='' alt='Vision Image'/>
            </div>

            <div className="mission">
                <div>
                <h2 className="mission-heading">Our Mission</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum debitis totam excepturi repellendus qui sunt velit adipisci omnis impedit quasi quia nostrum laudantium doloribus, ipsa labore enim tempora in eaque?</p>
                </div>
                <img className='mission-img' src="" alt="Mission Image" />
            </div>
        </div>
      
        <div className='icons' >
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
      <a href="#">
        <MdEmail size={30} />
      </a>
      <a href="#">
        <MdCall size={30} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
    </div>
    </>
  )
}

export default AboutUs;
