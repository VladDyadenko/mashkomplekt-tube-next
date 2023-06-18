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
import { BsCart3, BsFillPersonPlusFill } from "react-icons/bs";
import RegisterForm from "../RegisterForm/RegisterForm";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
                  display: { xs: "block", lg: "none" },
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
              className="logo-text font-robotoSlab font-medium mr-[20px] text-lg md:text-[18px]"
              sx={{
                mr: 2,
                display: { xs: "none", sm: "block", md: "none" },
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
                  marginRight: { lg: 3 },
                }}
              >
                {contacts.map((contact) => (
                  <Link key={contact.name} href={contact.path}>
                    <Typography sx={{ marginY: 0.5 }} textAlign="start">
                      {contact.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
            <Box className="">
              <Box className="flex items-center justify-start font-robotoSlab ">
                <Link
                  href={"/basket"}
                  className="py-[6px] px-2 w-full flex items-center justify-center"
                >
                  <Typography sx={{ display: { xs: "none", lg: "block" } }}>
                    Корзина товарів
                  </Typography>
                  <BsCart3 className="w-5 h-5 ml-2" />
                </Link>
              </Box>
              <Box className="flex items-center justify-start ">
                <Button
                  onClick={handleClickOpen}
                  className="font-robotoSlab text-white mr-2text-[14px]"
                  variant="text"
                >
                  <Typography sx={{ display: { xs: "none", lg: "block" } }}>
                    Вхід
                  </Typography>
                  <BsFillPersonPlusFill className="w-5 h-5 ml-2" />
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <RegisterForm open={open} handleClose={handleClose} />
    </>
  );
};
export default Header2;
