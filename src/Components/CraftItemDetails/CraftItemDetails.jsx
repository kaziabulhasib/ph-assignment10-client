import { useLoaderData } from "react-router-dom";

const CraftItemDetails = () => {
  const craftedItem = useLoaderData();
  return (
    <div>
      <h1>update info of {craftedItem.itemName}</h1>
      <h1 className='text-xl my-6 text-red-400'>
        Description: {craftedItem.description}
      </h1>
      <h1 className='text-3xl text-center my-6'>
        User: {craftedItem.userName}
      </h1>
    </div>
  );
};

export default CraftItemDetails;
