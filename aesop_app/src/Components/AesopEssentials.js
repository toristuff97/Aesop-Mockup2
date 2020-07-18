import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  
  <div>
    <img src="" alt="Resurrection Aromatique Hand Wash" />
    <h2>Resurrection Aromatique Hand Wash</h2>
    <p>Gentle cleansing for hard-working hands</p>
  </div>

  <div>
    <img src="" alt="Resurrection Aromatique Hand Balm" />
    <h2>Resurrection Aromatique Hand Balm</h2>
    <p>Richly hydrating, greaseless finish</p>
  </div>

  <div>
    <img src="" alt="Deodorant" />
    <h2>Deodorant</h2>
    <p>Woody, herbaceous, earthy aroma</p>
  </div>

  <div>
    <img src="" alt="Resurrection Aromatique Hand Wash" />
    <h2>Resurrection Aromatique Hand Wash</h2>
    <p>Gentle cleansing for hard-working hands</p>
  </div>

  <div>
    <img src="" alt="Resurrection Aromatique Hand Wash" />
    <h2>Resurrection Aromatique Hand Wash</h2>
    <p>Gentle cleansing for hard-working hands</p>
  </div>

  <div>
    <img src="" alt="Resurrection Aromatique Hand Wash" />
    <h2>Resurrection Aromatique Hand Wash</h2>
    <p>Gentle cleansing for hard-working hands</p>
  </div>

  <div>
    <img src="" alt="Resurrection Aromatique Hand Wash" />
    <h2>Resurrection Aromatique Hand Wash</h2>
    <p>Gentle cleansing for hard-working hands</p>
  </div>
</Carousel>;

export default AesopEssentials;


{/*TO DO
1. Input text for all items
2. Get images for all items
-make photo asset folder
3. Rename carousel if possible
4. Link this aesopEssentials.js with the rest of the group project
-Carousel:https://www.npmjs.com/package/react-multi-carousel

*/ }