export default function Video() {
  return (
    <div className="video-container">
      <video src="/assets/video/wet.mp4" autoPlay={true} controls={false} muted={true} loop={true} className='fullscreen'></video>
    </div>
  )
}