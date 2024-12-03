import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const StyledSection = styled.section`
  background-image: url("/bg-desktop-light.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 30rem;
  position: relative;
`;

const StyledArea = styled.div`
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translateX(-50%);
  width: 50rem;
`;

const TodosContainer = ({ children }: Props) => {
  return (
    <StyledSection>
      <StyledArea>{children}</StyledArea>
    </StyledSection>
  );
};

export default TodosContainer;
