const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Former event photographer with 10+ years experience. Passionate about making events more memorable.',
    image: '👩‍💼'
  },
  {
    name: 'Mike Chen',
    role: 'CTO',
    bio: 'Tech innovator who built the real-time photo sharing platform. Expert in scalable web technologies.',
    image: '👨‍💻'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Creative director focused on user experience. Loves creating intuitive interfaces for event technology.',
    image: '👩‍🎨'
  },
  {
    name: 'David Kim',
    role: 'Customer Success',
    bio: 'Ensures every event runs smoothly. Works directly with clients to deliver exceptional experiences.',
    image: '👨‍💼'
  }
];

const milestones = [
  { year: '2020', event: 'Company founded with vision to revolutionize event photography' },
  { year: '2021', event: 'Launched first version with 100+ successful events' },
  { year: '2022', event: 'Expanded to enterprise clients and added advanced features' },
  { year: '2023', event: 'Reached 10,000+ events and global expansion' },
  { year: '2024', event: 'Introduced AI-powered photo enhancement and real-time analytics' }
];

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About RC Landing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to capture and share the world's most precious moments through innovative photo technology.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                At RC Landing, we believe every moment deserves to be captured and shared. Our platform makes it easy for
                event organizers and guests to create lasting memories together. From weddings to corporate events,
                we're here to transform how people experience and remember special occasions.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">The passionate people behind RC Landing</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600">Key milestones in our growth</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pr-8 md:pr-12' : 'pl-8 md:pl-12'}`}>
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                            {milestone.year}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{milestone.year}</h3>
                        </div>
                        <p className="text-gray-600">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  🌟
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">We constantly push boundaries to create better experiences for our users.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">We build technology that brings people together and creates connections.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                  ✨
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">We strive for perfection in every aspect of our product and service.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}