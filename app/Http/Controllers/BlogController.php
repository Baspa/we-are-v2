<?php

namespace App\Http\Controllers;

use App\Support\Blogs;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Blog/Index', [
            'blogs' => array_reverse(Blogs::get()),
        ]);
    }

    public function show(string $slug): Response
    {
        $blog = Blogs::findBySlug($slug);

        abort_unless($blog, 404);

        return Inertia::render("Blog/{$blog['component']}", [
            'blog' => $blog,
        ]);
    }
}
