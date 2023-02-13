import React from 'react'

export type NewTaskFormProps = {}

const NewTaskForm = ({}: NewTaskFormProps) => {
  return (
    <form>
      <div className="mb-6 flex h-16 items-center space-x-4 rounded-md border bg-white px-6 dark:border-zinc-700 dark:bg-zinc-800">
        <label
          data-role="check-box"
          className="group inline-flex aspect-square h-7 w-7 cursor-pointer select-none items-center justify-center rounded-full border-2 text-purple-500 dark:border-zinc-700 dark:text-white"
        >
          <input
            type="checkbox"
            name="completed"
            id="new-task-completed"
            className="peer sr-only"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="hidden h-4 w-4 peer-checked:block"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </label>
        <input
          name="task"
          type="text"
          placeholder="create new task"
          className="w-full border-0 bg-inherit px-2 text-zinc-400 placeholder-zinc-400 focus:outline-none focus:ring-0 dark:text-zinc-600 dark:placeholder-zinc-600"
        />
      </div>
    </form>
  )
}

export default NewTaskForm
