"use client";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LightBox, { Modal, ModalGateway } from "react-images";
import ZoomableImg from "../../../components/common/ZoomImg";

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 40,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 30,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 20,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselIamgesJson = [{}];

function CarouselImagesZoom(props) {
  const [awsApiData, setAwsApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  console.log(awsApiData);
  useEffect(() => {
    setLoading(true);
    // fetch data here
    fetch("https://picsum.photos/v2/list?page=1&limit=10")
      .then((data) => data.json())
      .then((data) => {
        const formattedData = data.map((item) => ({
          ...item,
          source: item.download_url,
        }));
        setAwsApiData(formattedData);
        setLoading(false);
      });
  }, []);

  const toggleLightbox = (post, selectedIndex) => {
    setLightboxIsOpen(!lightboxIsOpen);
    setSelectedImage({ author: post.author, index: selectedIndex });
  };
  return (
    <div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <Carousel
            additionalTransfrom={0}
            showDots={false}
            arrows={true}
            autoPlaySpeed={3000}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            centerMode={false}
            className="slider"
            containerClass="container-with-dots"
            dotListClass="dots"
            draggable
            focusOnSelect={false}
            infinite
            itemClass="carousel-top"
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={responsive}
            ssr={true}
            transitionDuration={500}
          >
            {awsApiData.map((post, indx) => (
              <div
                className="mt-5 left-1/2"
                key={indx}
                onClick={() => toggleLightbox(post, indx)}
              >
                ZoomableImg
                <img
                  className="media-img card-img-top card-img-hero"
                  src={post.download_url}
                  alt="Alt text"
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </Carousel>
          <ModalGateway>
            {lightboxIsOpen && (
              <Modal onClose={toggleLightbox}>
                <LightBox
                  components={{
                    FooterCaption: (props) => (
                      <div>shot by - {props.currentView.author}</div>
                    ),
                  }}
                  currentIndex={selectedImage.index}
                  frameProps={{ autoSize: "height" }}
                  views={awsApiData}
                />
              </Modal>
            )}
          </ModalGateway>
        </>
      )}
    </div>
  );
}
export default CarouselImagesZoom;
