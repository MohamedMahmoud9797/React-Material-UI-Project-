import { Divider, Drawer, List, useTheme, IconButton } from "@mui/material";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";

const Drawerr = ({
  drawerWidth,
  setmyMOde,
  noneORblock,
  drawerType,
  hideDrawer,
}) => {
  const currentLocation = useLocation();

  const navigate = useNavigate();
  const theme = useTheme();

  const list = [
    { text: "profile", ico: <Person2 />, path: "/profile" },
    { text: "settings", ico: <Settings />, path: "/settings" },
    { text: "logout", ico: <Logout />, path: "/" },
  ];

  const additionalItems = [
    {
      key: "home",
      path: "/",
      icon: <Home />,
      text: "Home",
    },
    {
      key: "create",
      path: "/create",
      icon: <Create />,
      text: "Create",
    },
  ];

  const mappedList = [
    ...additionalItems.map((item) => (
      <ListItem
        key={item.key}
        sx={{
          bgcolor:
            currentLocation.pathname === item.path
              ? theme.palette.favColor.main
              : null,
        }}
        disablePadding
      >
        <ListItemButton
          onClick={() => {
            navigate(item.path);
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    )),
    ...list.map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemButton onClick={() => navigate(item.path)}>
          <ListItemIcon>{item.ico}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    )),
  ];

  return (
    <Drawer
      sx={{
        display: { xs: noneORblock, sm: "block" },

        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrawer();
      }}
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center", mb: "14px" }}
          disablePadding
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );

              setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "orange" }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </ListItem>

        <Divider />

        {mappedList}
      </List>
    </Drawer>
  );
};

export default Drawerr;
