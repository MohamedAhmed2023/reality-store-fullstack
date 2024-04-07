import React from "react"
import new1 from "./images/1.png"
import new2 from "./images/2.png"
import new3 from "./images/3.png"
import "./News.css"
function News() {
    return (
        <>
            <div className="News-container">
                <h5 className="heading-news">Latest News</h5>
                <div className="News-parent">
                    <div className="News">
                        <div className="News-upper">
                            <img src={new1} alt="" ></img>
                        </div>
                        <div className="News-lower">
                            <div className="icons-News">
                            </div>
                            <h4>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h4>
                            <p>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="News">
                        <div className="News-upper">
                            <img src={new2} alt="" ></img>
                        </div>
                        <div className="News-lower">
                            <h4>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h4>
                            <p>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                            <button>Read more
                            </button>
                        </div>
                    </div>
                    <div className="News">
                        <div className="News-upper">
                            <img src={new3} alt="" ></img>
                        </div>
                        <div className="News-lower">
                            <h4>Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.</h4>
                            <p>Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.</p>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default News;