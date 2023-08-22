import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function LoadingAnimation({ LoadingMessage }) {
  return (
    <Wrapper>
      <ThreeDots
        height="30"
        width="90"
        radius="9"
        color="#F4ACB7"
        ariaLabel="three-dots-loading"
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1{
    margin-top: 20px;
  }
`;
