import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://assigment10-type02-server.vercel.app/mycraft/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  // delete function-----------------------------------------------

  const handleDelete = (_id) => {
    console.log("delete", _id);

    // sweet alert --------
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assigment10-type02-server.vercel.app/items/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // update ui
              const remaining = items.filter((item) => item._id !== _id);
              setItems(remaining);
            }
          });
        console.log("delete confirmed");
      }
    });
    // ---------------
  };

  return (
    <div className='mt-16 lg:mb-96'>
      <h1 className='text-center text-5xl font-bold text-gray-700 py-8'>
        My Art&Craft{" "}
      </h1>
      {isLoading ? (
        <div className='spinner'>
          <span className='loading loading-bars loading-lg'></span>
        </div>
      ) : (
        <div className=' grid lg:grid-cols-3 grid-cols-1 gap-8'>
          {items.map((item) => (
            <>
              <div className='card card-compact w-96 bg-base-100 shadow-xl hover:bg-base-200'>
                <figure className='w-full h-[350px] px-6 py-4 '>
                  <img className='w-full h-full' src={item.imageUrl} />
                </figure>
                <div className='card-body items-center relative'>
                  <h1 className='btn btn-xs absolute right-6 top-0'>
                    {item.stock}
                  </h1>
                  <h2 key={item._id} className='card-title mt-4'>
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
                      <span className='font-semibold'>Customization: </span>
                      {item.customization}
                    </p>
                  </div>
                  {/* rating , processing time  */}
                  <div className='flex  px-14   w-full  '>
                    <p>
                      <span className='font-semibold'>Rating: </span>
                      {item.rating}
                    </p>
                    <p>
                      <span className='font-semibold'>Processing-day: </span>
                      {item?.processingTime || "7"}
                    </p>
                  </div>

                  <>
                    <div className='card-actions justify-between gap-6 my-4  '>
                      <Link to={`/update/${item._id}`}>
                        {" "}
                        <button className='btn btn-sm  bg-green-600 hover:bg-green-800 text-white '>
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className='btn btn-sm bg-red-500 hover:bg-red-800 text-white '>
                        Delete
                      </button>
                    </div>
                  </>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCraft;
