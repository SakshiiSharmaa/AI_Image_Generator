import React from 'react';
import styled from 'styled-components';
import Button from './button';
import TextInput from './TextInput';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  fonst-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;
const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setCreatePostLoading,
  generateImageLoading,
  setGenerateImageLoading,
}) => {

    const generateImage = () =>{
        setGenerateImageLoading(true);
    }
    const createPost = () =>{
        setCreatePostLoading(true);
    }
  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>
          {' '}
          Write your promt according to the image you want to generate!
        </Desc>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name"
          name="name"
          value={post.name}
          handleChange={(e) => setPost({ ...post, promt: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a details prompt about the image..."
          name="name"
          rows="8"
          textArea
          value={post.prompt}
          handleChange={(e) => setPost({ ...post, promt: e.target.value })}
        />
        ** You can post the AI generated image to the Community **
      </Body>
      <Actions>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ''}
          onClick={()=>generateImage()}
        ></Button>
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={
            post.name === '' || post.prompt === '' || post.photo === ''
          }
          onClick={()=> createPost()}
        ></Button>
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;
