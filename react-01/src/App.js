import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";


const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main woo="우영우" work="김밥먹기" />
      <Main woo="김영우" work="노래하기" />
      <Main woo="차영우" work="춤먹기" />
      <Main woo="하영우" />
      <Footer />
    </Wrapper>
  )
}

export default App;