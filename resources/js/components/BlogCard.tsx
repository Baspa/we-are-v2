import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import type { Blog } from '@/types/blog'

export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link
            href={`/blogs/${blog.slug}`}
            className="card-hover group flex flex-col overflow-hidden rounded-lg border border-border bg-card"
        >
            <div className="aspect-video overflow-hidden">
                <picture>
                    <source srcSet={blog.featured_image_webp} type="image/webp" />
                    <source srcSet={blog.featured_image} type="image/jpeg" />
                    <img
                        src={blog.featured_image}
                        alt={blog.featured_image_alt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                </picture>
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-display text-xl">{blog.title}</h3>
                <p className="mb-4 line-clamp-3 flex-1 text-sm text-muted-foreground">{blog.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Lees meer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    )
}
