
 // @vitest-environment jsdom

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { describe, test, expect, vi } from 'vitest'
import Todo from './Todo'

describe('Todo component', () => {
  test('renders the todo text and buttons for an unfinished todo', () => {
    const todo = {
      _id: '1',
      text: 'Learn Docker testing',
      done: false,
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={vi.fn()}
        completeTodo={vi.fn()}
      />
    )

    expect(screen.getAllByText('Learn Docker testing')).toHaveLength(2)
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Done' })).toBeInTheDocument()
  })
})
