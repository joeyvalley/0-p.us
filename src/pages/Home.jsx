import Sidebar from '../components/Sidebar'
import Video from '../components/Video'

export default function Home() {
  return (
    <>
      <Sidebar></Sidebar>
      <Video>
        <video src="/assets/video/wet.mp4" autoPlay={true} loop={true} controls={false} muted={true} className='fullscreen'></video>
      </Video>
    </>
  )
}