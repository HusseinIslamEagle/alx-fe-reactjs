import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  
  test('renders TodoList and initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Initial Todo 1')).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles a todo item completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Initial Todo 1');
    
    // النقر للتحويل إلى مكتمل (Check Line-through)
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // النقر مرة أخرى لإلغاء المكتمل
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoText = 'Initial Todo 1';
    const deleteButtons = screen.getAllByText('Delete');
    
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});