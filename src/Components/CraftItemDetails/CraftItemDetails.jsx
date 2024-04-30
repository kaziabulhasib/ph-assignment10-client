import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CraftItemDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const craftedItem = useLoaderData();
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
    <div>
      <div className='flex flex-col lg:flex-row  justify-between  py-14 gap-12 items-center lg:mb-32 lg-8'>
        <div className='p-16 bg-[#1313130D] flex justify-center items-center rounded-2xl flex-1'>
          <img
            className='w-[425px] lg:h-[565px]'
            src={craftedItem.imageUrl}
            alt=''
          />
        </div>
        <div className='flex-1 text-center lg:text-left space-y-8 lg:mx-auto mx-4'>
          <h1 className=' text-2xl  lg:text-4xl  font-bold'>
            {craftedItem.itemName}
          </h1>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'>subcategory:</span>{" "}
            {craftedItem.subcategory}
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'>customization:</span>{" "}
            {craftedItem.customization}
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'> Stock-status:</span>{" "}
            <span className='capitalize'>{craftedItem.stock}</span>{" "}
          </p>
          <p>
            {" "}
            <span className='font-bold'>Description: </span>{" "}
            {craftedItem.description}
          </p>

          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'>Rating:</span> {craftedItem.rating}
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'> Price: </span> {craftedItem.price}
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'> Processing Time: </span>{" "}
            {craftedItem.processingTime || "7"} days
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'> UserName: </span>{" "}
            {craftedItem.userName}
          </p>
          <p className='nav-font font-medium'>
            {" "}
            <span className='font-bold'> UserEmail: </span> {craftedItem.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CraftItemDetails;
