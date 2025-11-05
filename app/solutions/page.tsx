const solutions = [
  {
    title: 'Corporate Events',
    description: 'Transform company gatherings, conferences, and team-building events with interactive photo sharing.',
    icon: '🏢',
    benefits: [
      'Boost employee engagement',
      'Create lasting memories',
      'Enhance company culture',
      'Professional photo management'
    ],
    useCase: 'TechCorp used RC Landing for their annual conference, resulting in 500+ photos shared and 95% participant satisfaction.'
  },
  {
    title: 'Weddings',
    description: 'Capture every magical moment of your special day with real-time photo sharing for all guests.',
    icon: '💒',
    benefits: [
      'Instant photo sharing',
      'No app downloads needed',
      'Professional quality photos',
      'Easy guest participation'
    ],
    useCase: 'Sarah & Michael\'s wedding had 200 guests sharing photos, creating a beautiful digital memory book.'
  },
  {
    title: 'Birthday Parties',
    description: 'Make birthdays unforgettable with interactive photo walls that everyone can contribute to.',
    icon: '🎂',
    benefits: [
      'Fun family activities',
      'Instant photo memories',
      'Easy setup and management',
      'Customizable themes'
    ],
    useCase: 'Emma\'s sweet 16 party had guests sharing photos all night, creating over 300 memories in real-time.'
  },
  {
    title: 'Conferences & Trade Shows',
    description: 'Engage attendees and capture networking moments with professional event photo management.',
    icon: '🎤',
    benefits: [
      'Professional networking',
      'Lead generation through photos',
      'Brand visibility',
      'Attendee engagement analytics'
    ],
    useCase: 'Tech Summit 2024 captured 2000+ professional photos, helping attendees connect and network effectively.'
  },
  {
    title: 'School Events',
    description: 'Create lasting memories for prom, graduation, sports events, and school celebrations.',
    icon: '🎓',
    benefits: [
      'Safe photo sharing environment',
      'Parental controls available',
      'School-appropriate content',
      'Easy administration'
    ],
    useCase: 'Lincoln High\'s prom captured every dance move and group photo, with 98% of students participating.'
  },
  {
    title: 'Family Reunions',
    description: 'Bring families together with shared photo experiences that span generations.',
    icon: '👨‍👩‍👧‍👦',
    benefits: [
      'Multi-generational participation',
      'Easy photo organization',
      'Instant sharing across families',
      'Preserve family memories'
    ],
    useCase: 'The Johnson family reunion of 75 people created a beautiful timeline of memories from throughout the day.'
  }
];

export default function Solutions() {
  return (
    <div className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solutions for Every Event
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to large-scale events, RC Landing adapts to your needs and creates unforgettable photo experiences.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Success Story:</h4>
                  <p className="text-sm text-gray-600 italic">{solution.useCase}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Next Event?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of event organizers who have created amazing photo experiences with RC Landing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors duration-200">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-colors duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}