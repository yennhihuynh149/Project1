import React from 'react'
import './course.scss'
import SlideItems from '../../components/slide/slide';


const Courses = [
    'Tieng Nhat',
    'Tieng Han',
    'Tieng Hoa',
    'Tieng Anh',
    'Web Design',
    'Mobile Developer'
]

class CoursePage extends React.Component {
    render(){
        return (
            <React.Fragment>
                <SlideItems items={Courses}></SlideItems>
            </React.Fragment>
        )
    }
}

export default CoursePage