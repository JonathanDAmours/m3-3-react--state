import React from "react";
import styled from "styled-components";

const TheWord = ({ word }) => {
  console.log(word);

  return (
    <Wrapper>
      {word.revealed.map((l) => {
        return <Span line={!l}>{l}</Span>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
`;

const Span = styled.span`
  color: limegreen;
  display: block;
  border-bottom: ${(props) => (props.line ? "2px solid limegreen" : "none")};
  width: 30px;
  margin: 0 3px;
  text-align: center;
`;

export default TheWord;
