import './tailwind.css'
import '@fontsource/josefin-sans/variable.css'
import { setupCounter } from './counter.js'

// data
let todos = [
  { id: 1, title: 'Complete online javascript course', completed: true },
  { id: 2, title: 'Jog around the park 3x', completed: false },
  { id: 3, title: '10 minute meditation', completed: false },
  { id: 4, title: 'Read for 1 hour', completed: false },
  { id: 5, title: 'Pick up groceries', completed: false },
  { id: 6, title: 'Complete Todo App from Frontend Mentors', completed: false },
]
const checkBoxClasses = {
  completed: ['border-none', 'text-white', 'bg-gradient-to-tr', 'from-purple-500', 'to-cyan-500'],
  pending: ['border-2', 'dark:border-zinc-700'],
}
const listItemTitleClasses = {
  completed: ['line-through', 'text-zinc-300', 'dark:text-zinc-700'],
  pending: [],
}
const outerHtmlListItemClasses = [
  'group',
  'px-6',
  'py-4',
  'flex',
  'items-center',
  'justify-between',
  'text-zinc-600',
  'dark:text-zinc-600',
]
const actions = {
  'delete-item': deleteTaskById,
  'mark-completed': () => {},
  'clear-completed': () => {},
}

// templates (components)
const listItemInnerHtmlTemplate = `
    <div class="flex items-center space-x-4">
        <span data-role="check-box" class="group inline-flex items-center justify-center h-7 w-7 aspect-square rounded-full border-2 text-white dark:border-zinc-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
               <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </span>
        <span data-role="title" class="px-2 w-full"><!---- Title here ----></span>
    </div>
    <button data-action="delete-item" class="hidden group-hover:inline-flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
`

// handlers
function addNewTask(task) {
  todos.push(task)
  console.log(todos)
}
function deleteTaskById(id) {
  todos = todos.filter(todo => todo.id !== id)
  updateTodosList()
  console.log(todos)
}
function updateTodosList() {
  todosList.innerHTML = ``
  todos.forEach(({ completed, id, title }) => {
    const listItem = createListItem({ title, id, completed })
    todosList.appendChild(listItem)
  })
}
function handleClearCompleted() {
  //  TODO
}
const createListItem = ({ title, id, completed }) => {
  //  1. create the containing li tag
  const htmlLiElement = document.createElement('li')
  htmlLiElement.classList.add(...outerHtmlListItemClasses)
  htmlLiElement.setAttribute('data-item-id', id)

  //  2a. add child elements
  htmlLiElement.innerHTML = listItemInnerHtmlTemplate
  //  2b. add child elements classes
  const _checkBox = htmlLiElement.querySelector('[data-role="check-box"]')
  _checkBox.classList.add(...checkBoxClasses[completed ? 'completed' : 'pending'])
  const _checkBoxCheckIndicator = htmlLiElement.querySelector('[data-role="check-box"] > svg')
  _checkBoxCheckIndicator.classList.add(completed ? 'block' : 'hidden')
  const _title = htmlLiElement.querySelector('[data-role="title"]')
  _title.textContent = title
  _title.classList.add(...listItemTitleClasses[completed ? 'completed' : 'pending'])

  //  3. attach event handlers
  const actionTrigger = htmlLiElement.querySelector('[data-action]')
  const _action = actionTrigger.dataset['action']
  actionTrigger.addEventListener('click', () => actions[_action](id))

  //  4. return the element
  return htmlLiElement
}
const handleSubmit = event => {
  event.preventDefault()
  const { target: form } = event
  const { task } = form
  const _task = { id: todos.length + 1, title: task.value, completed: false }
  addNewTask(_task)
  updateTodosList()
  form.reset()
}

// Setup
const app = document.createElement('div')
const todosList = document.createElement('ul')
todosList.id = 'todos'
todosList.classList.add(
  'grid',
  'rounded-t-lg',
  'divide-y',
  'dark:divide-zinc-700',
  'overflow-y-auto'
)
updateTodosList()
app.classList.add('h-screen', 'relative')
app.innerHTML = `
    <div class="h-80  relative">
        <img class="max-h-full w-full  object-cover" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="">
        <div class="absolute w-full inset-0 h-full bg-gradient-to-tr from-purple-600 dark:from-purple-700 to-cyan-300 dark:to-cyan-600"></div>
    </div>
    <div class="relative flex flex-col mx-auto -mt-60 w-[327px] md:w-[540px]">
      <header class="flex mb-10 justify-between items-center text-white">
        <h1 class="text-4xl font-bold tracking-widest uppercase">todo</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="dark:hidden w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="hidden dark:inline-block w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </header>
      <!--  Input -->
      <form>
        <div class="px-6 mb-6 h-16 rounded-md border bg-white dark:bg-zinc-800 dark:border-zinc-700 flex items-center space-x-4">
            <span class="inline-block h-6 w-6 rounded-full bg-transparent border-2 dark:border-zinc-700"></span>
            <input name="task" type="text" placeholder="create new task" class="px-2 w-full border-0 bg-inherit text-zinc-400 dark:text-zinc-600 focus:outline-none focus:ring-0 placeholder-zinc-400 dark:placeholder-zinc-600">
        </div>
      </form>
      <div id="container" class="relative full max-h-[440px] grid grid-rows-[1fr_50px] bg-white dark:bg-zinc-800 shadow-2xl rounded-lg divide-y dark:divide-zinc-700">
           <!---- Insert List Container Here ------------------------------->
        <footer class=" text-zinc-500 dark:text-zinc-600 flex items-center justify-between w-full   px-6 py-4 text-sm">
            <span class="text-xs"><span data-remaing="5">5</span> items left</span>
            <span class="font-medium tracking-wide flex items-center space-x-2">
                <button data-link="all" class="text-blue-600 dark:text-blue-500 font-bold">All</button>
                <button data-link="active" class="hover:text-zinc-600 dark:hover:text-zinc-500">Active</button>
                <button data-link="completed" class="hover:text-zinc-600 dark:hover:text-zinc-500">Completed</button>
            </span>
            <button data-action="clear-completed" class="hover:text-zinc-600 dark:hover:text-zinc-500">Clear completed</button>
        </footer>
      </div>
      <p class="text-sm text-center text-zinc-400 dark:text-zinc-700 mt-20">Drag and drop to reorder list</p>
    </div>
`
const container = app.querySelector('#container')
container.insertBefore(todosList, container.querySelector('footer'))
app.querySelector('form').addEventListener('submit', handleSubmit)

const root = document.querySelector('#root')
root.appendChild(app)
console.log(app)
