import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://assigment10-type02-server.vercel.app/mycraft/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return (
    <div>
      <h1 className='text-center text-5xl font-bold text-gray-700 py-8'>
        My Art&Craft{" "}
      </h1>
      <div className=' grid grid-cols-3 gap-8'>
        {items.map((item) => (
          <>
            <div className='card card-compact w-96 bg-base-100 shadow-xl'>
              <figure>
                <img src={item.imageUrl} />
              </figure>
              <div className='card-body items-center'>
                <h2 key={item._id} className='card-title'>
                  {item.itemName}
                </h2>
                <h4 className='font-medium'>
                  <span className='font-semibold'>Sub-Category: </span>{" "}
                  {item.subcategory}
                </h4>
                {/* <p>{item.description}</p> */}
                {/* price  & Rating  */}
                <div className='flex gap-12'>
                  <p>
                    <span className='font-semibold'>Price: </span>
                    {item.price}
                  </p>
                  <p>
                    <span className='font-semibold'>Rating: </span>
                    {item.rating}
                  </p>
                </div>
                {/* Ccustomizatin , processing time  */}
                <div className='flex gap-12'>
                  <p>
                    <span className='font-semibold'>Customization: </span>
                    {item.customization}
                  </p>
                  <p>
                    <span className='font-semibold'>Processing-day: </span>
                    {item?.processingTime || "7"}
                  </p>
                </div>
                <h1 className='px-12 py-2 rounded-lg text-center bg-slate-400 text-white w-full text-xl font-medium my-4  '>
                  {item.stock}
                </h1>
                <div className='card-actions justify-between gap-12 '>
                  <Link to='/update'>
                    {" "}
                    <button className='btn px-9 '>Update</button>
                  </Link>
                  <Link to='/delete'>
                    <button className='btn '>Delete</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MyCraft;
