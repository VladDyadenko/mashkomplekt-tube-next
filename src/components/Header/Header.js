import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = [
  { name: "Про нас", path: "/" },
  { name: "Труби", path: "/tube" },
  { name: "Калькулятор", path: "/calculator" },
  { name: "Статті", path: "/articles" },
  { name: "Контакти", path: "/contacts" },
];
const contacts = [
  {
    name: "+380967631047",
    path: "tel:+380967631047",
  },
  {
    name: "stilmagroup@gmail.com",
    path: "mailto:stilmagroup@gmail.com",
  },
];

const settings = ["Linkedin", "Telegram"];

const Header2 = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="bg-hero">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="logo-text font-robotoSlab font-medium mr-[30px] text-2xl"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Машкомплект
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.path}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            className="logo-text font-robotoSlab font-medium mr-[60px] text-2xl xs:text-[14px]"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Машкомплект
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.name} href={page.path}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              {contacts.map((contact) => (
                <Link key={contact.name} href={contact.path}>
                  <Typography
                    sx={{ fontSize: 14, marginY: 0.5 }}
                    textAlign="start"
                  >
                    {contact.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header2;
