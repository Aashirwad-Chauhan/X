import React from 'react'
import { Avatar } from '@material-ui/core';

function Rightsidebar() {
    return (
        <React.Fragment>
            <div className="right">

                <div className="messages friend-requests">
                    <div className="heading">
                        <h4>News_highligts</h4>
                        <i className="uil uil-newspaper"></i>
                    </div>

                    <div>

                        {/* 1st */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/avatar.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>Avatar 2 Teaser Leaked Online Days Before Release</h5>
                            </div>
                        </div>

                        {/* 2nd */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/kritisrk.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>Kriti Kharbanda Wants To Do A Film With Shah Rukh Khan</h5>
                            </div>
                        </div>

                        {/* 3rd */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/mithun.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>Mithun Chakraborty Discharged From Bengaluru Hospital</h5>
                            </div>
                        </div>

                        {/* 4th */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/kili-paul.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>Internet Sensation Kili Paul Attacked With Knife</h5>
                            </div>
                        </div>

                        {/* 5th */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/sairat.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>GHKPM: Ayesha Thanks Fans For Falling In Love With SaiRat</h5>
                            </div>
                        </div>

                        {/* 6th */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/aamir-khan.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>Aamir Khan's Gift To Farmers</h5>
                            </div>
                        </div>

                        {/* 7th */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/kartik-aryan.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>Kartik Aaryan Saves Kiara Advani From Oops Moment</h5>
                            </div>
                        </div>

                        {/* 8th */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/avatar22.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>First Glimpse Of Avatar 2 Will Be Out With Doctor Strange 2</h5>
                            </div>
                        </div>

                        {/* 9th */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/katvicko.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>Vicky Feels Fortunate To Have Katrina As His Life Partner</h5>
                            </div>
                        </div>

                        {/* 10th */}

                        <div className="message">
                            <div className="profile-photo">
                                <Avatar src='assets/news_img/dhaakad.jpg' className="sidebar_avatar"></Avatar>
                            </div>

                            <div className="message-body">
                                <h5 style={{ color: 'red', fontWeight: 'bolder' }}>Kangana On Rejecting Khan-Led Films</h5>
                            </div>
                        </div>

                        {/* <div className="message">
                            <div className="profile-photo">
                                <img alt='DP' src="assets/images/profile-1.jpg" />
                                <div className="active"></div>
                            </div>
                            <div className="message-body">
                                <h5>Edem Quist</h5>
                                <p className="text-muted">Just woke up bruh</p>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* iss place per se 2nd section start ho raha hai  */}

                <div className="friend-requests">
                    <h4>Exam Alert</h4>
                    <div>

                        <div className="request">
                            <div className="info">
                                <div>
                                    <h5>🔴 CBSE announces new dates for board exams in riot-hit northeast Delhi; Class 12 papers to begin from March 31, Class 10 from March 21</h5>
                                </div>
                            </div>
                        </div>

                        <div className="request">
                            <div className="info">
                                <div>
                                    <h5>🔴 Madhya Pradesh crisis worsens as 17 MLAs shifted shifted to Bengaluru, according to multiple media reports</h5>
                                </div>
                            </div>
                        </div>

                        <div className="request">
                            <div className="info">
                                <div>
                                    <h5>🔴 North Korea has fired three unidentified projectiles off its east coast, reports The Associated Press quoting South Korea’s military.</h5>
                                </div>
                            </div>
                        </div>

                        <div className="request">
                            <div className="info">
                                <div>
                                    <h5>🔴 Coronavirus: Holiday for all LKG, UKG, pre-primary schools in Bengaluru due to COVID-19</h5>
                                </div>
                            </div>
                        </div>

                        <div className="request">
                            <div className="info">
                                <div>
                                    <h5>🔴 Asian shares slide as coronavirus panic grips, oil prices plunge over 20%</h5>
                                </div>
                            </div>
                        </div>

                        <div className="request">
                            <div className="info">
                                <div>
                                    <h5>🔴 Good morning readers and welcome to our news live for breaking news across the globe. Track this live blog to get breaking news alerts and key developments throughout the day.</h5>
                                </div>
                            </div>
                        </div>

                        {/* <div className="request">
                            <div className="info">
                                <div className="profile-photo">
                                    <img alt='DP' src="assets/images/profile-1.jpg" />
                                </div>
                                <div>
                                    <h5>Hajia Bintu</h5>
                                    <p className="text-muted">8 mutual friends</p>
                                </div>
                            </div>
                            <div className="action">
                                <button className="btn btn-primary">Accept</button>
                                <button className="btn">Decline</button>
                            </div>
                        </div> */}



                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Rightsidebar