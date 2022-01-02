import React from 'react';

function HomeProducts(props) {
    const products = [
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-01.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-02.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-03.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-04.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-05.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-06.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-07.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-08.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-09.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-10.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-11.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-12.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-13.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-14.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-15.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-16.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-17.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-18.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-19.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-20.jpg',
            heart: 236
        },
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-21.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-22.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-23.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-24.jpg',
            heart: 236
        }
        ,
        {
            name: '[what happen] How to create',
            price: 2.500,
            images: './assets/images/e-img-25.jpg',
            heart: 236
        }
    ]
    return (
        <div className='home-products'>
            <div className='container'>
                <div className='row-product'>
                    {
                        products.map(product => (
                            <div className='item-product'>
                                <div className='product'>
                                    <img src={product.images} />
                                    <div className='info-product'>
                                        <p className='name-product'>
                                            {product.name}
                                        </p>
                                        <div className='price-heart'>
                                            <div className='price'>
                                                {product.price} won
                                            </div>
                                            <div className='e-Hearticon'>
                                                <img src='./assets/images/e-Hearticon.png' alt='e-Hearticon' />
                                                <span>{product.heart}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button className='btn-see-more'>see more</button>
        </div>
    );
}

export default HomeProducts;