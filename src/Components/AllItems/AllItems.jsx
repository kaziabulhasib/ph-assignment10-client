import { useLoaderData } from "react-router-dom";

const AllItems = () => {
  const items = useLoaderData();
  return (
    <div>
      <h1 className='text-center'>number of added items :{items.length} </h1>
      <div className='text-center'>
        {items.map((item) => (
          <p key={item._id}>
            {item.itemName}: {item.price}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
