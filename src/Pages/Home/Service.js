import React from 'react';

const Service = ({service}) => {
  const {name, image, price, describe} = service
  return (
    <div className='mt-5'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <h2 class="card-title">Price: {price}tk</h2>
          <p>{describe}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;