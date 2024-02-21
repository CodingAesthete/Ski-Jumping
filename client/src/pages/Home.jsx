import { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import { motion } from "framer-motion";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/get');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array to run only once on component mount

  const screenWidth = window.innerWidth;
  console.log('Screen width:', screenWidth, 'pixels');

  return (
    <div className=' min-w-[4rem] mx-2 p-4 sm:max-w-[34rem] md:max-w-[48rem] lg:max-w-[62rem] 2xl:max-w-[82rem] sm:mx-auto min-h-[79.5vh] m-[1.5rem] 2xl:my-[2.5rem] bg-blue-100 bg-opacity-95 rounded-lg sm:p-5 lg:p-3 flex items-center flex-col mb-8 pb-6'>
      <header>
        <h1 className='font-bold text-3xl 2xl:text-4xl text-center italic font-custom tracking-wide text-violet-900 mt-2 2xl:mt-3'>Newsfeed</h1>
      </header>
      <div className='mx-auto'>
        {posts && posts.length > 0 && posts.map((post) => (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
            key={post._id}
          >
            <PostItem post={post} key={post._id} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
