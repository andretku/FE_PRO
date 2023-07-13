import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <App/>     // вызов функции, описанной ниже

);

function App() {
  return (
    <div>
      <h1>Заголовок</h1>
      <p>Текст</p>
      <Post/>
      <Post/>
      <Post/>
      <Title/>
    </div>
  )
}

function Post() {
  return (
    <div>
      <h2>New Text 2</h2>
    </div>
  )
}

function Title() {
  return (
    <div>
      <h1> еще один пример текста</h1>
    </div>
  )
}