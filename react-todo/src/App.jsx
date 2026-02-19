import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      {/* استدعاء المكون الرئيسي الذي يحتوي على كل الوظائف */}
      <TodoList />
    </div>
  );
}

export default App;