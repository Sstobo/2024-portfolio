import { Intro } from "@/components/Intro";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <Intro />
      <div id="link" className="mt-40"></div>
    </main>
  )
}