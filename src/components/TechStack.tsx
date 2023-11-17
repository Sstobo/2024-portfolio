import {
  SatelliteDish,
  Wind,
  LibraryBig,
  Link2,
  BookType,
  Calculator,
  Newspaper,
  Cog,
  Cpu,
  Leaf,
} from "lucide-react";

export const TechStack = () => {
  return (
    <div className="flex flex-row flex-wrap gap-3 mb-10 w-full">
      {/* Next.js */}
      <div
        className="w-3/12 relative border
dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-red-600 hover:border-white hover:bg-white hover:shadow-md bg-red-50/50
rounded p-6 transition-all duration-300"
      >
        <SatelliteDish className="absolute top-2 right-2 text-red-600 dark:text-slate-200" />
        <h4 className="text-xl dark:text-cyan-400">Next.js</h4>
        <p className="dark:text-slate-400 font-light">
          Crafting server-side rendered applications with finesse using Next.js
          - efficient, scalable, and my go-to for modern web development.
        </p>
      </div>

      {/* Tailwind */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-cyan-500 hover:border-white hover:bg-white hover:shadow-md  bg-cyan-50/50
rounded p-6 transition-all duration-300"
      >
        <Wind className="absolute top-2 right-2 text-cyan-400 dark:text-slate-200" />
        <h4 className="text-xl dark:text-cyan-400">Tailwind</h4>
        <p className="dark:text-slate-400 font-light">
          Tailwinds utility-first philosophy complements my precise approach to
          styling - a harmonious blend of form and function.
        </p>
      </div>

      {/* React */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-green-400 hover:border-white hover:bg-white hover:shadow-md  bg-green-50/50
rounded p-6 transition-all duration-300"
      >
        <LibraryBig className="absolute top-2 right-2 text-green-400 dark:text-slate-200" />
        <h4 className="text-xl dark:text-cyan-400">React</h4>
        <p className="dark:text-slate-400 font-light">
          In the React ecosystem, I architect captivating interfaces with a
          balance of creativity and component reusability.
        </p>
      </div>

      {/* HTML */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
hover:border-white hover:bg-white hover:shadow-md  bg-purple-100/50 border-purple-500
rounded p-6 transition-all duration-300"
      >
        <Link2 className="absolute top-2 right-2 dark:text-slate-200 text-purple-500" />
        <h4 className="text-xl dark:text-cyan-400">HTML</h4>
        <p className="dark:text-slate-400 font-light">
          With clean, semantic HTML, I establish the strong foundation every
          sophisticated web project requires.
        </p>
      </div>

      {/* TypeScript */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-orange-600 hover:border-white hover:bg-white hover:shadow-md  bg-orange-100/50
rounded p-6 transition-all duration-300"
      >
        <BookType className="absolute top-2 right-2 dark:text-slate-200 text-orange-600" />
        <h4 className="text-xl  dark:text-cyan-400">TypeScript</h4>
        <p className="dark:text-slate-400 font-light">
          TypeScript brings clarity to the chaos of JavaScript, allowing me to
          develop robust applications with confidence.
        </p>
      </div>

      {/* JavaScript */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-fuchsia-500 hover:border-white hover:bg-white hover:shadow-md  bg-fuchsia-100/50 
rounded p-6 transition-all duration-300"
      >
        <Calculator className="absolute top-2 right-2 dark:text-slate-200 text-fuchsia-500" />
        <h4 className="text-xl dark:text-cyan-400">JavaScript</h4>
        <p className="dark:text-slate-400 font-light">
          Crafting dynamic experiences with JavaScript, navigating its
          idiosyncrasies to breathe life into every web page.
        </p>
      </div>

      {/* Wordpress */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-blue-500 hover:border-white hover:bg-white hover:shadow-md  bg-blue-100/50
rounded p-6 transition-all duration-300"
      >
        <Newspaper className="absolute top-2 right-2 dark:text-slate-200 text-blue-500" />
        <h4 className="text-xl dark:text-cyan-400">Wordpress</h4>
        <p className="dark:text-slate-400 font-light">
          Leveraging WordPress, I craft sustainable, user-friendly websites that
          stand the test of time.
        </p>
      </div>

      {/* PHP */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-yellow-50 hover:border-white hover:bg-white hover:shadow-md  bg-yellow-100/50
rounded p-6 transition-all duration-300"
      >
        <Cog className="absolute top-2 right-2 dark:text-slate-200" />
        <h4 className="text-xl dark:text-cyan-400">PHP</h4>
        <p className="dark:text-slate-400 font-light">
          PHPs server-side scripting is where I blend logic and creativity to
          push the web forward.
        </p>
      </div>

      {/* OpenAPI */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-yellow-50 hover:border-white hover:bg-white hover:shadow-md  bg-yellow-100/50
rounded p-6 transition-all duration-300"
      >
        <Cpu className="absolute top-2 right-2 dark:text-slate-200" />
        <h4 className="text-xl dark:text-cyan-400">OpenAPI</h4>
        <p className="dark:text-slate-400 font-light">
          Embracing OpenAPI standards, I architect reliable and well-documented
          APIs for seamless integration.
        </p>
      </div>

      {/* Green Coding */}
      <div
        className="w-3/12 relative border dark:border-slate-800 dark:bg-slate-900/50 hover:dark:border-cyan-900 hover:dark:bg-slate-950
border-yellow-50 hover:border-white hover:bg-white hover:shadow-md  bg-yellow-100/50
rounded p-6 transition-all duration-300"
      >
        <Leaf className="absolute top-2 right-2 dark:text-slate-200" />
        <h4 className="text-xl dark:text-cyan-400">Green Coding</h4>
        <p className="dark:text-slate-400 font-light">
          A proponent of green coding, I approach software development with
          sustainability and efficiency at the forefront.
        </p>
      </div>
    </div>
  );
};
