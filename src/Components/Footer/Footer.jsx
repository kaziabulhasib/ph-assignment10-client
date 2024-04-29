import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className='bg-gray-700 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <h2 className='text-lg font-semibold mb-2'>Brushify</h2>
            <p className='text-gray-300'>Discover the beauty of art.</p>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-2'>Contact Us</h2>
            <div className='flex items-center mb-2 text-gray-300'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
              <p>info@brushify.com</p>
            </div>
            <div className='flex items-center text-gray-300'>
              <FontAwesomeIcon icon={faPhone} className='mr-2' />
              <p>(123) 456-7890</p>
            </div>
          </div>

          <div>
            <h2 className='text-lg font-semibold mb-2'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition duration-300'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition duration-300'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition duration-300'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <hr className='my-4 border-gray-600' />
        <p className='text-gray-400 text-center'>
          © 2024 Brushify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
