import Head from 'next/head'
import NewTaskForm from '@/components/NewTaskForm'
import { useState } from 'react'
import TaskItem from '@/components/TaskItem'
import clsx from 'clsx'
import PageHeader from '@/components/shared/PageHeader'
import PageLayout from '@/components/shared/PageLayout'
import { Info } from 'phosphor-react'

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
      <PageLayout title="todo">
        <NewTaskForm />
        <div
          id="container"
          className="full relative grid max-h-[440px] grid-rows-[1fr_50px] divide-y divide-neutral-7 rounded-lg bg-white shadow-2xl dark:divide-neutralDark-7 dark:bg-neutralDark-2 dark:shadow-none"
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
        <div className="mt-20 text-center text-sm text-zinc-400 dark:text-zinc-700">
          <div className="flex items-center space-x-2">
            <Info size={20} weight="duotone" className="text-zinc-300 dark:text-zinc-700" />
            <span>Drag and drop to reorder list</span>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
export default Index
