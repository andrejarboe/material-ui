import React, { Component } from 'react';
import Services from '../../components/Services/Services';
import Carousel from 'nuka-carousel';
import SamplePortfolio from '../../components/SamplePortfolio/SamplePortfolio';

class Home extends Component {

  render() {

    return (
      <div>
        <Carousel
          speed={200}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        </Carousel>
        <Services />
        <SamplePortfolio />
      </div>
    );
  }
}

export default Home;