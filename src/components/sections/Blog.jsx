import { RevealOnScroll } from '../RevealOnScroll';

export const Blog = () => {
    const blogPosts = [
        {
            title: "Open Source Software: Technical Benefits and the Ethics of Collaborative Programming",
            description: "Open source software is a type of software that is developed and maintained by a community of developers who collaborate to improve the code. This article explores the technical benefits of open source software and the ethics of collaborative programming.",
            link: "https://oss-technical-benefits-and-ethics.blogspot.com/2024/12/open-source-software-technical-benefits.html",
        },
        {
            title: "The Unreliability of AI Detection Tools",
            description: "AI detection tools are becoming increasingly popular in various industries, but they are not always reliable. This article discusses the limitations of AI detection tools and the potential consequences of relying on them.",
            link: "https://problem-with-ai.blogspot.com/2025/03/the-unreliability-of-ai-detection-tools.html",
        }
    ];

    return (
        <section
            id="blog"
            className="min-h-screen py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Check Out My Latest Blog Posts 📖
                    </h2>
                    <div className="flex flex-col gap-6">
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-400 mb-4">{post.description}</p>
                                <a 
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    Read More →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}