import Image from "next/image"

export default function BentoPage() {
    return (
        <main className="w-auto min-h-screen p-5">
            <div className='flex flex-col max-w-3xl mx-auto space-y-6'>

                <nav className='space-x-12 py-8 text-sm'>
                    <a href="/" className="text-stone-500 hover:text-stone-300 transition-all">Home</a>
                    <a href="/projects" className="text-stone-300">Projects</a>
                </nav>

                <Image src="/branding/bento/bento-header.png" alt="bento anime header" width={1451} height={648} className="rounded-md" />

                <section className="gap-6 flex flex-row">
                    <div className='flex flex-col justify-evenly'>
                        <h1 className='text-2xl font-semibold'>Bento Anime</h1>
                        <p className="text-stone-400">bentoanime.com</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4'>

                    <p>BentoAnime was built out of a personal frustration: there are thousands of anime titles out there, but existing platforms make discovery overwhelming and cluttered. I wanted a space that surfaces relevant recommendations quickly, with tools that make it easier to decide what to watch without endless scrolling.</p>

                    <Image src="/branding/bento/bento-search.png" className="rounded-md" alt="screenshot of the site functionality" width={917} height={187} />

                    <p>The platform offers personalized filters by genre, mood, and popularity, and also includes a chatbot that can answer questions about shows while avoiding spoilers. Building it gave me hands-on experience with structuring API calls for efficient, constant use, and making sure the frontend stays fast and responsive.</p>

                    <Image src="/branding/bento/bento-tags.png" className="rounded-md" alt="screenshot of the site functionality" width={917} height={232} />

                    <p>BentoAnime is still growing, with plans to add a watch list, seen list, and richer features for tracking and managing viewing habits. The goal is to expand it into a more complete recommendation and tracking tool, while keeping the interface clean and focused on helping fans find their next series.</p>

                </section>

            </div>
        </main>
    )
}