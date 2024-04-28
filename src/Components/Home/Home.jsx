import { Link, useLoaderData } from "react-router-dom";
import Slides from "../Slides/Slides";

const Home = () => {
  const items = useLoaderData();
  return (
    <div>
      <h1 className='text-center'>
        Welcome to Our Exciting Art & Craft Site.{" "}
      </h1>
      <Slides></Slides>
      <div className='mt-24'>
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
                      <div className='card-body'>
                        <h2 className='card-title'>{item.itemName}</h2>
                        <p>{item.price}</p>
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
    </div>
  );
};

export default Home;
