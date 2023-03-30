import { GridItem, Skeleton } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <GridItem>
      <Skeleton width="100%" height="100%"></Skeleton>
    </GridItem>
  );
};

export default Loader;