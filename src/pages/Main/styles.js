import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  position: relative;

  .error {
    position: absolute;
    left: 0;
    bottom: -17px;
    font-size: 11px;
    font-weight: bold;
    color: #d45353;
    display: inline-block;
    border-bottom: 1px solid #d45353;
  }
`;

export const FormInput = styled.input.attrs(props => ({
  disabled: props.isLoading,
}))`
  flex: 1;
  border: 1px solid ${props => (props.error ? '#d45353' : '#eee')};
  padding: 0 15px;
  height: 60px;
  border-radius: 4px;
  font-size: 16px;
  min-width: 0;

  &[disabled] {
    cursor: not-allowed;
    background: #eee;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.isLoading,
}))`
  background: #7159c1;
  border: 0;
  margin-left: 10px;
  border-radius: 4px;
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.isLoading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
