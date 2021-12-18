import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, ImgUrl, NewsUrl } = this.props;
        return (
            <div >
                <div className="card" style={{ width: "18rem" }}>
                    <img src={ImgUrl?ImgUrl:"https://i.cbc.ca/1.6282304.1639190226!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/don-t-look-up.JPG"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{description}....</p>
                        <a href={NewsUrl} className="btn btn-sm btn-primary">Read more...</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
