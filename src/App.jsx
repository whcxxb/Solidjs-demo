import { createSignal, createEffect } from 'solid-js'
import { BookList } from './BookList'
import { AddBook } from './AddBook'

const initialBooks = [
  { title: 'Code Complete', author: 'Steve McConnell' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Living a Feminist Life', author: 'Sarah Ahmed' }
]

// const [count, setCount] = createSignal(0)
// createEffect(() => {
//   console.log(count())
// })
// setCount(count() + 1)
// function Counter() {
//   const [count, setCount] = createSignal(0)
//   const increment = () => {
//     setCount(count() + 1)
//   }
//   return (
//     <div>
//       Current count: {count()}
//       <button onclick={increment}>add</button>
//     </div>
//   )
// }
function Bookshelf(props) {
  const [books, setBooks] = createSignal(initialBooks)
  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks} />
      {/* <Counter /> */}
    </div>
  )
}

function App() {
  return <Bookshelf name="solid" />
}

export default App
