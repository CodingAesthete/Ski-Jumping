import { Link } from 'react-router-dom';

export default function PostItem({ post }) {
  return (
    <div className="entry mx-auto lg:w-10/12 flex flex-col mb-6 mt-6 gap-6">
      <div className='w-5/6 sm:w-3/4 2xl:w-5/6 mx-auto mt-1'>
        <img src={post.image} alt="jumper" className="w-full h-auto rounded-sm" />
      </div>
      <div className=''>
        <h2 className='text-xl 2xl:text-3xl font-bold mb-1 2xl:mb-2 italic text-center'>{post.title}</h2>
        <h3 className='text-blue-800 2xl:text-2xl text-custom font-bold mr-2 text-center'>{post.username}</h3>
        <p className='entry-text text-md 2xl:text-2xl 2xl:leading-9 my-2 2xl:my-4 leading-7 text-justify indent-4'>{post.description}</p>
      </div>
      <div className="h-1 bg-blue-900"></div>
    </div>
  );
}
