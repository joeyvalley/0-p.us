import React, { useState, useEffect } from 'react';

export default function NHT() {
  // State to control the fade-in effect
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set the fade-in state to true after a short delay (e.g., 500ms)
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);

    // Cleanup function to clear the timer if the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="content-container">
      {/* Apply the fade-in class conditionally based on the state */}
      <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
        <div className="project-container">
          <h1>
            <span className='bold'>Nonhuman Teachers</span>
            <span className='date'>2023</span>
          </h1>
          <h3>
            <span><a href="https://nonhumanteachers.org" target='blank'>www.nonhumanteachers.org</a></span>
            <span><a href="https://github.com/joeyvalley/Nonhuman-Teachers" target='blank'>Github</a></span>
          </h3>
          <p><span className='bold'>Languages and Frameworks:</span> React, Javascript, Node.js</p>
          <p><span className='bold'>Management and Deployment:</span> Git, Github, Vercel</p>
          <p><span className='bold'>Databases:</span> N/A</p>
          <p><span className='bold'>API:</span> Donorbox, Mailchimp, Stripe</p>
          <p>&nbsp;</p>
          <p>Nonhuman Teachers is a 501(c)(3) non-profit organization that takes a new approach to ecological storytelling, blending science, art, and the imagination to help deepen the relationship between humans and the natural world. </p>
          <p>&nbsp;</p>
          <p>It has been my great pleasure to serve as the Director of Events of Nonhuman Teachers since its inception in January of 2023. I have since curated the inaugural season of <a href="https://www.eventbrite.com/manage/collections/2244719/events">fundraising programming</a> in New York's Lower East Side, graciously hosted by our friends at <a href="https://nineorchard.com">Nine Orchard</a>.</p>
          <p>&nbsp;</p>
          <p>In addition to this, I have served as a designer and the principal developer for Nonhuman Teachers' website, working in collaboration with designers Carlos Morera and Miguel Gaydosh.</p>
          <p>&nbsp;</p>
          <p>The site is a React application, leveraging the component structure of the React framework to build out a simple yet functional interface for users to learn about the organization, engage with organizations many projects, and <a href="https://nonhumanteachers.org/donate">support</a> the organiztions cause.</p>
          {/* <p>&nbsp;</p> */}
          {/* <img src="https://www.nonhumanteachers.org/assets/images/future.jpg" alt='Nonhuman Teachers' className='project-img' /> */}
        </div>
      </div>
    </div>
  );
}
