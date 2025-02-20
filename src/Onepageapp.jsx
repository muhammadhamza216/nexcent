import Blog from "./components/Blog";
import Community from "./components/Community";
import Footerf from "./components/Footerf";
import Footers from "./components/Footers";
import Header from "./components/Header";
import Helpingbus from "./components/Helpingbus";
import Main from "./components/Main";
import Ourclient from "./components/Ourclient";
import Sitefooter from "./components/Sitefooter";
import Timsmith from "./components/Timsmith";

export default function Onepageapp() {
  return (
    <>
    <Header/>
    <Main/>
    <Ourclient />
    <Community />
    <Helpingbus/>
    <Sitefooter/>
    <Timsmith/>
    <Blog/>
    <Footerf/>
    <Footers/>
    </>
  )
}
