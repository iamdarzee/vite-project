export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Looking for a Junior Frontend Developer? I'm excited to learn, contribute, 
                        and grow with your team on meaningful projects.
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl transition-colors duration-300">
                        <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Send me a message</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your full name" 
                                    className="w-full border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="your.email@example.com" 
                                    className="w-full border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Message</label>
                                <textarea 
                                    placeholder="Tell me about your project or collaboration ideas..." 
                                    rows={6}
                                    className="w-full border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                            >
                                Send Message
                            </button>    
                        </form>
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get In Touch</h3>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                            Open to remote opportunities<br />
                                            Eager to join a development team<br />
                                            Ready to learn and contribute
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Website</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                                            <a href="https://iamdarzee.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                                iamdarzee.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                        <span className="text-2xl">✉️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">Email</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-lg">hello@iamdarzee.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300">
                            <img 
                                src="https://picsum.photos/seed/workspace/500/300"
                                alt="Development workspace"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}