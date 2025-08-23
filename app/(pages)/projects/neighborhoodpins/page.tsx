import Image from "next/image"
import Link from "next/link"

export default function NeighborhoodPinsPage() {
    return (
        <main className="w-auto min-h-screen p-5">
            <div className='flex flex-col max-w-3xl mx-auto space-y-6'>

                <nav className='space-x-12 py-8 text-sm'>
                    <Link href="/" className="text-stone-500 hover:text-stone-300 transition-all">Home</Link>
                    {/* <Link href="/projects" className="text-stone-300">Projects</Link> */}
                </nav>

                <Image src="/branding/neighborhoodpins/neighborhoodpins-map.png" alt="neighborhoodpins header" width={1451} height={648} className="rounded-md" />

                <section className="gap-6 flex flex-row">
                    <div className='flex flex-col justify-evenly'>
                        <h1 className='text-2xl font-semibold'>NeighborhoodPins</h1>
                        <p className="text-stone-400">neighborhoodpins.com</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4'>

                    <p>{"NeighborhoodPins was designed as a real utility, inspired by Waze’s community traffic reports. The goal is to give local residents an easy way to surface and track road issues like potholes and hazards, making it possible to share updates directly on a live, community map."}</p>

                    <Image src="/branding/neighborhoodpins/neighborhoodpins-reports.png" className="rounded-md" alt="screenshot of the site functionality" width={917} height={187} />

                    <p>{"Users can drop pins for issues, search by location, and filter or sort results to focus on what’s most relevant. Each user can remove their own submissions, and the app also includes town contact information so problems can be escalated quickly. Together, these tools make the map both a reporting platform and a reference hub for staying informed."}</p>

                    <Image src="/branding/neighborhoodpins/neighborhoodpins-popup.png" className="rounded-md" alt="screenshot of the site functionality" width={917} height={232} />

                    <p>The project is powered by Mapbox for mapping, PostgreSQL for data management, and Auth0 for secure authentication. A big focus was on efficiency — making sure API calls are lean, and geolocation data is accurate enough to be trusted as a real community tool.</p>

                    <Image src="/branding/neighborhoodpins/neighborhoodpins-towns.png" className="rounded-md" alt="screenshot of the site functionality" width={917} height={232} />

                    <p>NeighborhoodPins will continue to grow with features like voting, allowing communities to surface the most important issues and automatically retire outdated pins. These improvements aim to keep the map fresh and reliable while maintaining the simplicity that makes it approachable.</p>


                </section>

            </div>
        </main>
    )
}