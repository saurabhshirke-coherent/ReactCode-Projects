import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import './Base.css';
import VideoTrailer from '../components/videos/video-3.mp4';

// Footer Library
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

//Cards Library
import './Cards.css';
import CardItem from './CardItem';

function Base() {
  const descHist = useNavigate();
  const [productSearchParam, setProductSearchParam] = useState('');
  const [userData, setUserData] = useState(null);
  const [productCategory, setProductCategory] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchProductCategory();
  }, []);

  const handleSubmit = (e) =>{
    console.log(productSearchParam);
    
    descHist('/description');
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setUserData(response.data);
      console.log(response.data[0]);
    } catch (error) {
      console.error('Error fetching product List:', error);
    }
  }

  const fetchProductCategory = async () => {
    try {
      const Categoryresponse = await axios.get('https://fakestoreapi.com/products/categories');
      setProductCategory(Categoryresponse.data);
      console.log(Categoryresponse);
    } catch (error) {
      console.error('Error fetching product List:', error);
    }
  }

  return (
    <>
      {/* Base container Code Starts */}
      <div className='base-container'>
        <video src={VideoTrailer} autoPlay loop muted />
        <h1>Welcome to Shopify !!!</h1>
        <form className='product-search-container' onSubmit={handleSubmit}>
        <input type='text' onChange={(e)=>setProductSearchParam(e.target.value)} placeholder='Search for Product Here...' className='search-bar' value={productSearchParam}/>
            <button type="submit" className="btn-submit" >SEARCH</button>
          
        </form>
      </div>
      {/* Base Container Code Ends */}



      {/* Cards Container Code Starts */}
      {
        userData && (
          <div className='cards'>
            <h1>Check out these Amazing Products!</h1>
            <div className='cards-scroll-container'>
              <div className='cards__container'>
                <div className='cards__wrapper'>
                  <ul className='cards__items'>
                    {userData.map((product) => (
                      <CardItem
                        key={product.id}
                        src={product.image}
                        text={product.title}
                        label={product.category}
                        path='/description'
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {/* Cards Container Code Ends */}

      {/* Product Category Code Starts */}
      {
        productCategory && (
          <div className='cards'>
            <div className='cards__container'>
              <div className='cards__wrapper'>
                <ul className='cards__items'>
                  {productCategory.map((category) => (
                    <CardItem
                      src='images/image-10.jpg'
                      text={category}
                      label={category}
                      path='/'
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      {/* Product Category Code Ends */}

      {/* Footer Container Code Starts */}
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the Shopify newsletter to receive our best shopping deals
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Videos</h2>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                Shopify
                <i class="fa-brands fa-shopify" />
              </Link>
            </div>
            <small class='website-rights'>Shopify © 2023</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* Footer Container Code Ends */}
    </>

  )
}

export default Base
