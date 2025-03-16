import React from "react";
import Container from "../components/Container";
import Flex from "./../components/Flex";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Flex>
          <div>
            <img src={logo} alt="" />
            <p>Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.  Posuere ac in in nisl sed augue.</p>
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
