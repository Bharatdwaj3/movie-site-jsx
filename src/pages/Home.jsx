import NowPlaying from '../components/Slides/NowPlaying'
import Popular from '../components/Slides/Popular'
import TopRated from '../components/Slides/TopRated'
import UpComing from '../components/Slides/UpComing'
import Discover from './Discover'
function Home() {
  return (
    <>
      <TopRated />
      <Discover />
      <UpComing />
      <NowPlaying />
      <Popular />
    </>
  );
}

export default Home
