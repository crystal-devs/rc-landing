import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { PricingCard } from "@/components/PricingCard";
import { pricingFaqs } from "@/datas/pricingFaqs";

const pricingPlans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'Perfect for small events and personal use',
    features: [
      'Up to 100 photos per event',
      'Basic sharing options',
      'Email support',
      'Mobile app access'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$29',
    period: '/month',
    description: 'Ideal for medium-sized businesses and events',
    features: [
      'Unlimited photos per event',
      'Advanced sharing & analytics',
      'Priority support',
      'Custom branding',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations and high-volume events',
    features: [
      'Everything in Professional',
      'White-label solution',
      'Dedicated account manager',
      'Custom integrations',
      '24/7 phone support'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pick the plan that suits you best
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your event photo sharing needs. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.popular ? 'border-orange-500 shadow-orange-100' : 'border-gray-200'
                } p-8 hover:shadow-xl transition-shadow duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.popular
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div> */}
        <PricingCard />
        <ComparisonTable />
        {/* FAQ Section */}
        <FAQSection faqs={pricingFaqs} />


      </div>
    </div>
  );
}