import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://bxslider.com/assets/images/plant.jpg',
    altText: '슬라이드1 이미지 대체 문구',
    caption: '슬라이드1 설명',
    header: '슬라이드1 제목'
  },
  {
    src: 'https://bxslider.com/assets/images/daisies.jpg',
    altText: '슬라이드2 이미지 대체 문구',
    caption: '슬라이드2 설명',
    header: '슬라이드2 제목'
  },
  {
    src: 'https://bxslider.com/assets/images/succulents.jpg',
    altText: '슬라이드3 이미지 대체 문구',
    caption: '슬라이드3 설명',
    header: '슬라이드3 제목'
  }
];

class R041_ReactstrapCarousel extends Component {
  render() {
    return (
        <UncontrolledCarousel items={items} />
    )}
}

export default R041_ReactstrapCarousel;