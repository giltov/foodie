import * as React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import america from "../../images/Americas_satellite_map.jpg"
import africa from "../../images/Africa.jpg"
import europe from "../../images/Europe.jpg"
import asia from "../../images/Asia.jpg"

export default class Map extends React.Component {
    render() {
        return (
            <Carousel>
                <div class>
                    <img src={america}/>
                    <p className="legend">America</p>
                </div>
                <div>
                    <img src={africa}/>
                    <p className="legend"> Africa</p>
                </div>
                <div>
                    <img src={europe}/>
                    <p className="legend"> Europe </p>
                </div>
                <div>
                    <img src={asia}/>
                    <p className="legend"> Europe </p>
                </div>
            </Carousel>
        );
    }
}