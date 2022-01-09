import "./App.css";
import { Grid, Container } from "@mui/material";
import Header from "./components/Header";
import Volunteering from "./pages/Volunteering";
import Projects from "./pages/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {
  HashRouter as Router,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Grid container>
        <Grid item lg={1}></Grid>
        <Grid item lg={10} md={10} sx={{}}>
          <Router>
            <Header />

            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/volunteer" element={<Volunteering />}></Route>
              <Route exact path="/projects" element={<Projects />}></Route>
              <Route exact path="/blogs" element={<Blogs />}></Route>
            </Routes>
          </Router>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default App;
