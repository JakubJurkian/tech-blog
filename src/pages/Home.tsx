import AuthorCard from '../components/AuthorCard';
import Posts from '../components/Posts';
import SearchInput from '../components/SearchInput';

const DUMMY_POSTS = [
  {
    id: 'p1',
    title: 'My new framework',
    description: 'If you already know, I work so hard on...',
    img: 'https://fresh.deno.dev/home-og.png',
    date: '3 days ago',
    link: '/1',
  },
  {
    id: 'p2',
    title: 'My old framework',
    description: 'testestestest',
    img: 'https://fresh.deno.dev/home-og.png',
    date: '28 days ago',
    link: '/2',
  },
];

function HomePage() {
  const authorInfo: string[] = [
    'Jakub Jurkian',
    "Welcome to my blog post! If you are into tech-related topics, you couldn't find a better place.",
    './me.jpg',
    'https://github.com/JakubJurkian',
  ];

  return (
    <div className="flex flex-col relative">
      <AuthorCard
        author={authorInfo[0]}
        description={authorInfo[1]}
        src={authorInfo[2]}
        githubLink={authorInfo[3]}
      />
      <div className="relative bottom-12 xxs:bottom-14 xs:bottom-20 sm:bottom-28">
        <main className="max-w-3xl mx-2 md:m-auto lg:max-w-4xl">
          <section>
            <div className="flex justify-between">
              <code>Posts</code>
              <code>{2} posts</code>
            </div>
            <SearchInput />
          </section>
          <Posts posts={DUMMY_POSTS} />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
