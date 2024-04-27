import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='text-center my-40'>
      <h1 className='text-9xl font-bold font-robo text-red-500 mb-8'>Error</h1>
      <h2 className='text-5xl font-semibold '>404 does not Exists</h2>
      <Link to='/'>
        <button
          type='button'
          className='px-8 py-3 mt-8 font-semibold  rounded-lg border-gray-200 text-gray-800 border-2 '>
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
