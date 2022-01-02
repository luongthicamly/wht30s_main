import React from 'react';

function HomeVideo(props) {
    return (
        <div className='home-video'>
            <div className='container'>
                <div className='tag-h'>h</div>
            </div>
            <div className='bg_video'>
                <p className='title'>
                    what happened
                </p>
                <p className='decription'>
                    How to create mobile-optimized videos in minutes. Not a designer, <br></br>
                    every team makes a lot of videos Can be trimmed. Take the first
                </p>
                <button className='btn-see-more'>see more</button>
                <div className='video'>
                    <img src='./assets/images/video.png' alt='video' className='img-video' />
                </div>
                <img src='./assets/images/click.png' alt='click' className='click' />
            </div>
        </div>
    );
}

export default HomeVideo;