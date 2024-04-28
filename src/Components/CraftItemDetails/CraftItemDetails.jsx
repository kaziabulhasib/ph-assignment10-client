import { useLoaderData } from "react-router-dom";

const CraftItemDetails = () => {
  const craftedItem = useLoaderData();
  return (
    <div>
      <h1>update info of {craftedItem.itemName}</h1>
    </div>
  );
};

export default CraftItemDetails;
