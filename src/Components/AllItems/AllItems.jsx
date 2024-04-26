import { useLoaderData } from "react-router-dom";

const AllItems = () => {
  const items = useLoaderData();
  return (
    <div>
      <h1 className='text-center'>number of added items :{items.length} </h1>
    </div>
  );
};

export default AllItems;
