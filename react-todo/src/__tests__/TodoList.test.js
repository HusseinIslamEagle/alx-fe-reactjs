import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList'; // لاحظ المسار هنا أصبح مباشرًا

describe('TodoList Component Tests', () => {
  
  test('renders TodoList component and initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  });

  test('adds a new todo item to the list', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: 'Test New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test New Task')).toBeInTheDocument();
  });

  test('toggles the completion status of a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo item from the list', () => {
    render(<TodoList />);
    const todoText = 'Learn React';
    const deleteButton = screen.getAllByText(/Delete/i)[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});