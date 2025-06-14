import styled from "styled-components"
import {LazyLoadImage } from "react-lazy-load-image-component"
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";

const Card = styled.div`
    position: relative;
    display: flex;
    border-radius: 20px;
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
        scale: 1.05;
    };
    &:nth-child(7n+1) {
        grid-column: auto/span 2;
        grid-row: auto/span 2;
    }
`;

const HoverOverlay= styled.div`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2px;
    backdrop-filter: blur(2px);
    background: rgba(0,0,0,0.5);
    color: ${({ theme }) => theme.white};
    transition: opacity 0.3s ease;
    border-radius: 6px;
    justify-content: end;
    padding: 12px;

    ${Card}:hover & {
        opacity: 1;
    }
`;

const Prompt = styled.div`
    font-weight: 400px;
    font-size: 15px;
    color: ${({ theme }) => theme.white};
`;

const Author = styled.div`
    font-weight: 600px;
    font-size: 14px;
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${({ theme }) => theme.white};
`;

const ImageCard = () => {
  return (
    <Card>
        <LazyLoadImage width="100%" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"/>
        <HoverOverlay>
            <Prompt>Prompt</Prompt>
            <Author>
                <Avatar
                    sx={{width: "32px", height: '32px'}}
                >
                    S
                </Avatar>
                Sakshi
            </Author>
            {/* <DownloadRounded>
                fch
            </DownloadRounded> */}
        </HoverOverlay>
    </Card>
  )
}

export default ImageCard