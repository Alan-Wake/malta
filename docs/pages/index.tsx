import * as React from "react";
import {
  Flex,
  Icon,
  Box,
} from "../../dist/core";
import styled from "styled-components";
import {
  hover
} from "../../dist/utils";
import Router from "next/router"

const HoverElem = styled.div<any>`
  ${hover}
  width: 50px;
  height: 50px;
  background: rgba(22,27,72,0.6);
  cursor: pointer;
`;

class Index extends React.Component<any, any> {

  render() {
    return (
      <div>
        <Box cursor="pointer" size="50px" bg="blue.royal" hover={{ background: "rgba(22,27,72,0.3)" }} ml={1}
          onClick={() => { Router.router.push("/release") }} />
        <Icon name="arrow-right" color="rgba(22,27,72,0.3)" size={50} cursor="pointer" hover={{ color: "rgba(22,27,72,0.8)" }} />
        <Flex cursor="pointer" size="50px" bg="red" />
        <HoverElem hover={{ "background": "red" }} />
      </div>
    );
  }
}

export default Index;
