import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AnnouncementBar.css';

class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="annoucement_banner">
                <Link to="/covid_alert" className="announcement_title">Announcement</Link>
                <div className="announcement_detail">How we're responding to COVID-19</div>
            </div>
         );
    }
}
 
export default Announcement;