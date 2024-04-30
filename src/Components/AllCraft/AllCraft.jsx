import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCraft = () => {
  const [isLoading, setIsLoading] = useState(true);
  const allCraftitems = useLoaderData();

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
    <div className='mt-16'>
      <h1 className='text-6xl font-bold text-center  text-gray-700 mb-8'>
        All Art & Craft
      </h1>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th>ItemName</th>
              <th>Subcategory </th>
              <th>Rating</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allCraftitems.map((item) => (
              <>
                <tr>
                  <td>{item.itemName}</td>
                  <td>{item.subcategory}</td>
                  <td>{item.rating}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/items/${item._id}`}>
                      <button className='btn ml-6'>View Details</button>
                    </Link>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
