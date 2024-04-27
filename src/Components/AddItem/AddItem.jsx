const AddItem = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemName = form.itemName.value;
    const imageUrl = form.imageUrl.value;

    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const userName = form.userName.value;
    const email = form.email.value;
    const item = {
      itemName,
      imageUrl,
      subcategory,
      description,
      price,
      rating,
      customization,
      stock,
      userName,
      email,
    };
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
        if (data.insertedId) {
          alert("item created successfully");
        }
      });
  };
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col '>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Add Item</h1>
        </div>
        <div className='card  shrink-0 w-full  shadow-2xl bg-base-100'>
          <form onSubmit={handleAddItem} className='card-body'>
            {/* item name , image url  */}
            <div className='flex gap-4'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Item Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Item Name'
                  className='input input-bordered'
                  name='itemName'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Image URL</span>
                </label>
                <input
                  type='url'
                  placeholder='Image URL'
                  className='input input-bordered'
                  name='imageUrl'
                  required
                />
              </div>
            </div>

            {/* sub category single  */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Subcategory Name</span>
              </label>
              <select
                className='input input-bordered'
                name='subcategory'
                required>
                <option value='landscape_painting'>Landscape Painting</option>
                <option value='portrait_drawing'>Portrait Drawing</option>
                <option value='watercolour_painting'>
                  Watercolour Painting
                </option>
                <option value='oil_painting'>Oil Painting</option>
                <option value='charcoal_sketching'>Charcoal Sketching</option>
                <option value='cartoon_drawing'>Cartoon Drawing</option>
              </select>
            </div>
            {/* description text area  */}
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Short Description</span>
              </label>
              <textarea
                className='textarea textarea-bordered h-24'
                placeholder='Short Description'
                name='description'
                required></textarea>
            </div>
            {/* price , rating  */}
            <div className='flex gap-4'>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Price</span>
                </label>
                <input
                  type='number'
                  placeholder='Price($)'
                  className='input  input-bordered'
                  name='price'
                  required
                />
              </div>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Rating</span>
                </label>
                <select className='input input-bordered' name='rating' required>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>
            </div>
            {/* Customization , stock  */}
            <div className='flex gap-4'>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Customization (yes/no)</span>
                </label>
                <select
                  className='input input-bordered'
                  name='customization'
                  required>
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
              </div>
              <div className='form-control w-full'>
                <label className='label'>
                  <span className='label-text'>Stock Status</span>
                </label>
                <select className='input input-bordered' name='stock' required>
                  <option value='in_stock'>In Stock</option>
                  <option value='made_to_order'>Made to Order</option>
                </select>
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Processing Time</span>
              </label>
              <input
                type='text'
                placeholder='Processing Time'
                className='input input-bordered'
                name='processing_time'
                required
              />
            </div>

            {/* user name & email  */}
            <div className='flex gap-4'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>User Email</span>
                </label>
                <input
                  type='email'
                  placeholder='User Email'
                  className='input input-bordered'
                  name='email'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>User Name</span>
                </label>
                <input
                  type='text'
                  placeholder='User Name'
                  className='input input-bordered'
                  name='userName'
                  required
                />
              </div>
            </div>

            <div className='form-control mt-6'>
              <input className='btn' type='submit' value='Add Item' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
