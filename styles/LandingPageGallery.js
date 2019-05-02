import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
Wrapper.displayName = 'Wrapper';

export const Content = styled.div`
  text-align: center;
  margin-top: -20px;

  @media (min-width: 600px) {
    margin-top: 80px;
  }

  @media (min-width: 960px) {
    margin-top: 160px;
  }
`;
Content.displayName = 'Content';

export const Input = styled.input`
  max-width: 100%;

  :hover {
    cursor: pointer;
  }
`;
Input.displayName = 'Input';

export const ModalImage = styled.img`
  /* width: 100%; */
  max-width: 100%;
  height: auto;
  max-height: 80vh;
  @media (min-width: 960px) {
    max-width: 750px;
    width: unset;
    /* max-width: 580px; */
    /* height: auto; */
    /* max-height: 80%; */
  }
`;
ModalImage.displayName = 'ModalImage';

export const Figcaption = styled.figcaption``;
Figcaption.displayName = 'Figcaption';

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-direction: row;
    flex: 1 1 auto;
  }
`;
ImagesWrapper.displayName = 'ImagesWrapper';

export const TwoImages = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;
TwoImages.displayName = 'TwoImages';

export const Image = styled.div`
  @media (min-width: 600px) {
  }
`;
Image.displayName = 'Image';
