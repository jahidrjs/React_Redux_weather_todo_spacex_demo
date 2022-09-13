import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../pages/home';
import Todo from '../pages/todo';
import Error from '../pages/error';
import Spacex from '../pages/spacex';
import Weather from '../pages/weather';
import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';

const Index: any = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="weather" element={<Weather />} />
          <Route path="spacex" element={<Spacex />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default Index;
