import { Component } from "react";
import "./slider.css";
class Slider extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
      ],
      currentIndex: 0,
      isPlaying: true,
    };
    this.intervalId = null;
  }
  goToPrevSlide = () => {
    const { currentIndex } = this.state;
    const firstIndex = 0;
    const newIndex =
      currentIndex === firstIndex ? firstIndex : currentIndex - 1;
    this.setState({ currentIndex: newIndex });
  };

  goToNextSlide = () => {
    const { currentIndex, images } = this.state;
    const lastIndex = images.length - 1;
    const newIndex = currentIndex === lastIndex ? lastIndex : currentIndex + 1;
    this.setState({ currentIndex: newIndex });
  };

  startSlideshow = () => {
    this.intervalId = setInterval(() => {
      const { currentIndex, images } = this.state;
      const lastIndex = images.length - 1;
      const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
      this.setState({ currentIndex: newIndex });
    }, 1500);
  };

  stopSlideshow = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div className="slider-container">
        <div className="slider-buttons">
          <button onClick={this.goToPrevSlide}>Prev</button>
          <button onClick={this.goToNextSlide}>Next</button>

          <button onClick={this.stopSlideshow}>Stop</button>
          <button onClick={this.startSlideshow}>Resume</button>
        </div>

        <img
          src={this.state.images[this.state.currentIndex]}
          className="slider-image"
        />
      </div>
    );
  }
}
export default Slider;
