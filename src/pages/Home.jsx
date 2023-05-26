import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

export default function Home() {
  return (
    <>
      <Sidebar></Sidebar>
      <Content>
        <div className="home">
          <img src="https://i.imgur.com/chDVOGT.jpg" alt="Wet" className="one" />
          <video src="https://i.imgur.com/iIntJym.mp4" autoPlay muted loop className="one"></video>
          <img src="https://i.imgur.com/bgnqiOK.jpg" alt="Wet" className="one" />
          <img src="https://i.imgur.com/chDVOGT.jpg" alt="Wet" className="one" />
        </div>
      </Content>
    </>
  )
}