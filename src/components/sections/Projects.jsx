import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    return (
        <section 
            id="projects" 
            className="min-h-screen py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 
                        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                        My Projects
                    </h2>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  */}
                    <div className="flex flex-col gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Fitness Tracker</h3>
                            <p className="text-gray-400 mb-4">A web application for tracking daily weight, food consumption, and calorie goals.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Django", "Bootstrap", "SQLite"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://github.com/minhphung152/fitness_app" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project → 
                                </a>

                                <a 
                                    href="https://github.com/minhphung152/fitness_app" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-400 hover:text-gray-300 transition-colors my-4"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Book Recommender</h3>
                            <p className="text-gray-400 mb-4">A semantic book recommender that uses machine learning and natural language processing to recommend books based on user input. It features a web-based dashboard built with Gradio for an interactive user experience.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "HuggingFace", "Langchain", "Gradio", "Chroma", "Pandas", "numPy"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://github.com/minhphung152/book-recommender" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project → 
                                </a>

                                <a 
                                    href="https://github.com/minhphung152/book-recommender" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-400 hover:text-gray-300 transition-colors my-4"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Tic Tac Toe</h3>
                            <p className="text-gray-400 mb-4">A full-stack multiplayer Tic Tac Toe game where users can play with friends.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Vite", "JavaScript", "TailwindCSS", "Node.js", "Express", "Socket.IO"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://github.com/minhphung152/tic-tac-toe" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project → 
                                </a>

                                <a 
                                    href="https://github.com/minhphung152/tic-tac-toe" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-400 hover:text-gray-300 transition-colors my-4"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}