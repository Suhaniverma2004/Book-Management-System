import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 bg-indigo-500 h-screen'>
      {/* <BackButton /> */}
      <h1 className='text-7xl my-4 text-white text-center '>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col bg-white bg-opacity-20 shadow-2xl rounded-xl w-fit p-4 mx-auto'>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-indigo-200'>Id</span>
            <span className="text-rose-200 text-2xl">{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-indigo-200'>Title</span>
            <span className="text-rose-200 text-2xl">{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-indigo-200'>Author</span>
            <span className="text-rose-200 text-2xl">{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-indigo-200'>Publish Year</span>
            <span className="text-rose-200 text-2xl">{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-indigo-200'>Create Time</span>
            <span className="text-rose-200 text-2xl">{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-2xl mr-4 text-indigo-200'>Last Update Time</span>
            <span className='text-rose-200 text-2xl'>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
