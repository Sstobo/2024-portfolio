import { Intro } from "@/components/Intro";

export default function Home() {

  return (
    <main className="flex h-full flex-col items-center justify-center text-center">
      <Intro />
      {/* Arrow down */}
      <div className="flex flex-row justify-center items-center gap-3">
        <div className="" id="expertise">
          <h2>What I do</h2>
          <p>A senior agency developer, I create websites and custom components at pace and scale.</p>
        </div>

        <div className="" id="projects">
          {/* slider */}
        </div>

        <div className="border dark:border-slate-50 border-slate-800">
          Site name
          Image
          Blurb
          <div className="flex flex-row justify-center items-center gap-3">
            <div className="bg-yellow-800 text-yellow-50 dark:bg-slate-700 dark:text-amber-500">HTML</div>
          </div>

        </div>
      </div>
    </main>
  )
}