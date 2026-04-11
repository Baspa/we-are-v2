import { Head, Link } from '@inertiajs/react'
import { ArrowLeft } from 'lucide-react'
import MainLayout from '@/layouts/MainLayout'
import type { Blog } from '@/types/blog'

interface BlogPostProps {
    blog: Blog
    children: React.ReactNode
}

export default function BlogPost({ blog, children }: BlogPostProps) {
    return (
        <MainLayout>
            <Head>
                <title>{`${blog.title} - WE ARE Personal Training`}</title>
                <link rel="canonical" href={`/blogs/${blog.slug}`} />
                <meta name="description" content={blog.description} />
                <meta property="og:locale" content="nl_NL" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${blog.title} - WE ARE Personal Training Uden en Schijndel`} />
                <meta property="og:description" content={blog.description} />
                <meta property="og:url" content={`/blogs/${blog.slug}`} />
                <meta property="og:image" content={blog.featured_image} />
            </Head>

            <div className="relative h-[35vh] md:h-[55vh]">
                <div className="absolute inset-0">
                    <picture>
                        <source srcSet={blog.featured_image_webp} type="image/webp" />
                        <source srcSet={blog.featured_image} type="image/jpeg" />
                        <img
                            src={blog.featured_image}
                            alt={blog.featured_image_alt}
                            className="h-full w-full object-cover"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
                </div>
                <div className="relative flex h-full items-end">
                    <div className="container mx-auto px-4 pb-12 md:pb-16">
                        <Link
                            href="/blogs"
                            className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Terug naar blog
                        </Link>
                        <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-6xl">{blog.title}</h1>
                    </div>
                </div>
            </div>

            <article className="py-12 md:py-20">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="blog-prose">{children}</div>
                </div>
            </article>
        </MainLayout>
    )
}
