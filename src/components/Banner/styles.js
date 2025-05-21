import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 0; /* cria contexto de empilhamento */
  padding: 200px 150px;
  background-size: cover;
  background-position: center;
  background-image: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');

  &::before {
    content: '';
    position: absolute;
    inset: 0; /* equivalente a top: 0; right: 0; bottom: 0; left: 0; */
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }

  /* Conteúdo dentro do container */
  > * {
    position: relative;
    z-index: 1; /* acima do :before */
  }
`;

export const Text = styled.div `
  width: 55%;
  position: relative;
  z-index: 1;
  h2{
  color: var(--white);
  font-size: 62px;
  font-weight: 600;
  margin-bottom: 35px;
  }
  p{
  color: var(--white);
  margin-bottom: 25px;
  }

  span{
  background-color: var(--blue);
  border: 0;
  color: var(--white);
  fonte-size: 14px;
  font-weight: 600;
  padding: 12px 120px;
  line-height: 24px;
  border-radius: 5px;
  cursor: pointer;
  }
`