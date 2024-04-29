import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutSection = () => {
  return (
    <section className='bg-white py-12'>
      <div className=' mx-auto px-4'>
        <div className='max-w-[1400px] text-center mx-auto bg-gray-100 p-8 rounded-lg shadow-lg'>
          <h2 className='text-3xl font-bold mb-0'>Brushify</h2>

          <p className='text-gray-600 mb-8 font-medium'>
            Bringing creativity to life
          </p>

          <p className='text-lg text-gray-800 mb-6'>
            Brushify is your destination for discovering and acquiring exquisite
            artworks. We specialize in offering a diverse range of paintings,
            including watercolor, charcoal, pencil sketch, oil painting, and
            more. Our journey began with a passion for art and a desire to
            showcase the talent of artists from around the world.
          </p>
          <p className='text-lg text-gray-800 mb-6'>
            Founded in 2021, Brushify has since grown into a platform where
            artists and art enthusiasts come together to explore, create, and
            appreciate art in all its forms. We invite you to browse through our
            curated collection of artworks and immerse yourself in the beauty of
            creativity.
          </p>
          <p className='text-2xl font-robo font-semibold text-slate-500'>
            Scroll down to discover our best collection and add a touch of
            artistry to your life.
          </p>
          <div className='flex justify-center'>
            <a className='text-black hover:text-slate-500 transition duration-300'>
              <FontAwesomeIcon
                icon={faHandPointDown}
                className='text-4xl mt-4'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
