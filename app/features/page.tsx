const features = [
  {
    title: 'Real-time Photo Sharing',
    description: 'Guests can instantly upload and share photos during your event. No app downloads required - just scan a QR code and start sharing.',
    icon: '📸',
    steps: [
      'Display QR code at your event',
      'Guests scan and upload photos',
      'Photos appear instantly on the event wall'
    ]
  },
  {
    title: 'Interactive Photo Wall',
    description: 'Create a stunning visual display of all event photos. Guests can like, comment, and interact with the photo collection in real-time.',
    icon: '🖼️',
    steps: [
      'Photos automatically appear on the wall',
      'Guests can interact with photos',
      'Create memorable moments together'
    ]
  },
  {
    title: 'Easy Event Management',
    description: 'Set up your event in minutes with our intuitive dashboard. Customize themes, manage guest access, and monitor engagement.',
    icon: '⚙️',
    steps: [
      'Create event with custom settings',
      'Choose theme and branding',
      'Monitor real-time analytics'
    ]
  },
  {
    title: 'Instant Downloads',
    description: 'Guests can download their favorite photos immediately. Provide high-quality images that capture the perfect moments.',
    icon: '⬇️',
    steps: [
      'Photos available for instant download',
      'High-quality image delivery',
      'No waiting or processing delays'
    ]
  }
];

export default function Features() {
  return (
    <div className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your events with our simple 3-step process. Create unforgettable photo experiences that your guests will love.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-4">How it works:</h4>
                  {feature.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {stepIndex + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Amazing Photo Experiences?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of event organizers who trust RC Landing to capture and share their most memorable moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl transition-colors duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}