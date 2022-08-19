import styled from "styled-components";
import placeHolder from "../public/placeholder.png";

const Name = styled.div`
  font-size: 1rem;
  color: #ffebcd;
`;
const PortraitFrame = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Avatar = () => {
  return (
    <PortraitFrame>
      <img
        src={placeHolder.src}
        alt="placeholder"
        style={{ height: "5rem", width: "5rem" }}
      ></img>
      <Name>Alex Orlow</Name>
    </PortraitFrame>
  );
};
