import AuthorCard from '../components/AuthorCard';

function HomePage() {
  const authorInfo: string[] = [
    'Jakub Jurkian',
    "Welcome to my blog post! If you are into tech-related topics, you couldn't find a better place.",
    './me.jpg',
    'https://github.com/JakubJurkian'
  ];

  return (
    <div className="flex flex-col relative">
      <AuthorCard
        author={authorInfo[0]}
        description={authorInfo[1]}
        src={authorInfo[2]}
        githubLink={authorInfo[3]}
      />
      <div>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default HomePage;
