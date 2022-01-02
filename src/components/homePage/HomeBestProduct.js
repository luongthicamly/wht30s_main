import React from 'react';

function HomeBestProduct(props) {
    return (
        <div className='best-product'>
            <p className='title-best-product'>best product</p>
            <p className='intro-best-product'>
                How to create mobile-optimized videos in minutes. Not a designer, <br></br>
                every team makes a lot of videos Can be trimmed. Take the first
            </p>
            <div className='wrap_products'>
                <div className='container'>
                    <div className='products'>
                        <div className='item_product'>
                            <div className='product-icon'>
                                <img src='./assets/images/e-bestIcon-01.png' alt='e-bestIcon-01' />
                            </div>
                            <img src='./assets/images/e-bestImage_01.jpg' alt='e-bestImage_01' className='img-product' />
                            <div className='box-info-product'>
                                <div className='info-product'>
                                    How to create<br></br>mobile-optimized
                                </div>
                                <div className='icon-go'>
                                    <img src='./assets/images/go-icon.png' alt='go-icon' />
                                </div>
                            </div>
                        </div>
                        <div className='item_product'>
                            <div className='product-icon'>
                                <img src='./assets/images/e-bestIcon-02.png' alt='e-bestIcon-02' />
                            </div>
                            <img src='./assets/images/e-bestImage_02.jpg' alt='e-bestImage_02' className='img-product' />
                            <div className='box-info-product'>
                                <div className='info-product'>
                                    How to create<br></br>mobile-optimized
                                </div>
                                <div className='icon-go'>
                                    <img src='./assets/images/go-icon.png' alt='go-icon' />
                                </div>
                            </div>
                        </div>
                        <div className='item_product'>
                            <div className='product-icon'>
                                <img src='./assets/images/e-bestIcon-03.png' alt='e-bestIcon-03' />
                            </div>
                            <img src='./assets/images/e-bestImage_03.jpg' alt='e-bestImage_03' className='img-product' />
                            <div className='box-info-product'>
                                <div className='info-product'>
                                    How to create<br></br>mobile-optimized
                                </div>
                                <div className='icon-go'>
                                    <img src='./assets/images/go-icon.png' alt='go-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default HomeBestProduct;