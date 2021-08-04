import styled from "styled-components/macro";

export const Container = styled.div`
  margin: auto;
  display: flex;
  padding: 3rem 12rem;
  flex-direction: column;
  text-align: center;
  @media all and (max-width: 1200px) {
    padding: 3rem 8rem;
  }
  @media all and (max-width: 1008px) {
    padding: 3rem 6rem;
    padding-bottom: 0rem;
  }
  @media all and (max-width: 768px) {
    padding: 3rem 2rem;
    padding-bottom: 0rem;
  }
`;

export const Row = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 20vh;
  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 25%;
  min-width: 150px;
  @media all and (max-width: 768px) {
    width: 60%;
    padding: 2rem 0rem;
  }
  @media all and (max-width: 576px) {
    width: 80%;
  }
  img {
    border-radius: 10px;
    height: auto;
    width: 100%;
    object-fit: cover;
  }
`;
