import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;
const LabelContainer = styled.div`
  padding-right: 58px;
  transform: translateY(3px);
  @media (max-width: 768px) {
    width: 100%;
    padding: 25px 0;
  }
`;
const TextsContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
const Label = styled.p`
  background-color: var(--color-skyblue);
  padding: 6px 0;
  color: white;
  font-size: 12px;
  width: 72px;
  text-align: center
`;
const Date = styled.p`
  margin-right: 4vw;
`;
const Time = styled.p`
  margin-right: 4vw;
`;
const Hint = styled.p`
  color: var(--color-gray);
  font-size: 11px;
`;

export const Schedule = ({schedules,place,message}) => {
  return (
    <>
      <Container>
        <LabelContainer>
          <Label>日時</Label>
        </LabelContainer>
        <TextsContainer>
          {schedules.map(schedule => 
            <Text>
              <Date>{schedule.date}</Date>
              <Time>{schedule.time}</Time>
              <p>{schedule.title}</p>
            </Text>
          )}
        </TextsContainer>
      </Container>
      <Container>
        <LabelContainer>
          <Label>場所</Label>
        </LabelContainer>
        <TextsContainer>
          <p>{place}</p>
          <Hint>{message}</Hint>
        </TextsContainer>
      </Container>
    </>
  );
};

