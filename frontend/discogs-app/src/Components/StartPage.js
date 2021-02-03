import React from "react";
import { Container, Grid, Placeholder, Image } from "semantic-ui-react";

function StartPage() {
  return (
    <div className="StartPage">
      <div className="contained">
        <div className="MainRow">
          <div className="WideCol">
            <a className="Spotlight">
              <div className="MainImage">
                <h1>
                  10 Essential Albums to Introduce You to Innovative Leisure
                </h1>
              </div>
            </a>
          </div>
          <div className="Col">
            <a className="SpotlightAside">
              <div
                className="SideImage"
                style={{
                  backgroundImage:
                    "url(https://blog.discogs.com/wp-content/uploads/2020/07/1920x1080_NOTEXT.jpg)",
                }}
              >
                <h2>
                  <span>The Best Albums of 1990</span>
                </h2>
              </div>
            </a>
            <a className="SpotlightAside">
              <div
                className="SideImage"
                style={{
                  backgroundImage:
                    "url(https://blog.discogs.com/wp-content/uploads/2020/07/joy-division-closer-40th-anniversary-feature-no-text.jpg)",
                }}
              >
                <h2>
                  <span>
                    Understanding Closer at 40: Why There’s More Than Doom and
                    Gloom to Joy Division’s Final Album
                  </span>
                </h2>
              </div>
            </a>
            <div
              className="BrandDescription"
              style={{ backgroundImage: "url(/discogs-icon.png)" }}
            >
              <span className="BrandHype">
                Discogs101
                <a>Learn how to collect, track, and contribute</a>
              </span>
            </div>
          </div>
        </div>
        <div className="TrendingReleases">
          <h1>Trending Releases</h1>
          <Grid relaxed columns={5}>
            <Grid.Column>
              <div className="Card">
                <Image
                  src="https://img.discogs.com/pkaFKT7krx9uXnUGfuATJXYJN_0=/700x700/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15622231-1594721727-6274.jpeg.jpg"
                  as="a"
                  size="medium"
                  href="http://google.com"
                  target="_blank"
                />
                <h4 className="Album">Love Will Tear Us Apart</h4>
                <h5 className="Artist">Joy Division</h5>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="Card">
                <Image
                  src="https://img.discogs.com/VdMHeWuhXmmqLDdAehuSNjbYjyQ=/700x700/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15622185-1594720636-1698.jpeg.jpg"
                  as="a"
                  href="http://google.com"
                  target="_blank"
                />
                <h4 className="Album">Atmosphere</h4>
                <h5 className="Artist">Joy Division</h5>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="Card">
                <Image
                  src="https://img.discogs.com/EXLzU72SYK2SKEoO7BgfVsF5X6Q=/700x700/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15622081-1594719576-7598.jpeg.jpg"
                  as="a"
                  size="medium"
                  href="http://google.com"
                  target="_blank"
                />
                <h4 className="Album">Transmission</h4>
                <h5 className="Artist">Joy Division</h5>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="Card">
                <Image
                  src="https://img.discogs.com/W7XlwOlEYDxrG4-HxaW3PcfI8Q4=/700x700/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15586449-1594569412-4940.jpeg.jpg"
                  as="a"
                  size="medium"
                  href="http://google.com"
                  target="_blank"
                />
                <h4 className="Album">A Princess Among Thieves</h4>
                <h5 className="Artist">Prince Paul</h5>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="Card">
                <Image
                  src="https://img.discogs.com/XNqjArUT8m_USBX8Ky6_clHUzAA=/700x700/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15609609-1594500835-9978.jpeg.jpg"
                  as="a"
                  size="medium"
                  href="http://google.com"
                  target="_blank"
                />
                <h4 className="Album">Sahara</h4>
                <h5 className="Artist">McCoy Tyner</h5>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
