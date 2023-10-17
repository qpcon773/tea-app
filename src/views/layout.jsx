import "styles/all.scss"
import Content from "./content";
import TopBar from "./topBar"
import BottomBar from "./bottomBar"


// const a = useParams()



const Layout = () => {
    return (
      <>
        <TopBar></TopBar>
        <Content></Content>
        <BottomBar></BottomBar>
      </>
    );
  }
  
  export default Layout;
  