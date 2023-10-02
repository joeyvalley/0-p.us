import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

export default function Home() {
  return (
    <>
      <Sidebar></Sidebar>
      <Content>
        <div className="home">
          <div className='left'>
            <div>
              <video src="https://i.imgur.com/iIntJym.mp4" autoPlay muted loop></video>
              <p>
                <span className="title">Nonhuman Teachers promotional video</span>
                <span className="year">2023</span>
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/EMBFetW.png" alt="Frog" />
              <p>
                <span className='title'>Digital sculpture</span>
                <span className='year'>2022</span>
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/cYal1Ht.jpeg" alt="Letter Blue LP" />
              <p>
                <span className='title'>Wet - Letter Blue 12" LP</span>
                <span className='year'>2021</span>
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/sFSzIwx.jpeg" alt="Myrmecophytes" />
              <p>
                <span className='title'>Cactus Store - The Myrmecophytes (detail)</span>
                <span className='year'>2021</span>
              </p>
            </div>

          </div>
          <div className='right'>
            <div>
              <img src="https://i.imgur.com/7jAlrot.jpeg" alt="LESCSS" />
              <p>
                <span className='title'>LESCSS promotional materials</span>
                <span className='year'>2019 - 2023</span>
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/bgnqiOK.jpg" alt="The Middle/Turn Away" />
              <p>
                <span className='title'>Wet - The Middle/Turn Away</span>
                <span className='year'>2018</span>
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/PbmBNQ6.jpg" alt="Wet Tour Poster" />
              <p>
                <span className='title'>Wet (tour poster)</span>
                <span className='year'>2017</span>
              </p>
            </div>
            <div>
              <img src="https://i.imgur.com/yTMb5at.jpeg" alt="Wet EP" />
              <p>
                <span className='title'>Wet - Wet EP</span>
                <span className='year'>2013</span>
              </p>
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}