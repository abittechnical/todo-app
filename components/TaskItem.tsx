import React from 'react'
import clsx from 'clsx'

export type ListItemProps = {
  id: string
  title: string
  completed: boolean
  onDelete(id: string): void
  onCompleted(id: string): void
}
const TaskItem = ({ title, id, completed, onDelete, onCompleted }: ListItemProps) => {
  return (
    <li className="group flex items-center justify-between px-6 py-4 text-neutral-11 dark:text-neutralDark-11">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => onCompleted(id)}
          data-action="toggle-completed"
          data-role="check-box"
          className={clsx(
            'group inline-flex aspect-square h-7 w-7 items-center justify-center rounded-full border-2',
            completed
              ? 'border-none bg-gradient-to-tr from-purple-500 to-cyan-500 text-white'
              : 'border-neutral-7 text-transparent dark:border-neutralDark-7'
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>
        <span
          data-role="title"
          className={clsx('w-full px-2', {
            'text-neutral-8 line-through dark:text-neutralDark-8': completed,
          })}
        >
          {title}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        data-action="delete-item"
        className="hidden group-hover:inline-flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  )
}

export default TaskItem
