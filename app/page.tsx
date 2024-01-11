import Main from "@/components/Layouts";
import Intro from "@/components/Home/Intro";
import Featured from "@/components/Home/Featured";
import Writing from "@/components/Home/Writing";

export default function Home() {
  return (
    <Main>
      <Intro />
      <Featured />
      <Writing />
    </Main>
  )
}
