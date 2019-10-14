import React from 'react'
import './slide.scss'
import { Slide } from 'react-slideshow-image';
import SlideImage from './item/image';


const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${ oldIndex } to ${ newIndex }`);
    }
}

class SlideItems extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="slide-container">
                    <Slide {...properties}>
                        {
                            this.props.items.map(
                                (v, i) => (
                                    <SlideImage key={i} imgPath={v}></SlideImage>
                                )
                            )
                        }
                    </Slide>
                </div>
            </React.Fragment>
        )
    }
}
export default SlideItems