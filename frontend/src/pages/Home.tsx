// Home page component containing all main sections
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { HELLO_QUERY } from '../graphql/queries';
import { WavlePossible } from '../components/sections/WavlePossible';
import { WavleNumberOne } from '../components/sections/WavleNumberOne';
import { PriceGuide } from '../components/sections/PriceGuide';

// Array of skills for the scrolling ticker
const skills = [
  'UI Design', 'UX Design', 'Business Consulting', 'Swift',
  'Kotlin', 'Java', 'React.js', 'Node.js', 'Financing'
];

// Home page component implementation
export const Home = () => {
  // State for animated text in hero section
  const [isVisible, setIsVisible] = useState(true);

  // Query hello message from backend
  const { loading, error, data } = useQuery(HELLO_QUERY);

  // Animation effect for hero text
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with animated text */}
      <section className="h-screen flex flex-col justify-center items-center px-4 relative">
        <div className="text-center max-w-6xl mx-auto">
          {/* GraphQL connection status */}
          {loading && <p className="text-gray-400 mb-4">Loading...</p>}
          {error && <p className="text-red-400 mb-4">Error: {error.message}</p>}
          {data?.hello?.message && (
            <p className="text-green-400 mb-4 text-lg">{data.hello.message}</p>
          )}

          {/* Main heading with animation */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-16 leading-tight transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-50'}`}>
            <span className="text-green-400 block mb-4">WHATEVER YOU WANT,</span>
            <span className="block">WE BRING TO REALITY</span>
          </h1>

          {/* Scrolling skills ticker */}
          <div className="overflow-hidden whitespace-nowrap mt-8">
            <div className="animate-marquee">
              {skills.map((skill, index) => (
                <span key={index} className="text-lg md:text-xl">
                  {skill}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {skills.map((skill, index) => (
                <span key={`dup-${index}`} className="text-lg md:text-xl">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction section with Korean text */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Heeeello<br />We are WAVLE<br />Digit@l Agency
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 kr-text leading-relaxed">
            우리는 고객의 생각을 더하고 연결합니다.
            <br />
            우리는 가치있는 경험을 선사하는 서비스를
            <br />
            고객과 함께 만들어갑니다.
          </p>
        </div>
      </section>

      {/* Additional sections */}
      <WavlePossible />
      <WavleNumberOne />
      <PriceGuide />
    </div>
  );
};
