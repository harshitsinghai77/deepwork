import React, { Component } from "react";
import styled from "@emotion/styled";
import { Box } from "grommet";

import SideBar from "../deepwork/components/sidebar";
import Column from "./column";
import reorder, { reorderQuoteMap } from "./reorder";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { authorQuoteMap } from "./data";

const ParentContainer = styled.div`
  height: ${({ height }) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;

export default class Board extends Component {
  /* eslint-disable react/sort-comp */
  static defaultProps = {
    isCombineEnabled: false,
  };

  state = {
    columns: authorQuoteMap,
    ordered: Object.keys(authorQuoteMap),
  };

  onDragEnd = (result) => {
    if (result.combine) {
      if (result.type === "COLUMN") {
        const shallow = [...this.state.ordered];
        shallow.splice(result.source.index, 1);
        this.setState({ ordered: shallow });
        return;
      }

      const column = this.state.columns[result.source.droppableId];
      const withQuoteRemoved = [...column];
      withQuoteRemoved.splice(result.source.index, 1);
      const columns = {
        ...this.state.columns,
        [result.source.droppableId]: withQuoteRemoved,
      };
      this.setState({ columns });
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === "COLUMN") {
      const ordered = reorder(
        this.state.ordered,
        source.index,
        destination.index
      );

      this.setState({
        ordered,
      });

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    });

    this.setState({
      columns: data.quoteMap,
    });
  };

  render() {
    const columns = this.state.columns;
    const ordered = this.state.ordered;
    const {
      containerHeight,
      useClone,
      isCombineEnabled,
      withScrollableColumns,
    } = this.props;

    const board = (
      <Droppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={Boolean(containerHeight)}
        isCombineEnabled={isCombineEnabled}
      >
        {(provided) => (
          <Box
            direction="row"
            className="min-h-screen"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {ordered &&
              ordered.map((key, index) => (
                <Column
                  key={key}
                  index={index}
                  title={key}
                  quotes={columns[key]}
                  isScrollable={withScrollableColumns}
                  isCombineEnabled={isCombineEnabled}
                  useClone={useClone}
                />
              ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    );

    return (
      <Box direction="row">
        <SideBar />
        <Box margin="small">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {containerHeight ? (
              <ParentContainer height={containerHeight}>
                {board}
              </ParentContainer>
            ) : (
              board
            )}
          </DragDropContext>
        </Box>
      </Box>
    );
  }
}
