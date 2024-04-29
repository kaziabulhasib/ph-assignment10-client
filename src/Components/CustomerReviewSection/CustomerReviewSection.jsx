const CustomerReviewSection = () => {
  return (
    <section className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Our happy Customers
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto'>
          {/* Customer Review Card 1 */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/public/male1.jpg'
              alt='Customer 1'
              className='w-48 h-48 mx-auto mt-6 rounded-full'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>John Doe</h3>
              <p className='text-gray-700'>
                "I'm absolutely in love with the watercolor paintings I bought
                from Brushify. Each piece is so vibrant and full of life, it
                truly brings joy to my home!"
              </p>
            </div>
          </div>
          {/* Customer Review Card 2 */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/public/male2.jpg'
              alt='Customer 2'
              className='w-48 h-48 mx-auto mt-6 rounded-full'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Jane Smith</h3>
              <p className='text-gray-700'>
                "The charcoal sketches I purchased are simply breathtaking.
                Brushify has a knack for capturing emotion and depth in every
                piece. Highly recommended!"
              </p>
            </div>
          </div>
          {/* Customer Review Card 3 */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/public/female.jpg'
              alt='Customer 3'
              className='w-48 h-48 mx-auto mt-6 rounded-full'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Emily Johnson</h3>
              <p className='text-gray-700'>
                "I stumbled upon Brushify while searching for unique artwork,
                and I'm so glad I did! The pencil sketches I received exceeded
                my expectations. They add a touch of elegance to my space."
              </p>
            </div>
          </div>
          {/* Customer Review Card 4 */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src='/public/male3.jpg'
              alt='Customer 4'
              className='w-48 h-48 mx-auto mt-6 rounded-full'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Michael Williams</h3>
              <p className='text-gray-700'>
                "Brushify is my go-to destination for finding unique and
                high-quality artworks. The oil paintings I purchased are
                absolutely stunning and have become the centerpiece of my
                collection. Thank you for the excellent service!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
