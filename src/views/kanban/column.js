import { Heading } from "grommet";
import styled from "@emotion/styled";

import { Draggable } from "react-beautiful-dnd";
import QuoteList from "./primatives/quote-list";

const Header = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ isDragging }) =>
    isDragging ? "rgb(227, 252, 239)" : "rgb(235, 236, 240)"};
  transition: background-color 0.2s ease;
  padding: 8px;
  &:hover {
    background-color: rgb(227, 252, 239);
  }
`;

const Container = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
`;

const Column = (props) => {
  const { title, quotes, index, isScrollable, isCombineEnabled } = props;
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Header isDragging={snapshot.isDragging}>
            <Heading
              level={4}
              color="black"
              isDragging={snapshot.isDragging}
              {...provided.dragHandleProps}
            >
              {title}
            </Heading>
          </Header>
          <QuoteList
            listId={title}
            listType="QUOTE"
            style={{
              backgroundColor: snapshot.isDragging
                ? "rgb(222, 235, 255)"
                : null,
            }}
            quotes={quotes}
            internalScroll={isScrollable}
            isCombineEnabled={Boolean(isCombineEnabled)}
          />
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
