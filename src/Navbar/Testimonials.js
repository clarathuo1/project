import React from 'react';
import NavBar from './NavBar';
import Form from '../Components/Form';
import "../App.css";
import Footer from "../Components/Footer";
import ProfilePic1 from "../Components/Assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai";

function Testimonials() {
  return (
    <>
      <NavBar />
      <div className='test-section-wrapper'>
        <div className='test-section-top'>
          <p className='primary-subheading'>What Our Users Say</p>
          <h1 className='primary-heading'>Real Stories, Real Feedback</h1>
          <p className='primary-text'>Discover how our recipe app has transformed the cooking experiences of people from all around the world.</p>
        </div>
        <div className='testimonials-container'>
          <div className='test-section-bottom'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-7uwU6FCIFP5AYKvC6H3BmAf8FXRO5pJZQ&s" alt='Profile 1' className='testimonial-img' /> 
            <p>"This app has revolutionized my cooking! The recipes are diverse and easy to follow."</p>
            <div className='test-stars-container'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar /> 
            </div>
            <h2>Megan Waweru</h2>
          </div>

          <div className='test-section-bottom'>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDR0D8KU4AAnRWY9ps7CGDVmANho9me-Yrqw&s" alt='Profile 2' className='testimonial-img' /> 
            <p>"I love the variety of recipes and the ease of finding new meal ideas. Highly recommended!"</p>
            <div className='test-stars-container'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar /> 
            </div>
            <h2>Charles Mwangi</h2>
          </div>

          <div className='test-section-bottom'>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4kz4wb6e26HB6O_yZLV8NiAgcx9stdisXQ&s" alt='Profile 3' className='testimonial-img' /> 
            <p>"A fantastic app that makes cooking enjoyable and stress-free. The recipes are delicious!"</p>
            <div className='test-stars-container'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar /> 
            </div>
            <h2>Victoria Njeri</h2>
          </div>
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default Testimonials;
