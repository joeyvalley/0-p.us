import React, { useState, useEffect } from 'react';

export default function Frog(props) {
  const [fadeIn, setFadeIn] = useState(false);
  const isMobile = props.isMobile;

  useEffect(() => {

    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
      <div className={isMobile ? 'mobile-project-container' : 'project-container'}>
        <h1>
          <span>fr-0.gg</span>
          <span className='date'>2023</span>
        </h1>
        <h3>
          <span><a href="https://fr-0.gg" target='_blank'>www.fr-0.gg</a></span>
          <span><a href="https://github.com/joeyvalley/fr-0.gg" target='blank'>Github</a></span>
        </h3>
        <p><span className='bold'>Languages and Frameworks:</span> React, Typescript, Node.js, Python, Shell Scripting</p>
        <p><span className='bold'>Management and Deployment:</span> Git, Github, Raspberry Pi, Vercel</p>
        <p><span className='bold'>Databases:</span> Firebase Realtime Database</p>
        <p><span className='bold'>API:</span> Cloudinary, Discord, Google Cloud</p>
        <p>&nbsp;</p>
        <p><span className='bold'>Key Contributions</span></p>
        <ul>

          <li>&bull; Integrated multiple technologies for automated bot deployment, successfully designing and implementing a Discord bot using Python, streamlining the process of image generation and data management both in the cloud and locally on a Raspberry Pi Zero W personal computer.</li>
          <li>&bull; Developed a system that interacted with several third-party services including Midjourney, Cloudinary and Firebase Realtime Database, facilitating the automated creation, storage and retrieval of image data.</li>
          <li>&bull; Leveraged AI-driven image generation tools and cloud-based storage solutions, demonstrating an innovative approach to integrating modern AI technology and cloud services in a cohesive, functional application with a simple yet effective user interface.</li>
        </ul>
        <p>&nbsp;</p>
        <p><span className='bold'>Details</span></p>
        <p>In this strange project, I developed an automated process to create AI-generated imagery, demonstrating my adaptability and a proficiency in integrating diverse technologies from Midjourney to cron jobs. The goal was to design an automated script capable of creating a new AI-generated image daily, uploading it to a cloud storage service, and managing its associated data -- prompt information, date of creation, image URL, etc -- efficiently in a database.</p>
        <p>&nbsp;</p>
        <p>Given the absence of a publicly available API for my preferred AI image generation tool, Midjourney, I pioneered an alternative solution. I developed the fr0gg-bot, a unique application that interacts with Midjourney via Discord's direct messaging. This bot not only generates a curated and randomized daily image prompt in a dedicated Discord thread but also simplifies the process by emailing me a direct link for manual customization.</p>
        <p>&nbsp;</p>
        <p>The fr0gg-bot significantly enhances data management efficiency. It uploads each day's final image to Cloudinary and concurrently updates a Firebase Realtime Database. This backend setup seamlessly feeds data to the frontend of the project <a href="https://fr-0.gg">(fr-0.gg)</a>, ensuring a dynamic and interactive user experience.</p>
        <p>&nbsp;</p>
        <p>To guarantee uninterrupted operation, I deployed the bot on a Wi-Fi-enabled Raspberry Pi. This phase involved programming the bot, along with scripting and configuring the Raspberry Pi environment to support its continuous operation. By employing Shell scripting and cron jobs, I ensured the bot's autonomous running, including automatic restarts upon reboots. I also developed custom scripts to enable HDMI output from the Raspberry Pi, downloading newly created images locally thus enabling myself to monitor the creation of new images on my television or any other HDMI-enabled screen. Overall, this process not only solidified my skills in system administration and Linux environment management but also highlighted my capability to develop and maintain stable, long-running software systems.</p>
      </div>
    </div>
  );
}
