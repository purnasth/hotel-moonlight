import React from 'react';
import { useParams } from 'react-router-dom';

interface ArticleContent {
  title: string;
  html: string;
  description?: string;
  meta_keywords: string;
  meta_description: string;
}

const articlePageContents: Record<string, ArticleContent> = {
  about: {
    title: 'About Moonlight - a hotel with heart',
    description:
      'Hotel Moonlight offers all the modern facilities you would expect, while retaining traditional Nepali ambiance and hospitality. From our front gate you can take an easy stroll to the hustle and bustle of Thamel, with its array of shops, restaurants, bars and nightlife.',
    html: '<div class="relative -z-10"><img src="https://hotelmoonlight.com/images/subpackage/HOGxu-b4.jpg" alt="Hotel Moonlight" class="h-[110vh] w-full object-cover"><div class="overlay bg-dark/30"></div></div></div><div class="flex flex-col items-center justify-center"><div class="bg-gradient bottom-0 h-0 w-px lg:h-10 xl:h-40"></div><a class="group mt-8 inline-flex items-center gap-5 rounded-full border-dark/30 bg-white px-6 py-2 shadow transition-all duration-700 md:mb-0 md:flex-row" href="https://www.tripadvisor.com/Hotel_Review-g293890-d654253-Reviews-Hotel_Moonlight-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html" target="_blank"><svg viewBox="0 0 24 24" width="24px" height="24px" class="scale-150"><path d="M12 3.953a7.442 7.442 0 1 0 .001 14.884A7.442 7.442 0 0 0 12 3.953m0 14.05a6.61 6.61 0 1 1 0-13.218 6.61 6.61 0 0 1 0 13.219M10.343 11.9a.91.91 0 1 1-1.821 0 .91.91 0 0 1 1.821 0m5.134 0a.91.91 0 1 1-1.821 0 .91.91 0 0 1 1.82 0m.82-1.897.84-.913h-1.863A5.8 5.8 0 0 0 12 8.08a5.77 5.77 0 0 0-3.27 1.008H6.862l.84.913a2.567 2.567 0 1 0 3.475 3.78l.823.896.823-.895a2.568 2.568 0 1 0 3.474-3.78m-6.865 3.634a1.738 1.738 0 1 1 0-3.476 1.738 1.738 0 0 1 0 3.476M12 11.85c0-1.143-.832-2.124-1.929-2.543A5 5 0 0 1 12 8.92a5 5 0 0 1 1.928.386c-1.096.42-1.927 1.4-1.927 2.543m2.566 1.787a1.738 1.738 0 1 1 .001-3.476 1.738 1.738 0 0 1 0 3.476m-8.456 3.719s-.377-.946-1.396-1.903c-1.02-.957-2.303-1.132-2.303-1.132s.457 1.02 1.54 2.04c1.086 1.017 2.159.995 2.159.995m2.568 1.41s-.524-.511-1.479-.883-1.861-.191-1.861-.191.598.54 1.615.935c1.016.397 1.725.139 1.725.139m2.493.505s-.545-.224-1.357-.196-1.415.47-1.415.47.608.222 1.473.193 1.3-.467 1.3-.467m-6.186-4.203s-.175-1.008-.974-2.154c-.8-1.147-2.015-1.578-2.015-1.578s.238 1.098 1.089 2.319c.85 1.22 1.9 1.413 1.9 1.413m-1.003-3.071s.195-1.021-.134-2.393c-.328-1.371-1.294-2.21-1.294-2.21s-.17 1.128.18 2.589c.35 1.46 1.248 2.014 1.248 2.014"></path><path d="M17.887 17.355s.377-.946 1.396-1.903c1.02-.957 2.303-1.132 2.303-1.132s-.457 1.02-1.54 2.04c-1.086 1.017-2.159.995-2.159.995m-2.567 1.41s.524-.511 1.479-.883 1.861-.191 1.861-.191-.598.54-1.615.935c-1.016.397-1.725.139-1.725.139m-2.493.505s.545-.224 1.357-.196 1.415.47 1.415.47-.608.222-1.473.193-1.3-.467-1.3-.467m6.186-4.203s.175-1.008.974-2.154c.8-1.147 2.015-1.578 2.015-1.578s-.238 1.098-1.089 2.319c-.85 1.22-1.9 1.413-1.9 1.413m1.003-3.071s-.195-1.021.133-2.393c.33-1.371 1.293-2.21 1.293-2.21s.17 1.128-.18 2.589c-.349 1.46-1.246 2.014-1.246 2.014M12 20.047a.413.413 0 1 0 0-.827.413.413 0 0 0 0 .827"></path></svg>Travelers\' Choice Award Winner</a></div>',
    meta_keywords: '',
    meta_description: '',
  },
  csr: {
    title: 'Corporate Social Responsibility',
    description:
      'CSR is a Guide to Sustainability - and a sound business practice. Sustainability for our hotel, our staff, our neighborhood, our city, our country, our world!',
    html: '<div class="relative -z-10"><img src="https://hotelmoonlight.com/assets/userfiles/images/garden4.jpg" alt="Hotel Moonlight" class="h-[110vh] w-full object-cover"><div class="overlay bg-dark/30"></div></div></div><div class="flex flex-col items-center justify-center"><div class="bg-gradient bottom-0 h-0 w-px lg:h-10 xl:h-40"></div><h3 class="text-gradient group inline-flex items-center gap-5 rounded-full border-dark/30 bg-white px-6 py-2 text-2xl font-bold shadow">Planet Earth - The only Home we have!</h3><hr class="border-t translate-y-24 border-gray-300 my-8 w-full z-50"><main class="container mx-auto text-dark pb-0"><section class="mt-3"><h2 class="mb-4 text-center text-4xl text-dark">CSR is about Ethics</h2><p class="text-center text-xl font-bold">What are ethics? Doing the right thing naturally.</p></section><section class="mb-12 mt-12"><h2 class="mb-4 text-2xl font-semibold text-green-800">Conserving Energy</h2><ul class="list-disc space-y-2 pl-6"><li>We use power-saving electric bulbs and automatic electric cut-off systems when you leave your room.</li><li>Upgraded generator to reduce diesel consumption.</li></ul><h2 class="mb-4 mt-8 text-2xl font-semibold text-green-800">Water</h2><ul class="list-disc space-y-2 pl-6"><li>Installed a ground water pump to reduce transport of water by tanker (a polluter).</li></ul><h2 class="mb-4 mt-8 text-2xl font-semibold text-green-800">Recycle</h2><ul class="list-disc space-y-2 pl-6"><li>All plastic water bottles, soap, and shampoo containers are recycled.</li><li>Beer, wine, and soft drink bottles are returned to bottlers for reuse/recycle.</li><li>Food waste is sorted from \'dry waste\' and offered to farmers as pig food.</li><li>Dry waste is recycled or disposed of via municipality service.</li></ul><h2 class="mb-4 mt-8 text-2xl font-semibold text-green-800">Other Efforts</h2><ul class="list-disc space-y-2 pl-6"><li>Use low-lead paint to reduce harmful effects of lead in the environment.</li><li>Garden spaces to contribute oxygen back to the city.</li></ul></section><section><h2 class="mb-4 text-2xl font-semibold text-blue-800">Social Awareness</h2><ul class="list-disc space-y-2 pl-6"><li><span class="font-semibold">Home and Family:</span> An inclusive and progressive social welfare program for staff.</li><li>Old furniture, electronics, and materials are repaired and donated to the needy and their families.</li><li>Local welfare organizations receive donations or free/reduced cost use of our conference hall.</li><li><span class="font-semibold">Supporting Partner:</span> Beni Handicrafts, a recycled waste materials project.<ul class="mt-2 list-disc space-y-1 pl-8"><li>Trains women in tailoring to create fashionable and functional products from waste materials.</li><li>Profits support STEPS social work, including Beni Freedom Kit-Bags (washable sanitary pads).</li></ul></li><li><span class="font-semibold">Mountain People \'Bring a Smile\':</span> Guests are encouraged to bring used clothing or trekking gear for distribution to those in need.</li><li><span class="font-semibold">Your Organization:</span> Hotel Moonlight partners with individuals, institutes, and NGOs to provide support.</li></ul></section></main></div>',
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

  const { html, title, description } = article;

  return (
    <main className="bg-light px-0">
      <h1 className="mx-auto my-10 max-w-3xl text-center text-3xl leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
        {title}
      </h1>
      <p className="mx-auto mb-24 max-w-xl text-center text-base">
        {description}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
};

export default ArticlePage;
