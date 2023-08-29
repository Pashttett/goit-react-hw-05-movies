import styled from "styled-components";

export const CastContainer = styled.div`
  margin-top: 20px;
  padding: 30px;
  background-color: #fce7e7c9;
  border-radius: 18px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CastList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 15px;
`;

export const CastItem = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CastImage = styled.img`
  width: 160px;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
`;

export const CastName = styled.span`
  font-size: 18px;
  text-align: center;
  margin-top: 8px;
  font-weight: bold;
`;
