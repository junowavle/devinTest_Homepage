// WAVLE is Possible section component
import { ArrowRight } from 'lucide-react';

// WavlePossible section showcasing company capabilities
export const WavlePossible = () => {
  return (
    // Main section container with dark background
    <section className="py-20 px-4 bg-zinc-900">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-green-400 text-2xl font-bold mb-4">
            WAVLE is Possible
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            아이디어만 있어도 가능합니다.
          </h3>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Idea card */}
          <div className="bg-black p-8 rounded-lg hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-xl font-bold text-white mb-4">
              아이디어가 있으신가요?
            </h4>
            <p className="text-gray-400 mb-4">
              새로운 혹은 혁신적인 아이디어가 있으신가요?
              <br />
              거창한 와이어프레임, 사업계획서가 없어도 가능합니다.
            </p>
            <ArrowRight className="text-green-400" size={24} />
          </div>

          {/* Support card */}
          <div className="bg-black p-8 rounded-lg hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h4 className="text-xl font-bold text-white mb-4">
              구체적이지 않아도 괜찮습니다.
            </h4>
            <p className="text-gray-400 mb-4">
              WAVLE Studio는 함께 고민하고 실체화합니다.
              <br />
              빛나는 아이디어를 함께 도와드리겠습니다.
            </p>
            <ArrowRight className="text-green-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};
