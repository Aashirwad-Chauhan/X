import React, { Component } from 'react'
import Header from '../Home_Page/Header'
import Leftsidebar from '../Home_Page/Leftsidebar'
import Rightsidebar from '../Home_Page/Rightsidebar'
import OAudioPlayer from '@oovui/audio-player-react'
const mediaUrl = require('./music/a.mp3');
const anthorMediaUrl = require('./music/b.mp3');
const mediaUrls = require('./music/a.mp3');
const paniyon_sa = require('./music/paniyon_sa.mp3');
const Lambiyaan_si_Judaiyaan = require('./music/Lambiyaan_si_Judaiyaan.mp3');
const hua_hain_aaj_pehli_baar = require('./music/hua_hain_aaj_pehli_baar.mp3');
const mast = require('./music/mast.mp3');
const falak = require('./music/falak.mp3');

export default class App extends Component {

    constructor(props) {
        super(props);
        this.audioPlayerRef = React.createRef();
    }
    state = {
        url: ''
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                url: mediaUrl
            })
        }, 800);
    }

    onPlayingHandle() {
        console.log("onPlayingHandle：audio start play")
    }

    onPauseHandle() {
        console.log("onPauseHandle：audio pause")
    }

    doPlay = () => {
        this.audioPlayerRef.current.audioPlay();
    }

    doPause = () => {
        this.audioPlayerRef.current.audioPause();
    }

    doPlayAndPause = () => {
        this.audioPlayerRef.current.audioPlayPause();
    }

    togglePlay = () => {
        this.setState({
            url: anthorMediaUrl
        }, function () {
            this.doPlay();
        })
    }

    togglePlays = () => {
        this.setState({
            url: mediaUrls
        }, function () {
            this.doPlay();
        })
    }

    paniyon_sa = () => {
        this.setState({
            url: paniyon_sa
        }, function () {
            this.doPlay();
        })
    }

    Lambiyaan_si_Judaiyaan = () => {
        this.setState({
            url: Lambiyaan_si_Judaiyaan
        }, function () {
            this.doPlay();
        })
    }

    hua_hain_aaj_pehli_baara = () => {
        this.setState({
            url: hua_hain_aaj_pehli_baar
        }, function () {
            this.doPlay();
        })
    }

mast = () => {
        this.setState({
            url: mast
        }, function () {
            this.doPlay();
        })
    }

    falak = () => {
        this.setState({
            url: falak
        }, function () {
            this.doPlay();
        })
    }



    render() {
        const { url } = this.state;
        return (
            <React.Fragment>

                <Header />

                <main>
                    <div className='container'>
                        <Leftsidebar />
                        <div className="feed">
                            <div className="photo" >
                                <img className='picture' alt='DP' src="assets/images/music_player.gif" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
                            </div>

                            <div className="photo" style={{ backgroundColor: "black" }}>
                                <br />
                                <OAudioPlayer
                                    ref={this.audioPlayerRef}
                                    url={url}
                                    title="F.R.I.E.N.D.S."
                                    subtitle="connect the people"
                                    onPlaying={this.onPlayingHandle.bind(this)}
                                    onPause={this.onPauseHandle.bind(this)}
                                />

                                <button onClick={this.doPlay} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', marginBottom: '.5rem', backgroundColor: '#99ccff' }}> play </button>
                                <button onClick={this.doPause} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff', marginBottom: '.5rem' }}> pause </button>
                                {/* <button onClick={this.doPlayAndPause} style={{height:'2rem', width:'8rem', fontWeight:'bolder', color:'red', fontSize:'1rem', borderRadius:'4px', marginTop:'.4rem', marginLeft:'1rem', backgroundColor:'#99ccff'}}> play and pause </button> */}
                                <button onClick={this.togglePlays} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff' }}> next </button>
                            </div>


                            <div className="photo" style={{ backgroundColor: "black", marginTop: ".5rem" }}>
                                <img className='picture' alt='DP' src="assets/images/paniyon_sa.JPG" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
                                <button onClick={this.paniyon_sa} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff' }}> play </button>
                                <button onClick={this.doPause} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff', marginBottom: '.5rem' }}> pause </button>
                            </div>

                            <div className="photo" style={{ backgroundColor: "black", marginTop: ".5rem" }}>
                                <img className='picture' alt='DP' src="assets/images/lambiyaan_si.JPG" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
                                <button onClick={this.Lambiyaan_si_Judaiyaan} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff' }}> play </button>
                                <button onClick={this.doPause} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff', marginBottom: '.5rem' }}> pause </button>
                            </div>

                            <div className="photo" style={{ backgroundColor: "black", marginTop: ".5rem" }}>
                                <img className='picture' alt='DP' src="assets/images/hua_hain_pehli_baar.JPG" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
                                <button onClick={this.hua_hain_aaj_pehli_baara} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff' }}> play </button>
                                <button onClick={this.doPause} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff', marginBottom: '.5rem' }}> pause </button>
                            </div>

                            <div className="photo" style={{ backgroundColor: "black", marginTop: ".5rem" }}>
                                <img className='picture' alt='DP' src="assets/images/mast.JPG" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
                                <button onClick={this.mast} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff' }}> play </button>
                                <button onClick={this.doPause} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff', marginBottom: '.5rem' }}> pause </button>
                            </div>

                            <div className="photo" style={{ backgroundColor: "black", marginTop: ".5rem" }}>
                                <img className='picture' alt='DP' src="assets/images/falak.JPG" style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }} />
                                <button onClick={this.falak} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff' }}> play </button>
                                <button onClick={this.doPause} style={{ height: '2rem', width: '5rem', fontWeight: 'bolder', color: 'red', fontSize: '1rem', borderRadius: '4px', marginTop: '.4rem', marginLeft: '1rem', backgroundColor: '#99ccff', marginBottom: '.5rem' }}> pause </button>
                            </div>








                        </div>
                        <Rightsidebar />
                    </div>

                </main>

            </React.Fragment>
        )
    }
}