// WavleNumberOne section component showcasing company achievements
import { Button } from '../ui/button';

// WavleNumberOne section component implementation
export const WavleNumberOne = () => {
  return (
    // Main section container with dark background
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        {/* Section header with title and description */}
        <div className="text-center mb-16">
          <h2 className="text-green-400 text-2xl font-bold mb-4">
            WAVLE is Number One
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            웨이블은 프리모아
            <br />
            3만 개 중 1위 개발사입니다.
          </h3>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            프리모아 3만 개 개발사 중 1위 개발사입니다.
            <br />
            다양한 프로젝트로 쌓아온 탄탄한 경험을 바탕으로
            <br />
            믿음직한 파트너로서 성공적인 결과를 보장합니다.
          </p>
        </div>

        {/* Call to Action button section */}
        <div className="text-center">
          <a
            href="https://open.kakao.com/o/sPaavF4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg" className="button-hover bg-green-400 hover:bg-green-500 text-black font-bold">
              프로젝트 문의하기
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
