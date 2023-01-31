import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
import './bookRow.css';
import {AiFillEdit} from 'react-icons/ai'

export const BookRow = ({books,setBooks,setAuthor,setBookid,setName,setEdit,setActiveIndex}) => {
    const book_del=(index) =>{
        let copy=books;
        copy.splice(index,1);
        setBooks([...copy]);
    }
    const book_edit=(index) => {
        const book=books[index];
        setBookid(book.bookid);
        setName(book.name);
        setAuthor(book.author);
        setEdit(true);
        setActiveIndex(index);

    }
  return (
    <div className='divpa'>
        <table>
            {
                books.map((book,index) =>{
                    return (
                        <div className='d'>
                            <tbody>
                                <tr>
                                    <th>{book.bookid}</th>
                                    <th>{book.name}</th>
                                    <th>{book.author}</th>
                                    <a  onClick={() =>book_del(index)}><AiFillDelete className='btn'></AiFillDelete></a>
                                    
                                    <a onClick={() =>book_edit(index)}><AiFillEdit className='btn'></AiFillEdit></a>
                                </tr>
                            </tbody>
                        </div>
                    )
                })
            }
        </table>
    </div>

  )
}
