import React from 'react';
function HomeBanner(props) {
    return (
        <div className='main_banner'>
            <div className='container'>
                <div><span className='launching-open-event'>launching open event!</span></div>
                <div className='what-happened-market'>
                    <img src='./assets/images/what-happened-market.png' alt='what-happened-market' />
                </div>
                <div className='main_banner_footer'>
                    <div className='item-banner-footer'>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div className='item-banner-footer'>
                        <img src='./assets/images/icon-next.png' alt='icon' className='icon-next' />
                    </div>
                    <div className='item-banner-footer'>
                        <span>market <br className='isDesktop'></br>Launching!</span>
                    </div>
                    <div className='item-banner-footer'>
                        <img src='./assets/images/icon-next.png' alt='icon' className='icon-next' />
                    </div>
                    <div className='item-banner-footer'>
                        <span>Lorem Ipsum</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;