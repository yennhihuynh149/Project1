import React from 'react';
import './tuyen-dung.scss';
import { locale } from '../../config/locale';

class TuyenDung extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>{locale.hire}</div>
            </React.Fragment>
        )
    }
}

export default TuyenDung