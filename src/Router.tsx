import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostList from './posts/screens/PostList';
import PostForm from './posts/screens/PostForm';
import Layout from './shared/Layout';
import TodoList from './todos/screens/TodoList';
import Sandbox from './TypeSripct/Sandbox';
import PostTodo from './todos/screens/PostTodo';
import Login from './shared/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />}/>
          <Route index element={<PostList />} />
          <Route path="posts">
            <Route index element={<PostList />} />
            <Route path="new" element={<PostForm />} />
            <Route path=":id" element={<PostForm />} />
          </Route>
          <Route path="todos">
            <Route index element={<TodoList />} />
            <Route path="new" element={<PostTodo />} />
            <Route path=":id" element={<PostTodo />} />
            <Route path="profile" element={<Sandbox />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
