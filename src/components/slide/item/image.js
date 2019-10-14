import React from 'react'
import './image.scss'

class SlideImage extends React.Component {
 constructor(props) {
   super(props)
   console.log(this.props)
 }
 render() {
   return (
     <React.Fragment>
       <div className="each-slide" key={this.props.index}>
         <div style={{ 'backgroundImage': `url(${this.props.imgPath})` }}>
         </div>
       </div>
     </React.Fragment>
   )
 }
}
export default SlideImage