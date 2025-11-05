import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Event Photography: Real-Time Sharing',
    excerpt: 'Discover how real-time photo sharing is revolutionizing the way we capture and experience events.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Technology',
    image: '📸'
  },
  {
    id: 2,
    title: '10 Tips for Organizing Memorable Corporate Events',
    excerpt: 'Learn the secrets to creating engaging corporate events that your employees will never forget.',
    author: 'Mike Chen',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Events',
    image: '🏢'
  },
  {
    id: 3,
    title: 'Wedding Photography in the Digital Age',
    excerpt: 'How modern couples are using technology to capture and share their special day like never before.',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Weddings',
    image: '💒'
  },
  {
    id: 4,
    title: 'The Psychology of Event Memories',
    excerpt: 'Understanding why shared photo experiences create stronger, more lasting memories.',
    author: 'David Kim',
    date: '2023-12-28',
    readTime: '8 min read',
    category: 'Psychology',
    image: '🧠'
  },
  {
    id: 5,
    title: 'Scaling Event Technology for Enterprise Clients',
    excerpt: 'How large organizations are adopting photo sharing technology for their events.',
    author: 'Sarah Johnson',
    date: '2023-12-20',
    readTime: '10 min read',
    category: 'Business',
    image: '📈'
  },
  {
    id: 6,
    title: 'Privacy and Security in Event Photo Sharing',
    excerpt: 'Ensuring your guests\' photos are safe and secure with modern privacy practices.',
    author: 'Mike Chen',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Security',
    image: '🔒'
  }
];

const categories = ['All', 'Technology', 'Events', 'Weddings', 'Psychology', 'Business', 'Security'];

export default function Blog() {
  return (
    <div className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              RC Landing Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and stories from the world of event photography and technology.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-6">{blogPosts[0].image}</div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{blogPosts[0].category}</span>
                    <span>{blogPosts[0].date}</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {blogPosts[0].author.charAt(0)}
                    </div>
                    <span className="text-gray-700 font-medium">By {blogPosts[0].author}</span>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-700">{post.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center bg-gray-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insights on event technology, photography tips, and industry trends delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}