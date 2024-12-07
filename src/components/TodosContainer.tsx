import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";

type Props = {
  children: React.ReactNode;
};

interface StyledSectionProps {
  isDarkMode: boolean;
}

const StyledSection = styled.section<StyledSectionProps>`
  background-image: ${(props: StyledSectionProps) =>
    props.isDarkMode
      ? "url('/bg-mobile-dark.jpg')"
      : "url('/bg-mobile-light.jpg')"};
  background-repeat: no-repeat;
  background-size: cover;
  height: 20rem;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    background-image: ${(props: StyledSectionProps) =>
      props.isDarkMode
        ? "url('/bg-desktop-dark.jpg')"
        : "url('/bg-desktop-light.jpg')"};
    height: 30rem;
  }
`;

const StyledArea = styled.div`
  position: absolute;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 35rem;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    top: 12rem;
    width: 50rem;
  }
`;

const TodosContainer = ({ children }: Props) => {
  const { darkMode } = useDarkMode();
  return (
    <StyledSection isDarkMode={darkMode}>
      <StyledArea>{children}</StyledArea>
    </StyledSection>
  );
};

export default TodosContainer;
