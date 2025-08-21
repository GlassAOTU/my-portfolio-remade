import Image from "next/image"

export default function CreamBakeryPage() {
    return (
        <main className="w-auto min-h-screen p-5">
            <div className='flex flex-col max-w-3xl mx-auto space-y-6'>

                <nav className='space-x-12 py-8 text-sm'>
                    <a href="/" className="text-stone-500 hover:text-stone-300 transition-all">Home</a>
                    <a href="/projects" className="text-stone-300">Projects</a>
                </nav>

                <Image src="/branding/cream/cream-header.png" alt="bento anime header" width={1451} height={648} className="rounded-md" />

                <section className="gap-6 flex flex-row">
                    <div className='flex flex-col justify-evenly'>
                        <h1 className='text-2xl font-semibold'>Cream Bakery</h1>
                        <p className="text-stone-400">Coming soon...</p>
                    </div>
                </section>

                <section className='flex flex-col gap-4'>

                    <p>I’m currently working on expanding Cream Bakery’s online presence into a full digital ordering and management system. The first step is setting up the customer-facing side: a clean product catalog, a custom cake order form, a cart and checkout flow, and a simple way for customers to track their orders after purchase. On the backend, I’m building an admin dashboard that lets the bakery easily add products, update availability, and manage incoming orders without needing extra tools. The idea is to make the ordering process smooth for both customers and the bakery staff.</p>

                    <p>I’m also laying the groundwork so this system could eventually scale into a SaaS platform for other bakeries. Even though I’m only focusing on Cream Bakery right now, I’m structuring it in a way that could later support multiple bakeries with their own storefronts. In short, this project isn’t just about getting Cream Bakery online—it’s also about building a foundation that can grow into a much bigger platform.</p>

                </section>

            </div>
        </main>
    )
}