import profileImage from '../assets/profile.jpg';
const Home = () => {
  return (
    <main className="border border-green-500 py-4 max-w-screen-xl m-auto">
      <aside className="border border-red-500 mb-4">
        {/* sidebar */}
        <div className="flex flex-row justify-start items-center gap-6 mx-4 p-4 bg-slate-500 rounded-3xl">
          <figure className="border border-orange-400 rounded-lg">
            <img
              className="w-20 rounded-lg"
              src={profileImage}
              alt="arvind badwar"
            />
          </figure>
          <div className="">
            <h1 className=" text-2xl mb-2 text-white font-bold">
              Arvind Badwar
            </h1>
            <p className=" text-white">Web Developer</p>
          </div>
        </div>
      </aside>
      {/* main content */}
      <div className="border border-red-500 mb-4">
        <div className="navbar fixed bottom-0 left-0 px-10 w-full rounded-t-xl bg-slate-500 py-2">
          <div>navbar</div>
        </div>
        <div className="mx-4 p-4 bg-slate-500 rounded-3xl max-w-screen-xl m-auto"></div>
      </div>
    </main>
  );
};
export default Home;
