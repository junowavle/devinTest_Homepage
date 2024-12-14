// PriceGuide section component showcasing pricing tiers
import { Button } from '../ui/button';

// Interface for pricing tier data structure
interface PricingTier {
  name: string;
  price: string;
  unit: string;
  features: string[];
}

// Pricing tiers configuration data
const pricingTiers: PricingTier[] = [
  {
    name: 'MVP',
    price: '1,000-2,000',
    unit: '만 원',
    features: [
      '약 20-30 페이지 UI',
      '이메일/소셜 로그인',
      '커뮤니티/채팅 시스템 포함',
      'Admin Console 포함',
      'UI Design Template 사용',
    ],
  },
  {
    name: 'START-UP',
    price: '2,000-4,000',
    unit: '만 원',
    features: [
      '약 30-40 페이지 UI',
      'MVP 포함',
      'PG 결제 / 중개+정산',
      '역경매 / 매칭 / 추천 시스템 등',
      'Admin Console 포함',
      '서브 Admin Console 진행 가능',
    ],
  },
  {
    name: 'ENTERPRISE',
    price: '4,000',
    unit: '만 원 ~',
    features: [
      '50 페이지 이상 UI',
      '양방향 화상 시스템',
      '실시간 채팅 및 읽음 확인 기능',
      '채팅 메세지 회수 등',
      '양방향 화이트보드 회의 시스템',
      '인공지능 기반 추천 시스템',
    ],
  },
];

// PriceGuide section component implementation
export const PriceGuide = () => {
  return (
    // Main section container with dark background
    <section className="py-20 px-4 bg-zinc-900">
      <div className="container mx-auto">
        {/* Section header with title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Price Guide
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            개발 견적 금액 가이드
          </h3>
        </div>

        {/* Pricing tiers grid layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-black p-8 rounded-lg hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h4 className="text-2xl font-bold text-white mb-6">
                {tier.name}
              </h4>
              <div className="mb-8">
                <span className="text-4xl font-bold text-green-400">
                  {tier.price}
                </span>
                <span className="text-white ml-2 text-xl">{tier.unit}</span>
              </div>
              <ul className="text-gray-400 space-y-4 text-lg">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action button section */}
        <div className="text-center">
          <a
            href="https://open.kakao.com/o/sPaavF4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" size="lg" className="button-hover bg-green-400 hover:bg-green-500 text-black font-bold">
              바로 견적 문의하기
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
