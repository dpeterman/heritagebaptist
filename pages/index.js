import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Colors = {
  white: "#fff",
  primary: "#3f80c2",
  primary_light: "#EFF5FA",
};

const Logo = styled.img`
  height: 74px;
`;

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${Colors.white};
  width: 100%;
  padding: 16px 32px;
`;

const NavLinks = styled.ul`
  display: flex;
  grid-gap: 24px;
  align-items: center;
  justify-content: flex-end;
  list-style: none;

  a {
    padding: 8px;
    border-radius: 4px;
    color: ${Colors.primary};
    transition: all 200ms linear;

    &::selection {
      background: none;
    }

    &:hover {
      background: ${Colors.primary_light};
    }
  }
`;

const Navbar = () => (
  <NavContainer>
    <div>
      <Link href="/">
        <Logo src="./logo.svg" alt="Heritage Baptist Church" />
      </Link>
    </div>

    <NavLinks>
      <li>
        <a href="/leadership">Our Leadership</a>
      </li>
      <li>
        <a href="https://www.facebook.com/pg/heritagebaptistlex/videos/">
          Sermons
        </a>
      </li>
      <li>
        <a href="/beliefs">What We Believe</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
      <li>
        <a href="/give">Give</a>
      </li>
    </NavLinks>
  </NavContainer>
);

const HeroContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 32px;
  height: 720px;
  background: linear-gradient(to right, #000000ba, #ffffff1a),
    url(/hero-banner.jpg) top left no-repeat;
  background-size: cover;

  > div {
    width: 1100px;
    color: ${Colors.white};

    h1 {
      margin: 0;
      font-size: 84px;
    }

    p {
      margin: 48px 0;
      line-height: 1.5em;
      width: 800px;
    }
  }
`;

const Button = styled.button`
  background: ${Colors.white};
  border: none;
  border-radius: 4px;
  padding: 24px 32px;
  color: ${Colors.primary};
  font-size: 18px;
  transition: all 200ms linear;

  &:hover {
    background: ${Colors.primary_light};
    cursor: pointer;
  }

  svg {
    margin-left: 16px;
  }
`;

const Hero = () => (
  <HeroContainer>
    <div>
      <h1>
        For the glory of God,
        <br />
        to the ends of the earth
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
        pretium orci. Fusce leo mauris, semper vitae ultricies ac, gravida vitae
        metus. Mauris quis nisi ut est suscipit tempus. Curabitur ultrices quis
        mi ac placerat. Phasellus vel varius odio, et imperdiet lacus. Cras
        fermentum fermentum iaculis. Nullam varius felis tellus, at malesuada mi
        convallis aliquam. Curabitur leo enim, scelerisque et tellus eu,
        fringilla sodales eros. Morbi faucibus justo dui, id posuere sem
        tincidunt at.
      </p>
      <Button>
        Plan Your Visit <FontAwesomeIcon icon={faArrowRightLong} />
      </Button>
    </div>
  </HeroContainer>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
