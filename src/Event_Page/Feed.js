import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less"

function Feed() {
    const craft =
        " Draw with shapes on the left to discover matching artworks on the right. Use the thumbnails along the bottom to browse your matches. How does it work? We used the Sketchy dataset to matchToday, Anupam Mittal net worth, thanks to Shark Tank India, his newfound popularity among the audiences and his appearance on The Kapil Sharma Show, is one of the hottest searches. In fact, it was on The Kapil Sharma Show that Mittal’s net worth, calculated by their team, was revealed to be close to Rs 15,000 crore.";

    const art =
        "Aman Gupta, ISB alumnus and co-founder of boAt Audio, talks about how the four-year-old brand became a top global name during the pandemic, plans for… Next time you get rejected, double your stakes. Steering the boAt to make it India’s finest Homegrown Lifestyle Brand. Launched Lifestyle Brand from the Legend Bob Marley in India: House of Marley.";

    const draw =
        "Sugar, founded in 2012 by Indian Institute of Management-Ahmedabad graduates Kaushik Mukherjee and Vinita Singh, started as an online brand for women’s cosmetics and sold their products on platforms such as Amazon India and Nyika . The Chinese beauty subscription service and e-commerce site is operated by Velvet Lifestyle Private Limited.";

    return (
        <React.Fragment>
            <div className='middle'>
                <div className='feeds'>
                    <div className="feed">
                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/introduction.gif" />
                        </div>
                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/punches.png" />
                        </div>
                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/cricket.JPG" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Cricket Event </h2>
                                <h5 style={{ textAlign: 'center' }}>July 22 to 25</h5>
                            </div>
                            <ReactReadMoreReadLess
                                charLimit={151}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {craft}
                            </ReactReadMoreReadLess>
                        </div>
                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/water_balloon.JPG" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Water Balloon</h2>
                                <h5 style={{ textAlign: 'center' }}>July 12 to 22</h5>
                            </div>
                            <ReactReadMoreReadLess
                                charLimit={151}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {art}
                            </ReactReadMoreReadLess>
                        </div>
                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/fashion.JPG" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Folk Festival</h2>
                                <h5 style={{ textAlign: 'center' }}>Live Music</h5>
                            </div>
                            <ReactReadMoreReadLess
                                charLimit={151}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {draw}
                            </ReactReadMoreReadLess>
                        </div>
                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/mardi.JPG" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Folk Festival</h2>
                                <h5 style={{ textAlign: 'center' }}>Live Music</h5>
                            </div>
                            <ReactReadMoreReadLess
                                charLimit={151}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {draw}
                            </ReactReadMoreReadLess>
                        </div>
                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/folk.JPG" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Folk Festival</h2>
                                <h5 style={{ textAlign: 'center' }}>Live Music</h5>
                            </div>
                            <ReactReadMoreReadLess
                                charLimit={151}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {draw}
                            </ReactReadMoreReadLess>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/gallery (1).jpg" />
                            <img className='picture' alt='DP' src="assets/images/gallery (2).jpg" />
                            <img className='picture' alt='DP' src="assets/images/gallery (3).jpg" />
                            <img className='picture' alt='DP' src="assets/images/gallery (4).jpg" />
                            <img className='picture' alt='DP' src="assets/images/gallery (6).jpg" />
                            <img className='picture' alt='DP' src="assets/images/gallery (7).jpg" />
                            <img className='picture' alt='DP' src="assets/images/gallery (8).jpg" />
                            <img className='picture' alt='DP' src="assets/images/gallery (9).jpg" />
                            <img className='picture' alt='DP' src="assets/images/gallery (10).jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Feed