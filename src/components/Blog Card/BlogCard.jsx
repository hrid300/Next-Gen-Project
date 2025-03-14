
import Flex from '../Flex'
import { Link } from 'react-router';

const BlogCard = ({img,h6}) => {
  return (
    <Flex className='flex-col md:p-[35px]  p-[30px]  bg-[#16192A]  border border-[#2E3150] z-50'>
         <img
        src={img}
        className="md:w-[297px] sm:w-[200px] w-[297px] object-cover"
      />

        
        <Link to='/' className='text-[#BC61F3]'><h6 className='font-primary font-medium text-[19px] md:w-[297px] sm:w-[200px]  w-[297px]'>{h6}</h6></Link>
        

        <p className=' font-extrabold text-[22px] md:w-[297px] sm:w-[200px]  w-[297px]'>Best NFTs arts collections from best artists </p>
    </Flex>
  )
}

export default BlogCard