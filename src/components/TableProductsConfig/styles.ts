import styled from "styled-components"
 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  background-color: #E6E6E6;
  padding: 0px 10px 0px 25px;
  height: 500px;
  border-radius: 20px;
  overflow-y: auto;
  `;






export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`;
export const TableHeader = styled.thead`
  text-align: center;
  align-items: center;
  justify-content: center;
  `;

export const TableRow = styled.tr`
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const TitleColumn = styled.th`
  color: #FFFF;
  font-weight: 700;
  padding: 1rem 0 1.5rem;
  text-align: center;
  justify-content: center;
  line-height: 0.90rem;
  background: var(--red);
  border-radius: 0.08rem;
  font-size: 13px;

  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  `;
export const TableBody = styled.tbody``;
export const TableData = styled.td`
  padding: 0.8rem 1.2rem;
  border: 0;
  background: var(--silver);
  color: #000;
  border-radius: 0.10rem;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  `;

export const ButtonUpdate = styled.button`
  background-color: #E49B2E;
  width: 80px;
  border-radius: 5px;
  border: none;
  margin-top: -3px;
  cursor: pointer;
  color: #fff;
  box-shadow: 0px 1px 3px 0px #222;
  font-size: 12px;
  font-weight: bold !important;
  height: 30px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
  `;

export const ButtonDel = styled.button`
  background-color: #B95151;
  width: 80px;
  border-radius: 5px;
  border: none;
  margin-top: -3px;
  cursor: pointer;
  color: #fff;
  box-shadow: 0px 1px 3px 0px #222;
  font-size: 12px;
  font-weight: bold !important;
  height: 30px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8)
  }
`;
  