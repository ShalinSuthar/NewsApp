import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../styles/NavBar.css'
const Navbar = ({ selectedCategory, onCategoryChange, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="mb-4">
      <BootstrapNavbar.Brand href="#" className='mx-2'>WhatsNews</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handleCategoryClick('general')} active={selectedCategory === 'general'}>
            General
          </Nav.Link>
          <Nav.Link onClick={() => handleCategoryClick('business')} active={selectedCategory === 'business'}>
            Business
          </Nav.Link>
          <Nav.Link onClick={() => handleCategoryClick('technology')} active={selectedCategory === 'technology'}>
            Technology
          </Nav.Link>
          <Nav.Link onClick={() => handleCategoryClick('sports')} active={selectedCategory === 'sports'}>
            Sports
          </Nav.Link>
          {/* Add more category links as needed */}
        </Nav>
        <Form inline onSubmit={handleSearchSubmit} className="navbar-nav navForm">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
