import { BrowserRouter as Router } from "react-router-dom"
import { Footer, Header, ScrollToTop, ScrollToTopBtn } from "./components"
import Layout from "./layout/Layout"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col py-2">
        {/* Header */}
        <Header />
        <main className="flex-grow mt-5 lg:mt-16">
          <Layout />
        </main>
        <ScrollToTopBtn />
        <Footer />
      </div>
    </Router>
  )
}

export default App
