import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const handleClick = () => {
    if (props.product) {
      localStorage.setItem('Title', JSON.stringify(props.product));
    } else if (props.category) {
      localStorage.setItem('SelectedCategory', props.label);
    }
  };

  return (
    <li className='cards__item'>
      <Link
        className='cards__item__link'
        to={props.product ? `/description?id=${props.path}` : `/product-view/${props.label}`}
        onClick={handleClick}
      >
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt='Shopping carts'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
