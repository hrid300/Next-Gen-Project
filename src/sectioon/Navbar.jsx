import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { NavLink } from "react-router";

let menue = [ 
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Marketplace", link: "/marketplace" },
  { id: 3, name: "Artist", link: "/artist" },
  { id: 4, name: "Comunity", link: "/comunity" },
];

const Navbar = () => {
  return (
    <nav className="py-11 relative z-50">
      <Container>
        <Flex className="justify-between items-center py-5">
          <div>
            <img src={logo} alt="" />
          </div>
          <menue>
            <ul className="flex gap-14">
              {menue.map((item) => (
                <li key={item.id} className="font-primary">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "font-medium text-primary  ActiveNavItem  navItem"
                        : "text-xl hover:text-primary seconde-text "
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </menue>
          <Flex className="gap-4">
            <Button text="Login" link="/login" />
            <Button text="Sing Up" link="/singup" bgshow={false} />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
