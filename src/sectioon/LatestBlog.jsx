import BlogCard from "../components/Blog Card/BlogCard";
import Button from "../components/Button";
import Container from "../components/Container"
import Title from "../components/Title";
import Flex from './../components/Flex';
import blog_1 from '../assets/image/Blog1.png'
import blog_2 from '../assets/image/Blog2.png'
import blog_3 from '../assets/image/Blog3.png'
import blog_4 from '../assets/image/Blog4.png'


const LatestBlog = () => {
  return (
    <section className="lg:mb-[200px] mb-[100px] px-2 MyXl:px-0">
        <Container>
            <Flex className="flex-row justify-between items-center">
                <Title title={"Our Latest Blog"} />
                <Button className="md:w-[237px] w-[150px] text-center h-[54px] font-medium whitespace-nowrap overflow-hidden text-balance text-[17px]  " text={"Read our blogs"}/>
            </Flex>
            <Flex className="gap-5 md:flex-row xl:flex-nowrap flex-wrap justify-center items-center p-9 ">
                <BlogCard  img={blog_1} h6={"Arts"} />

                <BlogCard img={blog_2} h6={"NFTs"} />

                <BlogCard img={blog_3} h6={"Design"} />
                
                <BlogCard img={blog_4} h6={"Arts"} />
               

                </Flex>
        </Container>
    </section>
  )
}

export default LatestBlog