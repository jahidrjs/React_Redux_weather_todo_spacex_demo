import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../pages/home';
import Error from '../pages/error';
import Spacex from '../pages/spacex';
import Weather from '../pages/weather';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';
import Viewtodo from '../features/todo/viewtodo';
import Addtodo from '../features/todo/addtodo';
import Edittodo from '../features/todo/edittodo';

const Index: any = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<Viewtodo />} />
          <Route path="weather" element={<Weather />} />
          <Route path="spacex" element={<Spacex />} />
          <Route path="view-todo" element={<Viewtodo />} />
          <Route path="add-todo" element={<Addtodo />} />
          <Route path="edit-todo" element={<Edittodo />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Index;
