import { Link, useLoaderData } from "react-router-dom";
import Slides from "../Slides/Slides";

const Home = () => {
  const items = useLoaderData();
  return (
    <div>
      <Slides></Slides>
      {/* Crafted item section started  */}
      <div className='mt-24 mb-36'>
        <h1 className='text-center text-5xl'>
          This is item craft section. Total Item: {items.length}{" "}
        </h1>
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
    </div>
  );
};

export default Home;
