import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routers/Home';
import Blogs from './Routers/Blogs';
import Contact from './Routers/Contact';
import Layout from './Routers/Layout';

const AppRouter = () => {
  return (
    <>
      <h1> ROUTERS </h1>
      <h2> click on them to take you to the other page of the router...</h2>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />   
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter;
