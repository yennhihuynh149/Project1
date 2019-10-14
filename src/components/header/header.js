import React from 'react';
import './header.scss';
import Carousel from 'react-bootstrap/Carousel';
import SlideItems from '../slide/slide';

const SlideImages = [
    'https://picsum.photos/id/4/1400/600',
    'https://picsum.photos/id/5/1400/600',
    'https://picsum.photos/id/6/1400/600',
    'https://picsum.photos/id/9/1400/600',
    'https://picsum.photos/id/14/1400/600',
    'https://picsum.photos/id/15/1400/600',
    'https://picsum.photos/id/19/1400/600',
    'https://picsum.photos/id/143/1400/600',
    'https://picsum.photos/id/178/1400/600',
];

class HeaderElement extends React.Component {
    render() {
        return (
            <div className="app-header">
                <SlideItems items={SlideImages}></SlideItems>
            </div>
        )
    }
}

export default HeaderElement;