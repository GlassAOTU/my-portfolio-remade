import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="w-auto min-h-screen p-5">
            <div className='flex flex-col max-w-3xl mx-auto space-y-6'>

                <nav className='space-x-12 py-8 text-sm'>
                    <Link href="/">Home</Link>
                    <Link href="/projects" className="text-stone-500 hover:text-stone-300 transition-all">Projects</Link>
                </nav>

                <section className="gap-6 flex flex-row">

                    <Image src="/pic.png" alt="picture of me" className='rounded-md' width={128} height={128} />

                    <div className='flex flex-col justify-evenly'>
                        <h1 className='text-2xl font-semibold'>Abaseen Khan</h1>
                        <div className='flex flex-row gap-5'>

                            {/* github link */}
                            <Link href="https://github.com/GlassAOTU/" target="_blank">
                                <svg width="20" height="20" className='fill-stone-500 hover:fill-stone-400 transition-all' viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="" /></svg>
                            </Link>

                            {/* linkedin link */}
                            <Link href="https://www.linkedin.com/in/abaseen-khan/" target="_blank">
                                <svg width="20" className='fill-stone-500 hover:fill-stone-400 transition-all' height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="" /></svg>
                            </Link>

                            {/* twitter link */}
                            <Link href="https://x.com/aotudev" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className='fill-stone-500 hover:fill-stone-400 transition-all' width="20" height="20" fill="none" viewBox="0 0 1200 1227"><path fill="" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" /></svg>
                            </Link>

                        </div>
                    </div>

                </section>

                <section className='flex flex-col gap-4'>

                    <p>
                        I’m a software developer with a focus on building web and mobile applications that balance clean design, solid engineering, and real-world usability.
                        Most of my projects pull from JavaScript frameworks, cloud infrastructure, and API-driven backends, with some exploration into AI features.
                    </p>
                    <p>
                        I’ve worked on a mix of personal projects and collaborations, ranging from community-driven tools to SaaS-style platforms and iOS apps. 
                        These have given me hands-on experience shipping complete products, handling everything from frontend interfaces to authentication, databases, and performance optimizations.
                    </p>
                    <p>
                        I’m always open to connecting about roles, collaborations, or just talking.
                        You can reach me at <Link href="mailto:arbaseen@gmail.com" className='underline'>arbaseen@gmail.com</Link> or through my socials if something I’m working on lines up with what you’re building.
                    </p>

                    <div className='text-sm flex gap-6'>

                        {/* resume button */}
                        <div className='flex flex-row gap-2'>
                            <Link href="/resume.pdf" rel="noopener noreferrer" target="_blank" className='outline px-6 py-2 rounded-md outline-stone-700 hover:bg-stone-300 hover:text-stone-700 transition-all flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle cx="12" cy="13" r="2" /></svg>
                                Resume
                            </Link>
                            <Link href="/resume.pdf" download className='outline px-3 py-2 rounded-md outline-stone-700 hover:bg-stone-300 hover:text-stone-700 transition-all flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='' width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                            </Link>
                        </div>

                        {/* projects button */}
                        <Link href="/projects" className='outline px-6 py-2 rounded-md outline-stone-700 hover:bg-stone-300 hover:text-stone-700 transition-all flex items-center gap-2'>
                            Projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </Link>

                    </div>

                </section>

                <section className='space-y-3'>
                    <h1 className='text-xl'>Latest Updates</h1>
                    <p>Coming soon.</p>
                </section>

            </div>
        </main>
    )
}