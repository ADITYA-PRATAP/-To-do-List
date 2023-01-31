
import './App.css';
import {useState} from 'react';
import { BookRow } from './component/BookRow';

function App() {
  const [bookid,setBookid] =useState('');
  const [name,setName] =useState('');
  const [author,setAuthor] =useState('');
const[edit,setEdit]=useState(false);
const[active,setActiveIndex]=useState(null);
  const [books,setBooks]=useState([]);
 

 function add_book(e){
  e.preventDefault();

  const book={
    bookid,
    name,
    author,
  
  };
  if(edit){
    let copy=books;
    Object.assign(copy[active],book)
    setBooks([...copy]);
    setEdit(false);
    setActiveIndex(null);
    setBookid('');
    setName('');
    setAuthor('');

  }
  else{
    

    setBooks([...books,book]);
    setBookid('');
    setAuthor('');
    setName('');
   
  }

if(edit){
  let copy=books;
  Object.assign(copy[active],book);
  setBooks([...copy]);
}
 }


  return (
    <div className="App">
    <form onSubmit={add_book}>
    <div className='divpa2'>
      <h1>TODO List</h1>
      <input type="text" value={bookid} onChange={(e) => setBookid(e.target.value)}></input>
        <button>Add Book</button>
      </div>
      <br></br>
       {/* <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <br></br> */}
        {/* <label>Author</label> */}
        {/* <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input> */}
        <br></br>
      </form>
<BookRow books={books} setBooks={setBooks} setBookid={setBookid} setName={setName} setAuthor={setAuthor} setEdit={setEdit} setActiveIndex={setActiveIndex}></BookRow>
    </div>
  );
}

export default App;
