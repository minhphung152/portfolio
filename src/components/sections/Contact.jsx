import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
    return (
        <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 
                        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                        Connect with Me
                    </h2>
                    {/* <form className="space-y-6">
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className=" w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."/>
                        </div>

                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className=" w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"/>
                        </div>

                        <div className="relative">
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                rows={5}
                                className=" w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."/>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form> */}
                </div>

                <div className="mt-8 flex justify-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/minhvphung/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-blue-500 transition hover:-translate-y-1"
                    >
                        <FaLinkedin size={24} />
                    </a>

                    <a
                        href="https://github.com/minhphung152"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-blue-500 transition hover:-translate-y-1"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </RevealOnScroll>
        </section>
    )
}