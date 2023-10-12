import Member from "./member";
import Shop from "./shop";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

const Content = () => {
    return (
      <>
        <Routes>
          <Route index element={<Member />} />
          <Route path='shop' element={<Shop />} />
        </Routes>
      </>
    );
  }
  
  export default Content;
  