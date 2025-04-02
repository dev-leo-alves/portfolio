import styled from 'styled-components';

export const FormStatus = styled.div`
  width: 100%;
  flex-direction: column;

  button:disabled {
    background-color: var(--emerald-600);
    cursor: not-allowed;
  }
  
  .form-status {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
  }
  
  .form-status.success {
    background-color: #d4edda;
    color: #155724;
  }
  
  .form-status.error {
    background-color: #f8d7da;
    color: #721c24;
  }
  
  .form-status.info {
    background-color: #e2f3fd;
    color: #0c5460;
  }
  `