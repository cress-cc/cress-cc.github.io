import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          cress.cc
        </Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/product">
            <Nav.Link>Product</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
