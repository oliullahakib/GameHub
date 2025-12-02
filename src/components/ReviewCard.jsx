import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    return (
        <div className="card card-border bg-base-100 ">
  <div className="card-body">
    <h2 className="card-title">{review.username}</h2>
    <p className='flex items-center gap-1'><FaStar/> {review.rating}</p>
    <p>{review.comment}</p>
    
  </div>
</div>
    );
};

export default ReviewCard;