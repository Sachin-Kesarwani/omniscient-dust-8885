import React from 'react';
import {
    Box,
    Text,
    Flex,
    Spacer,

} from "@chakra-ui/react";

const NavDetail1 = [
    {
      labels: "Do more, Be More  | "
    },
    {
      labels: "Try in 3D  | "
    },
    {
      labels: "Store Locator  | "
    },
    {
      labels: "Quality  | "
    },
    {
      labels: "USA  | "
    },
    {
      labels: "Singapore  | "
    },
    {
      labels: "UAE  | "
    },
    {
      labels: "John Jacobs  | "
    },
    {
      labels: "Aqualens  | "
    },
    {
      labels: "Cobrowsing  | "
    },
    {
      labels: "Engineering Blog  | "
    },
    {
      labels: "Lenskart Franchise  | "
    },
    {
        labels: "Lenskart Optom Partner Program  | "
    },
    {
      labels: "Contact us"
    }
  ];
  

export const NavCard1 = () => {
    return (
      <Box cursor="pointer">
        <Flex gap={2} pl={5} pt={2}>
          {NavDetail1.map((i, index) => (
            <Box key={index}>
              <Text fontSize="12px" _hover={{ textDecoration: "underline" }}>
                {i.labels}
              </Text>
              <Spacer />
            </Box>
          ))}
        </Flex>
      </Box>
    );
  };
