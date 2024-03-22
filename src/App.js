// import "./App.css";
import "./css/normalize.css";
import "./css/style.css";
import "./css/common/common.css";

import Main from "./pages/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// 컴포넌트 (즉, JSX 뽑기)

function App() {
  return (
    <>
      <div className="wrap">
        {/* <!-- 상단 --> */}
        <Header />

        {/* <!-- 메인 --> */}
        <main className="main">
          <div className="inner">
            <Main />
          </div>
        </main>
        {/* <!-- 하단 --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
