import Head from 'next/head'
import NewTaskForm from '@/components/NewTaskForm'
import { useState } from 'react'
import TaskItem from '@/components/TaskItem'
import clsx from 'clsx'

export type IndexProps = {}

const sampleTasks = [
  { id: '1', title: 'Complete online javascript course', completed: true, deleted: false },
  { id: '2', title: 'Jog around the park 3x', completed: false, deleted: false },
  { id: '3', title: '10 minute meditation', completed: false, deleted: false },
  { id: '4', title: 'Read for 1 hour', completed: false, deleted: false },
  { id: '5', title: 'Pick up groceries', completed: false, deleted: false },
  { id: '6', title: 'Complete Todo App from Frontend Mentors', completed: false, deleted: false },
]
const Index = ({}: IndexProps) => {
  const [tasks, setTasks] = useState(sampleTasks)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')
  const handleCompleted = (id: string) => {
    const [task, _] = tasks.filter(task => task.id === id)
    if (!task) {
      return
    }
    task.completed = true
    setTasks(v => [...v.filter(v => v.id !== id), task])
  }
  const handleDelete = (id: string) => {
    const [task, _] = tasks.filter(task => task.id === id)
    if (!task) {
      return
    }
    task.deleted = true
    setTasks(v => [...v.filter(t => t.id !== id), task])
  }
  const clearCompleted = () => {
    setTasks(v => v.map(t => (t.completed ? ((t.deleted = true), t) : t)))
  }
  const getTasksByFilter = (filter: Parameters<typeof setFilter>[0]) => {
    switch (filter) {
      case 'all':
        return tasks.filter(task => !task.deleted)
      case 'completed':
        return tasks.filter(task => task.completed && !task.deleted)
      case 'active':
        return tasks.filter(task => !task.completed && !task.deleted)
    }
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/bitwhys-sketch-logo.svg" />
        <title>Frontend Mentor: Todo App</title>
      </Head>
      <main className="relative h-screen">
        <div className="relative  h-80">
          <img
            className="max-h-full w-full  object-cover"
            src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-purple-600 to-cyan-300 dark:from-purple-700 dark:to-cyan-600"></div>
        </div>
        <div className="relative mx-auto -mt-60 flex w-[327px] flex-col md:w-[540px]">
          <header className="mb-10 flex items-center justify-between text-white">
            <h1 className="text-4xl font-bold uppercase tracking-widest">todo</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-8 w-8 dark:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="hidden h-8 w-8 dark:inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </header>
          <NewTaskForm />
          <div
            id="container"
            className="full relative grid max-h-[440px] grid-rows-[1fr_50px] divide-y rounded-lg bg-white shadow-2xl dark:divide-zinc-700 dark:bg-zinc-800"
          >
            <ul className="grid divide-y overflow-y-auto rounded-t-lg dark:divide-zinc-700">
              {getTasksByFilter(filter).map(({ title, id, completed }) => (
                <TaskItem
                  title={title}
                  key={id}
                  id={id}
                  completed={completed}
                  onDelete={handleDelete}
                  onCompleted={handleCompleted}
                />
              ))}
            </ul>
            <footer className=" flex w-full items-center justify-between px-6 py-4   text-sm text-zinc-500 dark:text-zinc-600">
              <span id="remaining-items">{getTasksByFilter(filter).length}</span>
              <span className="flex items-center space-x-2 font-medium tracking-wide">
                <button
                  onClick={() => setFilter('all')}
                  data-filter="all"
                  className={clsx(
                    'hover:text-zinc-600 dark:hover:text-zinc-500',
                    filter === 'all'
                      ? 'font-bold text-blue-600 dark:text-blue-500'
                      : 'hover:text-zinc-600 dark:hover:text-zinc-500'
                  )}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('active')}
                  data-filter="active"
                  className={clsx(
                    'hover:text-zinc-600 dark:hover:text-zinc-500',
                    filter === 'active'
                      ? 'font-bold text-blue-600 dark:text-blue-500'
                      : 'hover:text-zinc-600 dark:hover:text-zinc-500'
                  )}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilter('completed')}
                  data-filter="completed"
                  className={clsx(
                    'hover:text-zinc-600 dark:hover:text-zinc-500',
                    filter === 'completed'
                      ? 'font-bold text-blue-600 dark:text-blue-500'
                      : 'hover:text-zinc-600 dark:hover:text-zinc-500'
                  )}
                >
                  Completed
                </button>
              </span>
              <button
                onClick={clearCompleted}
                data-action="clear-completed"
                className="hover:text-zinc-600 dark:hover:text-zinc-500"
              >
                Clear completed
              </button>
            </footer>
          </div>
          <p className="mt-20 text-center text-sm text-zinc-400 dark:text-zinc-700">
            Drag and drop to reorder list
          </p>
        </div>
      </main>
    </>
  )
}
export default Index
