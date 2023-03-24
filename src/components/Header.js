import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  Drawer,
  ListItemButton,
} from "@mui/material";
import { Box } from "@mui/system";

import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import Head from "./Head";

const Header = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  });

  const MenuItem = [
    { Name: "Home", Link: "#" },
    { Name: "About Us", Link: "#" },
    { Name: "Services", Link: "#" },
    { Name: "Portfoilo", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact", Link: "#" },
  ];

  const first = MenuItem.slice(0, 3);
  const second = MenuItem.slice(3, MenuItem.length);
  const [openMenu, setopenMenu] = useState(false);
  return (
    <>
      {/* <Head /> */}

      <AppBar
        color="default"
        elevation={0}
        sx={{
          width: "80%",
          m: "0 auto",
          position: "relative",
          borderRadius: "6px",
        }}
      >
        <StyledToolbar>
          <MenuBox sx={{ display: { xs: "none", md: "flex" } }}>
            {first.map((i) => (
              <Typography variant="h6">{i.Name}</Typography>
            ))}
          </MenuBox>

          <Box>
            <Typography variant="h4" fontWeight="blod">
              DOOM
            </Typography>
          </Box>

          <MenuBox>
            {second.map((i) => (
              <Typography
                variant="h6"
                sx={{ display: { xs: "none", md: "inherit" } }}
              >
                {i.Name}
              </Typography>
            ))}
            <MenuIcon
              sx={{
                display: { xs: "flex", md: "none" },
                cursor: "pointer",
              }}
              onClick={() => setopenMenu(!openMenu)}
            ></MenuIcon>
          </MenuBox>
        </StyledToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setopenMenu(!openMenu)}
        >
          <List>
            <ListItem>
              {MenuItem.map((i) => (
                <ListItemButton>{i.Name}</ListItemButton>
              ))}
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Header;
