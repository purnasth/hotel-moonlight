import React from 'react';
import { useParams } from 'react-router-dom';

interface ArticleContent {
  title: string;
  html: string;
  meta_keywords: string;
  meta_description: string;
}

const articlePageContents: Record<string, ArticleContent> = {
  'about': {
    title: 'about',
    html: '<h3 class="text-base md:text-xl leading-relaxed md:px-20">Hotel Moonlight</h3>',
    meta_keywords: '',
    meta_description: '',
  },
  csr: {
    title: 'csr',
    html: '<h3 class="text-base md:text-xl leading-relaxed md:px-20">Corporate Social Responsibility</h3>',
    meta_keywords: '',
    meta_description: '',
  },
};
const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !(slug in articlePageContents)) {
    return <p className="text-center text-red-500">Article not found!</p>; // Fallback for invalid or missing slugs
  }

  const article = articlePageContents[slug]; // Safe access after checking

  const { html, title } = article;

  return (
    <main className="bg-light">
      <h1 className="my-10 text-center text-3xl capitalize leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
        {title}
      </h1>
      <div
        className="space-y-8 text-center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
};

export default ArticlePage;
