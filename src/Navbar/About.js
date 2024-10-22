import React from 'react';
import NavBar from './NavBar';
import Contact from "../Components/Contact";
import "../style.css";
import Footer from "../Components/Footer";

// Sample data for chefs
const chefsData = [
  {
    image: "https://images.unsplash.com/photo-1705917893262-51fec4cd3e29?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWZzfGVufDB8fDB8fHww", 
    name: "Chef Gordon Ramsay",
    bio: "A world-renowned chef known for his fiery personality and culinary expertise.",
    categories: "Italian, French, British",
    likes: 120,
    comments: 45,
  },
  {
    image: "https://images.unsplash.com/photo-1705917893140-70f8fdd085fb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZnN8ZW58MHx8MHx8fDA%3D", 
    name: "Chef Nigella Lawson",
    bio: "Famous for her easy-going approach to cooking, Nigella is a favorite for home cooks.",
    categories: "Baking, Comfort Food, Desserts",
    likes: 95,
    comments: 30,
  },
  {
    image: "https://images.unsplash.com/photo-1717838207789-62684e75a770?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    name: "Chef Masaharu Morimoto",
    bio: "A celebrity chef known for his mastery of sushi and Japanese cuisine.",
    categories: "Sushi, Japanese, Asian Fusion",
    likes: 75,
    comments: 20,
  },
  // Add more chef data as needed
];

function About() {
  return (
    <>
      <NavBar />
      <div className='hero-section'>
        <h1 className='hero-title'>Meet Our Culinary Stars</h1>
        <p className='hero-subtitle'>Experience the magic of cooking through our talented chefs.</p>
      </div>
      <div className='about-section-wrapper'>
        <div className='about-section-top'>
          <p className='primary-subheading'>A Flight Straight Into Your Culinary Imagination</p>
          <h1 className='primary-heading'>Explore the chefs behind the recipes.</h1>
        </div>
        <div className='about-section-bottom'>
          {chefsData.map((chef, index) => (
            <div className='about-section-info' key={index}>
              <div className='about-boxesImg-container'>
                <img src={chef.image} alt={chef.name} />
                <div className='like-comment-container'>
                  <span className='likes'>{chef.likes} Likes</span>
                  <span className='comments'>{chef.comments} Comments</span>
                </div>
              </div>
              <h2>{chef.name}</h2>
              <p>{chef.bio}</p>
              <p><strong>Specializes In:</strong> {chef.categories}</p>
              <button className='like-button'>Like</button>
              <button className='comment-button'>Comment</button>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default About;

