export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Junior Developer Journey
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
                        Learning and building with React, Tailwind CSS, and modern web technologies. Ready to contribute and grow!
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                        Explore Features
                    </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-10 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 text-center">
                        <div className="text-6xl mb-6">🚀</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">React Fundamentals</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Learning React components, hooks, and state management while building practical projects
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 text-center">
                        <div className="text-6xl mb-6">🔒</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Mobile-First Design</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Developing responsive, accessible websites with CSS Grid, Flexbox, and modern frameworks
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 text-center">
                        <div className="text-6xl mb-6">💡</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Best Practices</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Learning to write clean, maintainable code while following industry standards and conventions
                        </p>
                    </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
                    <img 
                        src="https://picsum.photos/seed/platform/1200/500"
                        alt="Platform showcase"
                        className="w-full h-96 object-cover"
                    />
                </div>
                
                <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-16 rounded-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Learn & Contribute?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                        Excited to join a team and contribute to meaningful projects. Let's build something great together!
                    </p>
                    <a href="https://iamdarzee.com" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg inline-block">
                        Visit My Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
}