import logo from "./assest/logo.svg";
import headerImg from "./assest/illustration-intro.svg";
import avatarOne from "./assest/avatar-anisha.png";
import logoWhite from "./assest/logo-white.svg"
function App() {
  return (
    <div className="App">
      {/* start navbar */}
      <nav className="pt-5" id="navbar">
        {/* start container */}
        <div className="container mx-auto">
          {/* start flex */}
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <a href="#">
                <img src={logo} />
              </a>
            </div>
            {/* ul */}
            <ul className="hidden md:flex space-x-6 items-center">
              <li>
                <a href="#" className="hover:text-lead">
                  home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lead">
                  product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lead">
                  about us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lead">
                  carers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lead">
                  community
                </a>
              </li>
            </ul>
            {/* button */}
            <div>
              <button className="hidden bg-brightRed text-slate-100 px-4 py-2 rounded-3xl capitalize md:block">
                get started
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* end navbar */}

      {/* start header */}
      <header className="py-10 md:py-24">
        <div className="container">
          <div className="md:flex justify-between items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold uppercase md:text-5xl">
                bring everyone together to build better product
              </h1>
              <p className="text-lead mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamc laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <div>
                <button className="bg-brightRed rounded-3xl px-4 py-2 mt-4 capitalize text-slate-100 hover:bg-brightRedLight">
                  get started
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={headerImg} />
            </div>
          </div>
        </div>
      </header>
      {/* end header */}

      {/* start features */}
      <section id="features">
        <div className="container">
          <div className="justify-between md:flex">
            {/* left item */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-2xl font-bold capitalize md:text-4xl mb-10">
                what's different about mange ?
              </h2>
              <p className="text-lead my-4 md:max-w-md">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view. Manage makes
                it simple for software teams to plan day-to-day tasks while
                keeping the larger team goals in view.
              </p>
            </div>
            {/* right item */}
            <div className="md:w-1/2 mt-5">
              {/* track item */}
              <div className="flex items-start space-x-6 mb-5">
                <span className="px-3 py-1 bg-brightRed text-slate-100 rounded-3xl">
                  01
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-5">
                    track company-wide progress
                  </h3>
                  <p className="text-lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamc laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
              </div>
              {/* track item */}
              <div className="flex items-start space-x-6 mb-5">
                <span className="px-3 py-1 bg-brightRed text-slate-100 rounded-3xl">
                  02
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-5">
                    advanced track progress
                  </h3>
                  <p className="text-lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamc laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
              </div>
              {/* track item */}
              <div className="flex items-start space-x-6 mb-5">
                <span className="px-3 py-1 bg-brightRed text-slate-100 rounded-3xl">
                  03
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-5">
                    beginner track in report
                  </h3>
                  <p className="text-lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamc laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
              </div>
              {/* track item */}
              <div className="flex items-start space-x-6 mb-5">
                <span className="px-3 py-1 bg-brightRed text-slate-100 rounded-3xl">
                  01
                </span>
                <div>
                  <h3 className="text-2xl font-bold mb-5">
                    track company-wide progress
                  </h3>
                  <p className="text-lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamc laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end features */}

      {/* start testmonial */}
      <section className="py-24" id="testmonail">
        <div className="flex flex-col space-y-6 md:space-y-0 justify-between md:flex-row md:space-x-6">
          <div className="md:w-1/3">
            <div className="bg-veryLightGray p-6 relative   space-y-6 rounded-lg ">
              <img
                src={avatarOne}
                className="w-16 -mt-14 absolute translate-x-[-50%] left-2/4 top-3"
              />
              <p className="text-center md:flex text-lead text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-veryLightGray p-6 relative  space-y-6 rounded-lg ">
              <img
                src={avatarOne}
                className="w-16 -mt-14 absolute translate-x-[-50%] left-2/4 top-3"
              />
              <p className="text-center md:flex text-lead text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-veryLightGray p-6 relative  space-y-6 rounded-lg ">
              <img
                src={avatarOne}
                className="w-16 -mt-14 absolute translate-x-[-50%] left-2/4 top-3"
              />
              <p className="text-center md:flex text-lead text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end testmonial */}


      {/* start cta */}
      <section className="bg-brightRed py-14" id="cta">
        <div className="container">
          <div className="text-center md:text-left md:flex justify-between items-center">
            <h4 className="text-4xl text-slate-100 font-bold mb-5">
              simplify how your team <br />
              works today
            </h4>
            <div className="flex justify-center">
              <button className="px-4 py-2 rounded-3xl bg-slate-100 text-brightRed">get started</button>
            </div>
          </div>
        </div>
      </section>
      {/* end cta */}
      
      <section className="bg-slate-900 py-24" id="footer">
        <div className="container">
          <div className="justify-center flex-wrap sm:flex">
            <div className="md:w-4/12 sm:w-full mb-5">
              <img src={logoWhite}/>
            </div>
            <div className="md:w-3/12 sm:w-1/2 mb-5">
              <ul>
                <li><a href="#" className="text-slate-100 hover:text-slate-300 mb-4 block capitalize">home</a></li>
                <li><a href="#" className="text-slate-100 hover:text-slate-300 mb-4 block capitalize">pricing</a></li>
                <li><a href="#" className="text-slate-100 hover:text-slate-300 mb-4 block capitalize">products</a></li>
                <li><a href="#" className="text-slate-100 hover:text-slate-300 mb-4 block capitalize">about us</a></li>
              </ul>
            </div>
            <div className="md:w-2/12 sm:w-1/2 mb-5">
              <ul>
                <li><a href="#" className="text-slate-100 hover:text-slate-300 mb-4 block capitalize">careers</a></li>
                <li><a href="#" className="text-slate-100 hover:text-slate-300 mb-4 block capitalize">community</a></li>
                <li><a href="#" className="text-slate-100 hover:text-slate-300 mb-4 block capitalize">privacy</a></li>
              </ul>
            </div>
            <div className="md:w-3/12 sm:w-full mb-5">
              <div className="flex justify-between space-x-2">
                <input type="text" className="w-full rounded-full px-2 py-2" placeholder="type text"/>
                <button className="text-slate-100 bg-brightRed px-4 py-2 rounded-3xl">Go</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
