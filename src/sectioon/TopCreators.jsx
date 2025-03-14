import Button from "../components/Button";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import TopcreatorComponent from "../components/Topcreatorcomponet/TopcreatorComponent";
import BgImage from "../assets/image/Shade 2.png";

const TopCreators = () => {
  return (
    <section className="z-40 relative mt-[200px]">
      <img
        src={BgImage}
        alt=""
        className="absolute -top-[700px] right-0  " 
      />
      <Container>
        <Flex className="flex-col  items-center">
          <Title title={"Top Creators"} />
          <p className="seconde-text  font-primary mx-auto text-xl max-w-[678px] my-6 text-center ">
            In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
            mi id. Risus, aliquam odio posuere ac in in nisl sed augue.
          </p>
          <Button text={"View All Creators"} className=" self-center " />
        </Flex>
        <TopcreatorComponent />
      </Container>
    </section>
  );
};

export default TopCreators;
