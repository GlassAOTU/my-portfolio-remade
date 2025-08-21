import Image from "next/image"

export default function StratusAppPage() {
    return (
        <main className="w-auto min-h-screen p-5">
            <div className='flex flex-col max-w-3xl mx-auto space-y-6'>

                <nav className='space-x-12 py-8 text-sm'>
                    <a href="/" className="text-stone-500 hover:text-stone-300 transition-all">Home</a>
                    <a href="/projects" className="text-stone-300">Projects</a>
                </nav>

                <section className="gap-6 flex flex-row">
                    <div className='flex flex-col justify-evenly'>
                        <h1 className='text-2xl font-semibold'>Stratus</h1>
                        <p className="text-stone-400">Coming soon...</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4'>
                    <p>I'm designing and building Stratus, an iOS application that generates immersive ambient soundscapes based on real-time weather conditions. The app pairs watercolor-style backgrounds with dynamically layered audio that shifts with the weather and time of day, providing a calming, atmospheric experience. Users can search by location, save favorites, and revisit recent searches seamlessly.</p>
                    <p>The app is being developed in SwiftUI with an MVVM architecture, using SwiftData for persistence. Ambient sounds are mixed on-device rather than relying on pre-rendered files, reducing storage requirements while allowing flexible, real-time audio adaptation. Stratus brings together UI/UX design, API integration, and mobile performance optimization into a polished, ready-to-use app.</p>
                </section>

            </div>
        </main>
    )
}