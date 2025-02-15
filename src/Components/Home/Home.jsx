import { Link, useLoaderData } from "react-router-dom";
import Slides from "../Slides/Slides";
import AboutSection from "../AboutSection/AboutSection";
import CustomerReviewSection from "../CustomerReviewSection/CustomerReviewSection";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const items = useLoaderData();

  //loading start
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return (
      <div>
        <span className='loading loading-bars loading-lg'></span>
      </div>
    );
  }
  return (
    <div className=' mb:8'>
      <Slides></Slides>
      <AboutSection></AboutSection>
      {/* Crafted item section start  */}
      <div className='mt-24 mb-36'>
        <h1 className='text-center text-5xl font-bold my-8'>
          Our Best Collection.
        </h1>
        {/* <p>{items.length} </p> */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-9 border rounded-lg p-8'>
          {items.map(
            (item, idx) =>
              idx < 6 && (
                <>
                  <div>
                    <div className='card card-compact lg:mx-auto mx-6 bg-base-100 shadow-xl'>
                      <figure>
                        <img
                          className='h-[275px] w-[400px]'
                          src={item.imageUrl}
                          alt='Painting-xx'
                        />
                      </figure>
                      <div className='card-body '>
                        <h2 className='card-title'>{item.itemName}</h2>
                        <div className='flex gap-12 mb-4'>
                          <p>
                            <span className='font-semibold'>
                              sub-Category:{" "}
                            </span>
                            {item.subcategory}
                          </p>
                          <p>
                            <span className='font-semibold'>Rating: </span>
                            {item.rating}
                          </p>
                        </div>
                        {/* stock & category  */}
                        <div className='flex gap-12 mb-4'>
                          <p>
                            <span className='font-semibold'>Stock-stasus </span>
                            {item.stock}
                          </p>
                          <p>
                            <span className='font-semibold'>Price: </span>
                            {item.price}
                          </p>
                        </div>

                        <div className='card-actions justify-end'>
                          <Link to={`/items/${item._id}`}>
                            <button className='btn  bg-[#e8e5e5]'>
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
      {/* Crafted item section End  */}
      <CustomerReviewSection></CustomerReviewSection>
    </div>
  );
};

export default Home;
