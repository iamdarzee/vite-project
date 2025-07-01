export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">About DARZEE</h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Junior Frontend Developer passionate about creating beautiful, functional web experiences 
                        with modern technologies and best practices.
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                As a Junior Frontend Developer, I'm passionate about learning and growing in web development. 
                                I'm eager to contribute to projects while expanding my skills in modern technologies.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Skills</h3>
                            <ul className="text-gray-600 dark:text-gray-300 text-lg space-y-3">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                                    Learning React.js & JavaScript ES6+
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                                    Building with Tailwind CSS & Responsive Design
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                                    Practicing Git & Collaborative Development
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-4"></span>
                                    Solid foundation in HTML5 & CSS3
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img 
                            src="https://picsum.photos/seed/developer/600/400"
                            alt="Frontend development workspace"
                            className="rounded-2xl shadow-2xl w-full"
                        />
                    </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12 text-center transition-colors duration-300">
                    <h3 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">My Focus Areas</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-600 p-8 rounded-xl shadow-lg transition-colors duration-300">
                            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">React</div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Component Development</p>
                        </div>
                        <div className="bg-white dark:bg-gray-600 p-8 rounded-xl shadow-lg transition-colors duration-300">
                            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">CSS</div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Responsive Design</p>
                        </div>
                        <div className="bg-white dark:bg-gray-600 p-8 rounded-xl shadow-lg transition-colors duration-300">
                            <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">JS</div>
                            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Modern JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}