import styled, { css } from 'styled-components';

interface ContainerProps {
  done: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  opacity: ${(props) => (props.done ? 0.6 : 1)};
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
  }

  p {
    margin-top: 5px;
    font-weight: 400;
    font-size: 14px;
    color: #808080;
  }

  svg {
    cursor: pointer;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  /*
  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      h4,
      header,
      svg {
        opacity: 0;
      }
    `}
    */
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
`;
