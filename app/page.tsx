import Main from "@/components/Layouts";
import Intro from "@/components/Home/Intro";
import Featured from "@/components/Home/Featured";
import Writing from "@/components/Home/Writing";
import Reading from "@/components/Home/Reading";
import Development from "@/components/Home/Development";
import { allProjects } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";

const filteredFeatured = allProjects.filter((project) => project.variety === "featured");
const filteredInDevelopment = allProjects.filter((project) => project.variety === "in-development");

const featured = filteredFeatured.sort((a, b) =>
  compareDesc(new Date(a.year), new Date(b.year))
)

const inDevelopment = filteredInDevelopment.sort((a, b) =>
  compareDesc(new Date(a.year), new Date(b.year))
)

export default function Home() {
  return (
    <Main>
      <Intro />
      <Featured featured={featured} />
      <Writing />
      <Development inDevelopment={inDevelopment} />
      <Reading />
    </Main>
  )
}
