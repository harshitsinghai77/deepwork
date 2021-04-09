import styled from "@emotion/styled";
import { Text } from "grommet";

import { borderRadius, grid } from "../constants";

const getBackgroundColor = (isDragging, isGroupedOver, authorColors) => {
  if (isDragging) {
    return authorColors.soft;
  }

  if (isGroupedOver) {
    return "yellow";
  }

  return "#FFFFFF";
};

const getBorderColor = (isDragging, authorColors) =>
  isDragging ? authorColors.hard : "transparent";

const Container = styled.a`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${(props) => getBorderColor(props.isDragging, props.colors)};
  background-color: ${(props) =>
    getBackgroundColor(props.isDragging, props.isGroupedOver, props.colors)};
  box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px aqua` : "none")};
  padding: ${grid}px;
  min-height: 40px;
  margin-bottom: ${grid}px;
  user-select: none;

  /* anchor overrides */
  color: rgb(9, 30, 66);

  &:hover,
  &:active {
    color: rgb(9, 30, 66);
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.colors.hard};
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${grid}px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Content = styled.div`
  /* flex child */
  flex-grow: 1;
  /*
    Needed to wrap text in ie11
    https://stackoverflow.com/questions/35111090/why-ie11-doesnt-wrap-the-text-in-flexbox
  */
  flex-basis: 100%;
  /* flex parent */
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  margin-top: ${grid}px;
  align-items: center;
`;

const Author = styled.small`
  flex-grow: 0;
  margin: 0;
  background-color: ${(props) => props.colors.soft};
  border-radius: ${borderRadius}px;
  font-weight: normal;
  padding: ${grid / 2}px;
`;

const QuoteId = styled.small`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
  font-weight: normal;
  text-overflow: ellipsis;
  text-align: right;
`;

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent
const QuoteItem = (props) => {
  const { quote, isDragging, isGroupedOver, provided } = props;
  return (
    <Container
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      colors={quote.type.colors}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {/* <Avatar src={quote.author.avatarUrl} alt={quote.author.name} /> */}
      <Content>
        <Text>{quote.content}</Text>
        <Footer>
          <Author colors={quote.type.colors}>{quote.type.name}</Author>
          <QuoteId>id:{quote.id}</QuoteId>
        </Footer>
      </Content>
    </Container>
  );
};

export default QuoteItem;
