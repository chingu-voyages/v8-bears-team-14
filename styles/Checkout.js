import styled from 'styled-components';

export const ElementContainer = styled.div`
  padding: 10px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
  display: block;
  margin: 10px 0 20px 0;
  max-width: 500px;
  font-size: 1em;
`;
ElementContainer.displayName = 'ElementContainer';

export const CheckoutForm = styled.div`
  @media screen and (min-width: 960px) {
    margin-right: 20px;
  }
`;
CheckoutForm.displayName = 'CheckoutForm';

export const CenterButton = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
`;
CenterButton.displayName = 'CenterButton';

export const Input = styled.input`
  padding: 10px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
  display: block;
  margin: 10px 0 20px 0;
  width: 100%;
  max-width: 500px;
  font-size: 1em;
`;
Input.displayName = 'Input';

export const TextArea = styled.textarea`
  padding: 10px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
  display: block;
  margin: 10px 0 20px 0;
  width: 100%;
  max-width: 500px;
  font-size: 1em;
  font-family: 'Roboto';
`;
TextArea.displayName = 'TextArea';

export const Select = styled.select`
  padding: 10px 14px;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
  display: block;
  margin: 10px 0 20px 0;
  width: 100%;
  max-width: 500px;
  font-size: 1em;
  font-family: 'Roboto';
`;
Select.displayName = 'Select';

export const Wrapper = styled.div`
  @media (min-width: 960px) {
    display: flex;
  }
`;
Wrapper.displayName = 'Wrapper';

export const ShippmentForm = styled.div`
  flex: 2;
`;
ShippmentForm.displayName = 'ShippmentForm';

export const Cart = styled.div`
  flex: 1;
  order: 2;
  @media screen and (min-width: 960px) {
    margin-top: 30px;
  }
`;
Cart.displayName = 'Cart';

export const FormWrapper = styled.div`
  /* max-width: 630px; */
  margin: 0 auto;
`;
FormWrapper.displayName = 'FormWrapper';
