import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

interface BlogSectionProps {
  onSelectArticle: (article: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  // When showAll is false, show top 2 articles as in the reference image. When true, show all 4.
  const displayedPosts = showAll ? BLOG_POSTS : BLOG_POSTS.slice(0, 2);

  return (
    <section id="articulos" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section directly inspired by the reference design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          
          <div className="space-y-4 max-w-2xl">
            {/* Articles Badge / Pill */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-semibold shadow-xs">
              <span>Artículos</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15] font-['Outfit']">
              Artículos y consejos para tu salud visual
            </h2>
          </div>

          {/* Top Right "View All" Button from reference image */}
          <div className="shrink-0">
            <button
              onClick={() => setShowAll(!showAll)}
              id="blog-view-all-button"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
              <span>{showAll ? 'Ver Menos' : 'Ver Todas'}</span>
            </button>
          </div>

        </div>

        {/* 2-Column Grid of Large Article Cards matching the reference mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectArticle(post)}
              className="group cursor-pointer flex flex-col space-y-4"
            >
              {/* Large Image Container with rounded-3xl / rounded-[28px] */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-3xl sm:rounded-[28px] overflow-hidden bg-slate-100 shadow-md group-hover:shadow-xl transition-all duration-500">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors duration-300" />
              </div>

              {/* Meta Tag Line: Category • Date */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {post.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                <span className="text-xs sm:text-sm text-slate-500 font-normal">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug font-['Outfit']">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More Link with Blue Circular Arrow Icon */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectArticle(post);
                  }}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <span>Leer Más</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
