import NowPlaying from '../components/Slides/NowPlaying'
import TopRated from '../components/Slides/TopRated'
import UpComing from '../components/Slides/UpComing'
import Discover from './Discover'
import People from './People'

function Home() {
  return (
    <>
      <TopRated />
      <Discover />
      <UpComing />
       <People />
      <NowPlaying />
       <Discover />
    </>
  );
}

export default Home
