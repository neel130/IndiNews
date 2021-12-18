import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles = [
        
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Don't Look Up is a disaster movie for the climate change times | CBC News",
            "description": "Don't Look Up may be just another entry in the long line of disaster movies, but it's also one of the first to truly grapple with climate change. Disasterologists and literary experts say that is the natural evolution of storytelling now that climate change i…",
            "url": "http://www.cbc.ca/news/entertainment/don-t-look-up-climate-change-1.6282299",
            "urlToImage": "https://i.cbc.ca/1.6282304.1639190226!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/don-t-look-up.JPG",
            "publishedAt": "2021-12-11T09:07:30.7975626Z",
            "content": "Don't Look Up, the new disaster movie jam-packed with stars Leonardo DiCaprio, Meryl Streep, Chris Evans, Jennifer Lawrence, Arianna Grande, Timothée Chalamet, Jonah Hill and about a dozen more start… [+7208 chars]"
        },
        {
            "source": {
                "id": "techradar",
                "name": "TechRadar"
            },
            "author": "Axel Metz",
            "title": "7 new movies and TV shows on Netflix, Amazon Prime, HBO Max and more this weekend",
            "description": "What’s new on Netflix and other streamers this weekend",
            "url": "https://www.techradar.com/news/7-new-movies-and-tv-shows-on-netflix-amazon-prime-hbo-max-and-more-this-weekend-december-10-2021",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/gC8nMwEAwicToThJFV2tj9-1200-80.jpg",
            "publishedAt": "2021-12-10T15:30:08Z",
            "content": "We’ve been flogging the festive horse when it comes to new streaming movies and TV shows over the last few weeks. But, surprisingly (and thankfully?) the Christmas content library doesn’t seem to be … [+5510 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Alex Heath, Vjeran Pavic, Phil Esposito",
            "title": "Keanu Reeves and Carrie-Anne Moss on making The Matrix Awakens with Epic Games",
            "description": "The two stars of The Matrix franchise talk about their new interactive Unreal Engine 5 experience with Epic Games, the Matrix Resurrections movie, and more.",
            "url": "https://www.theverge.com/22825102/keanu-reeves-carrie-anne-moss-interview-matrix-awakens-epic-games",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/VGssw-V2N1VYzu-mXH1Cwllm5Dw=/345x158:1719x877/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23077868/vpavic_211203_4921_0002.jpg",
            "publishedAt": "2021-12-10T04:00:00Z",
            "content": "We interviewed the stars of the Matrix movies\r\nHow do we know what is real?\r\nIts a telling question asked by a seemingly real-life Keanu Reeves early on in The Matrix Awakens, a playable tech demo bu… [+3015 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Matthew Adler",
            "title": "Best Marvel and DC Gifts: Holiday Gift Guide 2021 - IGN",
            "description": "Some superb gift ideas for the Marvel or DC fan in your life, including movies, figures, comics, behind-the-scenes books, and more.",
            "url": "https://www.ign.com/articles/best-marvel-and-dc-comics-gifts",
            "urlToImage": "https://assets-prd.ignimgs.com/2021/11/10/marveldcgifts-holidaygiftguide2021-blogroll-1636554336530.jpg?width=1280",
            "publishedAt": "2021-11-10T14:33:12Z",
            "content": "With the rise and popularity of the Marvel Cinematic Universe and DC Extended Universe over the past decade or so, there's plenty of new fans out there experiencing new characters and stories for the… [+1283 chars]"
        },
        {
            "source": {
                "id": "techcrunch-cn",
                "name": "TechCrunch (CN)"
            },
            "author": "Brian Heater",
            "title": "盘点 2019 年消失的明星创业公司 | TechCrunch 中文版",
            "description": "创业公司会因为各种原因而失败，但有一点不会改变：创业是极其困难的事。想要创办一家成功的公司，需要的不仅仅是热情，以及找到合适的人才（尽管很明显这两点很重要）。成功的创业者需要在许许多多细节上做到完美。\r\n\r\n粗略地回顾下今年的创业公司，可以发现并没有什么公司能带来像去年Theranos那样的轰动性故事。Theranos的故事被写成了畅销书，改编成了纪录片，相关电影也即将上映。不过某些公司，例如MoviePass，可能已经逐渐接近。\r\n\r\n通常来说，每看到一家Theranos，我们同时也会看到数十位辛勤创业者的故事…",
            "url": "https://techcrunch.cn/2019/12/27/startups-lost-in-2019/",
            
            "publishedAt": "2019-12-27T16:46:58Z",
            "content": "Theranos Theranos MoviePass\r\n Theranos\r\n 2019 \r\nAnki2010 2019 \r\n1.82 \r\n2013 WWDC Overdrive iPhone \r\n3 Anki CozmoAnki 2018 Vector 2019 4 Anki 150 “”Cozmo \r\nChariot2014 2019 \r\n300 2017 \r\nChariot “” \r\n … [+1085 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }


    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8b17ea74a3a543d6a3b87313353daae6"
        let data = await fetch(url);
        let fetchData = await data.json();
        this.setState({ articles: fetchData.articles });
        console.log(fetchData);

    }

    render() {
        return (
            <div className="container my-5">
                <h1>Daily News</h1>
                <div className="row my-5">
                    {this.state.articles.map((elem) => {
                        return <div className="col-md-4" key={elem.url}>


                            <NewsItem
                                title={elem.title ? elem.title.slice(0, 35) : "Title not availabe"}
                                description={elem.description ? elem.description.slice(0, 73) : "Description not available"}
                                ImgUrl={elem.urlToImage}
                                NewsUrl={elem.url} />
                        </div>

                    })}
                </div>





            </div>
        );
    }
}

export default News;
