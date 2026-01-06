import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "Vue", "TypeScript", "JavaScript", "TailwindCSS", "HTML", "CSS"];
    const backendSkills = ["Node.js", "Express", "Python", "Django", "MongoDB", "PostgreSQL"];

    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"  
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Passionate developer with expertise in building scalable web
                            applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Open Source Experience */}
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Open Source Experience
                        </h3>

                        {/* Zulip */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold">Zulip (Oct 2024 - Present)</h4>
                                <a 
                                    href="https://github.com/zulip/zulip" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 px-3 py-1 rounded-md text-sm transition"
                                >
                                    View on GitHub
                                </a>
                            </div>
                            <p>
                                Contributed to the Zulip open-source project, an open-source team chat and collaboration platform with unique topic-based threading designed to
enhance real-time communication for distributed teams, by implementing new features and fixing bugs. 
                                Key contributions include:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
                                <li>
                                    <a 
                                        href="https://github.com/zulip/zulip/pull/34061" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-400 hover:text-blue-300 transition"
                                    >
                                        (PR #34061)
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://github.com/zulip/zulip/pull/33377" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-400 hover:text-blue-300 transition"
                                    >
                                        (PR #33377)
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://github.com/zulip/zulip/pull/35981" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-400 hover:text-blue-300 transition"
                                    >
                                        (PR #35981)
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://github.com/zulip/zulip/pull/33635" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-400 hover:text-blue-300 transition"
                                    >
                                        (PR #33635)
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* FarmData2 */}
                        <div className="mt-4">
                            <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold">FarmData2 (Sep 2023 - Dec 2023)</h4>
                                <a 
                                    href="https://github.com/DickinsonCollege/FarmData2" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 px-3 py-1 rounded-md text-sm transition"
                                >
                                    View on GitHub
                                </a>
                            </div>
                            <p>
                                Collaborated in a team of 3 developers to contribute to FarmData2, a web application designed to record and report on crop and livestock production for small organic farms.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                        {/* Education */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>B.S in Computer Science</strong> - Dickinson College (2021-2025)
                                </li>
                                <li>
                                    <strong>Relevant Coursework</strong>: Principles of Object-Oriented Design, Tools and Techniques for Software Development, Topic in Decision Science, Data Structures and Problem Solving, Analysis of Algorithms, Computability and Complexity, Database Systems, Data Mining, Computer Networks
                                </li>
                            </ul>
                        </div>

                        {/* Work Experience */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>

                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <li>
                                        <h4 className="font-semibold">Software Engineer at Dream Studio (9/2025 - 12/2025)</h4>
                                    </li>
                                </div>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <li>
                                        <h4 className="font-semibold">Software Engineer Intern at VNPT IT (6/2024 - 8/2024)</h4>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </RevealOnScroll>
        </section>
    )
}