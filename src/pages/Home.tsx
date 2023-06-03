import classes from './Home.module.css';

function HomePage() {
  return (
    <div className="flex flex-col relative">
      <div
        className={`${classes['bg-card']} flex p-6 m-auto rounded-xl shadow-md relative bottom-32`}
      >
        <img
          src="./me.jpg"
          alt=""
          width="148"
          height="148"
          className="rounded-lg mr-8"
        />
        <div>
          <h2 className='text-2xl'>Jakub Jurkian</h2>
          <p>...description</p>
        </div>
      </div>
      <div>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default HomePage;
