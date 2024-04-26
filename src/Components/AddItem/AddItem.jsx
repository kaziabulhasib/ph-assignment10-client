const AddItem = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemName = form.item_name.value;
    const price = form.price.value;
    const item = { itemName, price };
    console.log(item);
    form.reset();

    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className='max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Add Craft Item</h1>
      <form onSubmit={handleAddItem}>
        <div className='mb-4 form-control'>
          <label
            className='block text-sm font-semibold mb-2'
            htmlFor='item_name'>
            Item Name
          </label>
          <input
            type='text'
            id='item_name'
            name='item_name'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb- form-control'>
          <label className='block text-sm font-semibold mb-2' htmlFor='image'>
            Price
          </label>
          <input
            type='text'
            id='price'
            name='price'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
