import Image from 'next/image';

export default function ProjectsPage() {
    return (
        <main className="w-auto min-h-screen p-5">
            <div className='flex flex-col max-w-3xl mx-auto space-y-6'>

                <nav className='space-x-12 py-8 text-sm'>
                    <a href="/" className="text-stone-500 hover:text-stone-300 transition-all">Home</a>
                    <a href="/projects">Projects</a>
                </nav>

                {/* web apps */}
                <section>
                    <h1 className="text-2xl font-semibold mb-10">Web Applications</h1>

                    {/* layout for the cards */}
                    <div className="grid gap-6 md:grid-cols-2">

                        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                        {/* card for cream bakery */}
                        <div className="rounded-md outline outline-stone-700 overflow-hidden h-full flex flex-col min-h-[400px]">

                            {/* image section */}
                            <Image
                                src="/branding/cream/creambakery-header-preview.png"
                                alt="mini preview of cream bakery"
                                width={726}
                                height={324}
                            />

                            {/* text section */}
                            <div className='p-5 gap-3 h-full flex flex-col justify-between'>

                                <div className='flex flex-col gap-3'>
                                    {/* header */}
                                    <h2 className='text-xl font-semibold'>Cream Bakery</h2>

                                    {/* description */}
                                    <p className='text-sm text-stone-400'>
                                        Building a full-stack platform for custom bakery orders with product catalog, dynamic forms, cart/checkout, and an admin dashboard.
                                        Building with scalability in mind, with the potential to support multiple bakeries.
                                    </p>

                                    {/* tags */}
                                    <div className='flex flex-wrap gap-2 text-sm'>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Next.js</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Typescript</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Auth0</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>PostgreSQL</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Prisma</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Stripe</p>
                                    </div>
                                </div>

                                {/* relevant links */}
                                <div className='flex gap-3'>
                                    <a href="/projects/cream" className='flex-1 text-center outline outline-stone-700/50 py-0.5 rounded hover:bg-stone-300 hover:text-stone-700 transition-all'>Learn more</a>
                                    {/* <a href="/" className='flex-1 text-center outline outline-stone-700/50 py-0.5 rounded hover:bg-stone-300 hover:text-stone-700 transition-all flex flex-row items-center justify-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                        Visit
                                    </a> */}
                                </div>
                            </div>
                        </div>

                        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                        {/* card for bento */}
                        <div className="rounded-md outline outline-stone-700 overflow-hidden h-full flex flex-col min-h-[400px]">

                            {/* image section */}
                            <Image
                                src="/branding/bento/bento-header-preview.png"
                                alt="mini preview of bento anime"
                                width={726}
                                height={324}
                            />

                            {/* whole text section */}
                            <div className='p-5 gap-3 h-full flex flex-col justify-between'>

                                <div className='flex flex-col gap-3'>
                                    {/* header */}
                                    <h2 className='text-xl font-semibold'>Bento Anime</h2>

                                    {/* description */}
                                    <p className='text-sm text-stone-400'>
                                        A personalized anime recommendation platform that helps fans discover their next watch through filters like genre, mood, and popularity.
                                        Built with a modern stack, it offers fast browsing and a clean, minimalist UI centered on anime cover art.
                                    </p>

                                    {/* tags */}
                                    <div className='flex flex-wrap gap-2 text-sm'>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Next.js</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Typescript</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>GraphQL</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>OpenAI</p>
                                    </div>
                                </div>

                                {/* relevant links */}
                                <div className='flex gap-3'>
                                    <a href="/projects/bento" className='flex-1 text-center outline outline-stone-700/50 py-0.5 rounded hover:bg-stone-300 hover:text-stone-700 transition-all'>Learn more</a>
                                    <a href="https://www.bentoanime.com/" target="_blank" className='flex-1 text-center outline outline-stone-700/50 py-0.5 rounded hover:bg-stone-300 hover:text-stone-700 transition-all flex flex-row items-center justify-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                        Visit
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                        {/* card for neighborhoodpins */}
                        <div className="rounded-md outline outline-stone-700 overflow-hidden h-full flex flex-col min-h-[400px]">

                            {/* image section */}
                            <Image
                                src="/branding/neighborhoodpins/neighborhoodpins-header-preview.png"
                                alt="mini preview of neighborhood pins"
                                width={726}
                                height={324}
                            />

                            {/* text section */}
                            <div className='p-5 gap-3 h-full flex flex-col justify-between'>

                                <div className='flex flex-col gap-3'>
                                    {/* header */}
                                    <h2 className='text-xl font-semibold'>NeighborhoodPins</h2>

                                    {/* description */}
                                    <p className='text-sm text-stone-400'>
                                        A community-driven web app for reporting and tracking local road issues through a live map.
                                        Users can pin potholes, hazards, and other concerns while accessing real-time updates and an intuitive, location-based interface.
                                    </p>

                                    {/* tags */}
                                    <div className='flex flex-wrap gap-2 text-sm'>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Next.js</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Typescript</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>PostgreSQL</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Auth0</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Mapbox</p>
                                    </div>
                                </div>

                                {/* relevant links */}
                                <div className='flex gap-3'>
                                    <a href="/projects/neighborhoodpins" className='flex-1 text-center outline outline-stone-700/50 py-0.5 rounded hover:bg-stone-300 hover:text-stone-700 transition-all'>Learn more</a>
                                    <a href="https://www.neighborhoodpins.com/" target="_blank" className='flex-1 text-center outline outline-stone-700/50 py-0.5 rounded hover:bg-stone-300 hover:text-stone-700 transition-all flex flex-row items-center justify-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                                        Visit
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                    </div>
                </section>


                <section className='mt-6'>
                    <h1 className="text-2xl font-semibold mb-10">iOS Applications</h1>

                    {/* layout for the cards */}
                    <div className="grid gap-6 md:grid-cols-2">

                        {/* card for stratus */}
                        <div className="rounded-md outline outline-stone-700 overflow-hidden h-full flex flex-col min-h-[400px]">

                            {/* image section */}
                            <Image
                                src="/branding/stratus/stratus-header-preview.png"
                                alt="mini preview of stratus"
                                width={726}
                                height={324}
                            />

                            {/* text section */}
                            <div className='p-5 gap-3 h-full flex flex-col justify-between'>

                                <div className='flex flex-col gap-3'>
                                    {/* header */}
                                    <h2 className='text-xl font-semibold'>Stratus</h2>

                                    {/* description */}
                                    <p className='text-sm text-stone-400'>
                                        An iOS app that creates ambient soundscapes and watercolor visuals synced to real-time weather conditions.
                                        Built with SwiftUI and MVVM, it integrates live weather data, geolocation, and on-device audio mixing, with support for favorites and recent searches.
                                    </p>

                                    {/* tags */}
                                    <div className='flex flex-wrap gap-2 text-sm'>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>Swift</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>SwiftUI</p>
                                        <p className='bg-stone-700/50 px-2 py-0.5 rounded-md'>SwiftData</p>
                                    </div>
                                </div>

                                {/* relevant links */}
                                <div className='flex gap-3'>
                                    <a href="/projects/stratus" className='flex-1 text-center outline outline-stone-700/50 py-0.5 rounded hover:bg-stone-300 hover:text-stone-700 transition-all'>Learn more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    )
}