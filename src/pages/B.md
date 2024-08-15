```js
import NowPlaying from '../components/Slides/NowPlaying'
import TopRated from '../components/Slides/TopRated'
import UpComing from '../components/Slides/UpComing'
import Discover from './Discover'
import People from './People'

function Home() {
  return (
    <>
      {/*      <TopRated />
      <Discover />
      <UpComing />
       <People />
      <NowPlaying />
       <Discover />*/}
      <div className="pt-5">
        <div className="container text-justify">
          <div className="row">
            <div className="col-12">
              <div className="row">
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home

```

```js
<div className="container-fluid">
            <div className="row">
             <div className="col-9">
                <div className="row">
              <MovieCards
                data={trendMovie}
                pages="/discover/movies/"
                columns={4}
                limit={8}
                customStyles={{}}
              />
            <TVCards
                    data={trendTV}
                    pages="/discover/movies/"
                    columns={4}
                    limit={8}
                    customStyles={{}}
                  />
                                  </div>
             </div>
            </div>
      </div>
```

```js
<div style={{ height: "90px", width: "40%", marginLeft: "90px", position: "absolute", top: "360px", backgroundColor: "blue" }}>
                                <h1 style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "1.2rem", color: "white" }}>{slide.title}</h1>
                            </div>
                            <div style={{ height: "50%", width: "100%", position: "absolute", bottom: "0", backgroundColor: "yellow" }}>
                                <div style={{ position: "absolute", bottom: "0", backgroundColor: "red", width: "70%", height: "100%", left: "0" }}>
                                    <div style={{ position: "absolute", top: "0", backgroundColor: "green", marginLeft: "90px", height: "90px", width: "57.3%" }}>
                                        <div style={{ height: "50%", width: "50%", backgroundColor: "bisque", position: "absolute", top: "0", left: "0" }}>
                                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "1.2rem" }}>Ratings</h1>
                                        </div>
                                        <div style={{ height: "50%", width: "50%", backgroundColor: "burlywood", position: "absolute", top: "0", right: "0" }}>
                                            <h1 style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "1.2rem" }}>Popularity</h1>
                                        </div>
                                    </div>
                                    <div style={{ position: "absolute", top: "90px", backgroundColor: "darkgreen", height: "70%", width: "100%" }}>
                                        <h1 style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "1.2rem" }}>Description</h1>
                                    </div>
                                </div>
                                <div style={{ position: "absolute", bottom: "0", backgroundColor: "orange", width: "30%", height: "100%", right: "0" }}>
                                    {/* Additional content if needed */}
                                </div>
                            </div>

```