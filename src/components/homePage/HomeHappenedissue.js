import React from 'react';

function HomeHappenedissue(props) {
    return (
        <div className='home-happenedissue'>
            <div className='new-object'>
                <img src='./assets/images/e-NewsObject_03.png' alt='03' />
                <img src='./assets/images/e-NewsObject_02.png' alt='03' />
            </div>
            <p className='title'>
                Happened’s issue
            </p>
            <p className='content-happenedissue'>
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서<br></br>
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
            <button className='btn-see-more'>see more</button>
            <div className='happenedissue-hot'>
                <div className='happenedissue-item'>
                    <div>
                        <p className='title-happenedissue'>whpn<br></br>issue </p>
                        <img src='./assets/images/e-NewsObject_01_1.png' alt='NewsObject_01' />
                    </div>
                    <img src='./assets/images/e-NewsObject_01.png' alt='NewsObject_01' className='NewsObject_01' />
                </div>
                <div className='happenedissue-item'>
                    <div className='hot-item'>
                        <span> hot</span>
                    </div>
                    <div className='header-happenedissue'>b brand </div>
                    <img src='./assets/images/brand-img-01.jpg' alt='NewsObject_01' />
                </div>
                <div className='happenedissue-item'>
                    <div className='header-happenedissue'>c brand</div>
                    <img src='./assets/images/brand-img-02.jpg' alt='NewsObject_01' />
                </div>
                <div className='happenedissue-item'>
                    <div className='header-happenedissue'>d brand</div>
                    <img src='./assets/images/brand-img-03.jpg' alt='NewsObject_01' />
                    <div className='lol'>
                        lol!
                    </div>
                </div>
                <div className='happenedissue-item'>
                    <div className='header-happenedissue'>e brand</div>
                    <img src='./assets/images/brand-img-04.jpg' alt='NewsObject_01' />
                </div>
            </div>
        </div>
    );
}

export default HomeHappenedissue;