import Main from "@/components/Layouts";
import Intro from "@/components/Home/Intro";
import Featured from "@/components/Home/Featured";
import Writing from "@/components/Home/Writing";
import Reading from "@/components/Home/Reading";
import Development from "@/components/Home/Development";

export default function Home() {
  return (
    <Main>
      <Intro />
      <Featured />
      <Writing />
      <Development />
      <Reading />
    </Main>
  )
}
