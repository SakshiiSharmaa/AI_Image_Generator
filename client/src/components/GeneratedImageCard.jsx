import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: ${({ theme }) => theme.black + 50};
  border-radius: 24px;
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating your image...
        </>
      ) : (
        <>
          {src ? <Image src={src} /> : <> Write a prompt to generate image</>}
        </>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
