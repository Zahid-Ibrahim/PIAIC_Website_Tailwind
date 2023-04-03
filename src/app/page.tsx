
import CoreTracks from "@/components/widgets/CoreTracks"
import Hero from "@/components/widgets/Hero"
import ProgramOutcome from "@/components/widgets/ProgramOutcome"
import SpecializedTracks from "@/components/widgets/SpecializedTracks"

export default function Home() {
  return (
    <>
    <main>
      {/* <h1 className="text-red-400"> Hello World</h1> */}
    <Hero />
    <CoreTracks />
    <SpecializedTracks />
    <ProgramOutcome />
    </main>
    </>
  )
}
