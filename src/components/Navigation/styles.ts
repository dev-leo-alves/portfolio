import styled from 'styled-components';

const ItemNavStyles = styled.button`
  color: var(--gray-50);
  font-size: 1.4rem;
  font-family: 'JetBrains Mono', monospace;
  cursor: pointer;
  font-weight: 400;

  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);

  transition: 0.2s;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 0rem;
    height: 0.2rem;
    margin-top: 5px;
    background: #fff;
    border-radius: 5rem;
    border: none;
    transition: 0.2s;
    align-self: flex-start;
  }

  &:hover {
    color: var(--emerald-500);
    hr {
      background: var(--emerald-500);
      width: 100%;
    }
  }
`;

export { ItemNavStyles };