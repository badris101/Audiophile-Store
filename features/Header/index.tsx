import React from "react";
import { Container, Group, Header as MTHeader } from "@mantine/core";
import { HeaderStyle } from "./styles";

const header_height = 96;

const Header = () => {
  return (
    <Container>
      <MTHeader sx={HeaderStyle} height={header_height}>
        <Group position="apart" sx={{ height: "100%" }}>
          <span>Logo</span>
          <span>Logo</span>
          <span>Logo</span>
        </Group>
      </MTHeader>
    </Container>
  );
};

export default Header;
