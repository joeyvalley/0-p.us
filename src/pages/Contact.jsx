import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

export default function Contact() {
  return (
    <>
      <Sidebar></Sidebar>
      <Content>
        <div className="contact-container">
          <p className="contact">Joseph Valle</p>
          <h3>
            <span>New York, NY</span>
            <span>+1 (617) 816-1392</span>
            <span><a href="mailto:info@0-p.us">info@0-p.us</a></span>
            <span><a href="https://instagram.com/joeyvalley">@joeyvalley</a></span>
          </h3>
          <p className="contact">Interdisciplinary software engineer working primarily in a web-based context but often experimenting with audio, video, physical computing, and recently machine learning and artificial intelligence.</p>
          <p className="contact">I am a recent graduate of General Assembly's <a href="https://generalassemb.ly/education/software-engineering-immersive/new-york-city">Software Engineering Immersive</a> program and an alumnus of New York University's <a href="https://gallatin.nyu.edu/">Gallatin School of Individualized Study</a>, where my concentration was on digital media.</p>
          <p className="contact">For the past ten years I have worked professionally as an <a href="https://en.wikipedia.org/wiki/Wet_(band)">artist</a> and <a href="https://open.spotify.com/playlist/5JDjOqfhy9Bdas3sCwCBgT?si=ec5c5f8e24dc42c0">producer</a> represented by Columbia Records, AWAL, Universal Music Publishing Group, and Creative Artists Agency. During this time I toured internationally as a performing artist and musical director with artists such as Florence + the Machine, the 1975, and Toro y Moi, among others.</p>
          <p className="contact">Since 2017, I have operated a seasonal <a href="https://cactus.store/products/new-york-greenhouse-1">greenhouse, garden space, and storefront</a> on New York's Lower East Side called <a href="https://cactus.store">Cactus Store</a>. We specialize in cultivating <a href="https://cactus.store/collections/plants">rare and unusual plants</a> from around the world and curating <a href="https://cactus.store/pages/calendar">cultural programming</a> to broker better plant/human relationships and encourage ecological mindfulness.</p>
          <p className="contact">Software is the connective tissue between my various interests and professional experiences and has always afforded me the ability create the tools to unite these discplines in the Gesamtkunstwerk that is my silly little life.</p>
          {/* <p className='contact'><a href="mailto:info@0-p.us">info@0-p.us</a><br />+1 (617) 816 1392<br />New York and Los Angeles<br />USA</p>
          <p className="contact">@joeyvalley</p> */}
        </div>
      </Content >
    </>
  )
}