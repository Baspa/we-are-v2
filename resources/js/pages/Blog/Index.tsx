import { Head } from '@inertiajs/react'
import MainLayout from '@/layouts/MainLayout'
import BlogCard from '@/components/BlogCard'
import type { Blog } from '@/types/blog'

export default function BlogIndex({ blogs }: { blogs: Blog[] }) {
    return (
        <MainLayout>
            <Head>
                <title>Blog - WE ARE Personal Training</title>
                <meta
                    name="description"
                    content="Lees onze blogs over fitness, voeding, afvallen en een gezonde levensstijl. WE ARE Personal Training Uden en Schijndel deelt kennis en tips."
                />
                <meta property="og:locale" content="nl_NL" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog - WE ARE Personal Training Uden en Schijndel" />
                <meta
                    property="og:description"
                    content="Lees onze blogs over fitness, voeding, afvallen en een gezonde levensstijl."
                />
            </Head>

            <section className="pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="container mx-auto px-4">
                    <div className="mb-12 max-w-3xl md:mb-16">
                        <h1 className="section-title mb-4">
                            Onze <span className="text-primary">blogs</span>
                        </h1>
                        <p className="section-subtitle">
                            Kennis en tips over fitness, voeding en een gezonde levensstijl. Ontdek hoe je het beste uit
                            jezelf haalt.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <BlogCard key={blog.slug} blog={blog} />
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
