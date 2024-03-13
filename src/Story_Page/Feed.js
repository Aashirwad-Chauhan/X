import React from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less"

function Feed() {

    const anupam_mittal =
        "On 23 December 1971, he was born in Mumbai, Maharashtra, India. He pursued his post-graduate degree from Boston University. Later, he also did an MBA in Operations and Strategic Management in 1994-97. Anupam and Aanchal married on 4 July 2013 in Jaipur, Rajasthan. They are also blessed with a child. His father’s name is Gopal Krishna Mittal, and his mother’s name is Bhagwati Devi Mittal. Anupam Mittal, the founder of Saadi.com, founded the company in 1997 with many ups and downs. The company has made a significant impact in its field within a few years – more than 30 million people are using Saadi to find their life partners. He laid the foundation of Makaan.com in 2007, which helps the real estate holder and buyers in various ways. He has also invested about INR 1 Crore in OLA Cabs. Currently, he has a 2% share of OLA Cabs. He is the Founder & CEO of People Group. According to Jagran TV, the guy has also invested in Bollywood movies such as Flavors and 99.";

    const aman_gupta =
        "Aman Gupta was born in 1982 in Delhi, India. He completed his schooling at Delhi Public School, R.K. Puram. Later, Gupta graduated with a degree of Bachelor in Commerce from Delhi University. In addition to being an entrepreneur, he is also a chartered accountant. From 1999 to 2000, he studied at the Institute of Chartered Accountants of India where he specialized in accounting and finance. After finishing his studies, Gupta worked as an assistant manager at Citi Bank for two years. Gupta’s journey in the entrepreneurial world began in 2005 when he launched Advanced Telemedia Pvt Ltd. At Advanced Telemedia, he helped launch several global brands such as Beats Audio, Sennheiser, Telex, and others in the Indian market. Later, in 2011, Gupta worked as a senior management consultant at KPMG’s Strategy Services Group. In the same year, he completed his masters in business administration from Kellogg School of Management.";

    const veenta_singh =
        "India is rich in art and culture and this richness reflects in the handloom and handicraft products made by Indian artisans. With the boom in e-commerce, Indian handicrafts have found a great marketing platform. But this wasn't always the case. From the steep decline in demand for handicrafts during the British colonial rule to the inability of artisans to find a proper marketing channel, the Indian handicraft sector suffered a lot. However, the situation didn't remain the same. In 1960, John Bissell, an American gentleman, realized the potential of Indian handicrafts and decided to start 'Fabindia'. Today, Fabindia has 327 stores across 118 cities of India and 14 international stores. Fabindia - Comp The co-founders of SUGAR Cosmetics, Vineeta Singh and Kaushik Mukherjee were over the moon when their brand clocked Rs 105 crore in net revenue for the year FY 19-20.";

    const deepinder_goyal =
        "Deepinder Goyal (born: 26-01-1983) is the co-founder and CEO of one of the largest restaurant aggregator and food delivery service in India known as Zomato. Along with India, Zomato is available on more than 24 countries such as UAE, Sri Lanka, Qatar, UK, Indonesia and many more countries which serves more than 10,000 cities. He and Pankaj Chaddah together founded Zomato (then Foodiebay) back in 2008. The rename of Zomato from Foodiebay happened in 2011. Deepinder Goyal’s age is 38 years as of 2021. Post perusing his graduation from IIT Delhi, he worked as a management consultant at Bain & Company in New Delhi. While working at this company, he saw at that time, that there was a great demand for menu cards among his colleagues. That’s where the idea of Zomato came from. Soon he started his entrepreneurial journey by leaving his job at Bain & Company and by starting his own food startup Foodiebay in 2008, later renamed as Zomato in 2010. "

    const rohan_nayak =
        "Mumbai: Personalised audio streaming service Pocket FM has announced Shubh Bansal's appointment as VP-growth and Rahul Nag as head of communications. Both Bansal and Nag will be reporting to Pocket FM CEO and co-founder Rohan Nayak. With these appointments, the company aims to intensify its focus to accelerate revenue, speed up growth initiatives, and elevate its brand... https://www.indiantelevision.com/mam/marketing/mam/pocket-fm-strengthens-leadership-team-appoints-shubh-bansal-as-vp-growth-220517"

    return (
        <React.Fragment>
            <div className='middle'>
                <div className='feeds'>


                    <div className="feed">
                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/intro.gif" />
                        </div>


                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/punch.png" />
                        </div>



                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/anupam_mittal.png" />
                            <div style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Anupam Mittal</h2>
                                <h5 style={{ textAlign: 'center' }}>Founder:- Shaddi.com</h5>
                            </div>
                            <br />
                            <div style={{ color: 'black', fontSize: '1rem', fontFamily: 'serif', fontWeight: 'bold' }}>
                                <ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={"Read more ▼ 👇"}
                                    readLessText={"Read less ▲ 👆"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    {anupam_mittal}
                                </ReactReadMoreReadLess>
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/aman_gupta.png" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Aman Gupta</h2>
                                <h5 style={{ textAlign: 'center' }}>Founder:- boAt</h5>
                            </div>
                            <br />
                            <div style={{ color: 'black', fontSize: '1rem', fontFamily: 'serif', fontWeight: 'bold' }}>
                                <ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={"Read more ▼ 👇"}
                                    readLessText={"Read less ▲ 👆"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    {aman_gupta}
                                </ReactReadMoreReadLess>
                            </div>
                        </div>


                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/veenita-singh.png" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Veenta Singh</h2>
                                <h5 style={{ textAlign: 'center' }}>Founder:- SUGAR Cosmetics</h5>
                            </div>
                            <br />
                            <div style={{ color: 'black', fontSize: '1rem', fontFamily: 'serif', fontWeight: 'bold' }}>
                                <ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={"Read more ▼ 👇"}
                                    readLessText={"Read less ▲ 👆"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    {veenta_singh}
                                </ReactReadMoreReadLess>
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/deepinder_goyal.png" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Deepinder Goyal</h2>
                                <h5 style={{ textAlign: 'center' }}>Founder:- Zomato</h5>
                            </div>
                            <br />
                            <div style={{ color: 'black', fontSize: '1rem', fontFamily: 'serif', fontWeight: 'bold' }}>
                                <ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={"Read more ▼ 👇"}
                                    readLessText={"Read less ▲ 👆"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    {deepinder_goyal}
                                </ReactReadMoreReadLess>
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/rohan_nayak.png" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Rohan Nayak</h2>
                                <h5 style={{ textAlign: 'center' }}>Co-Founder:- Poket FM</h5>
                            </div>
                            <br />
                            <div style={{ color: 'black', fontSize: '1rem', fontFamily: 'serif', fontWeight: 'bold' }}>
                                <ReactReadMoreReadLess
                                    charLimit={200}
                                    readMoreText={"Read more ▼ 👇"}
                                    readLessText={"Read less ▲ 👆"}
                                    readMoreClassName="read-more-less--more"
                                    readLessClassName="read-more-less--less"
                                >
                                    {rohan_nayak}
                                </ReactReadMoreReadLess>
                            </div>
                        </div>
                        <br/>

                        {/* science - facts */}

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/first.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/second.png" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/third.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/fourth.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/fifth.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/sixth.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/seventh.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/eighth.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/ninth.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>

                        <div className="photo">
                            <img className='picture' alt='DP' src="assets/images/tenth.jpg" />
                            <div className="#" style={{ borderRadius: '.4rem', backgroundColor: '#ffff66' }}>
                                <h2 style={{ textAlign: 'center' }}>Fun with Science</h2>
                           
                            </div>
                        </div>



                    </div>


                </div>
            </div>
        </React.Fragment>
    )
}

export default Feed