import React from 'react'
import NavBar from './NavBar'
import Contact from "../Components/Contact"
import "../style.css"
import Pickmeals from "../Components/Assets/pick-meals-image.png"
import Choosemeals from "../Components/Assets/choose-image.png"
import Deliverymeals from "../Components/Assets/delivery-image.png"
import Footer from "../Components/Footer"


function About() {
  const workInfoData = [
     {
       image : Pickmeals,
       title : "Pick Meals",
       text : "You can pick a recipe from our wonderful collection",
     },
     {
       image : Choosemeals,
       title : "Wip Up The Meal",
       text : "Actualise your creation",
     },
     {
       image : Deliverymeals,
       title : "Delivery Of Meals",
       text : "Finally, our food chaffeur will come to plate it for you",
     }
  ]
  return (
     <>
     <NavBar />
    <div className='about-section-wrapper'>
      <div className='about-section-top'>
        <p className='primary-subheading'>A Flight Straight Into Your Culinary Imagination</p>
        <h1 className='primary-heading'> Explore handpicked recipes tailored to your tastes and dietary needs.</h1>
        <p className='primary-text'>the ultimate destination for culinary exploration. Whether you're a seasoned chef or just starting your kitchen journey, our app is designed to inspire and guide you through an array of mouthwatering recipes from around the globe.</p>
      </div>
      <div className='about-section-bottom'>
        {workInfoData.map((data) => (
         <div className='about-section-info' key={data.title}> 
         <div className='about-boxesImg-container'>
          <img src={data.image} alt='' />
          </div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    <Contact />
    <Footer />
      </>
      
  )
}

export default About