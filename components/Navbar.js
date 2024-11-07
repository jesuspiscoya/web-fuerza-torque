"use client";

import { rubik } from "@/app/fonts";
import {
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const navListMenuItems = [
  {
    subtitle: "Alquiler",
    url: "/servicios/alquiler",
  },
  {
    subtitle: "Reparación",
    url: "/servicios/reparacion",
  },
  {
    subtitle: "Mantenimiento",
    url: "/servicios/mantenimiento",
  },
];

function NavListMenu({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ subtitle, url }, key) => (
    <a href={url} key={key}>
      <MenuItem className="w-[calc(100%-1.25rem)] text-white rounded-lg ml-5 lg:m-0 lg:w-full hover:bg-white/20 hover:text-yellow-700">
        <Typography
          variant="small"
          className={`font-medium ${rubik.className}`}
        >
          {subtitle}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            className={`text-sm lg:text-base font-medium ${rubik.className}`}
          >
            <ListItem
              className={`gap-2 px-4 py-3 lg:py-2 text-gray-300 duration-300 hover:bg-white/20 hover:text-red-500 focus:bg-white/45 focus:text-white active:bg-white/45 active:text-white`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {title}
              <i
                className={`fa-solid fa-caret-down !hidden transition-transform lg:!block ${
                  isMenuOpen ? "rotate-180 translate-y-0.5" : ""
                }`}
                aria-hidden="true"
              ></i>
              <i
                className={`fa-solid fa-caret-down block transition-transform lg:!hidden ${
                  isMobileMenuOpen ? "rotate-180 translate-y-0.5" : ""
                }`}
                aria-hidden="true"
              ></i>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden bg-blue-gray-900 !translate-y-1 border-0 rounded-lg lg:block">
          <ul className="flex flex-col gap-y-2 outline-none">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className={`lg:hidden block ${!isMobileMenuOpen && "-mb-1"}`}>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  );
}

function NavList() {
  const items = [
    {
      title: "Inicio",
      url: "/",
    },
    {
      title: "Servicios",
      url: "/servicios",
    },
    {
      title: "Herramientas",
      url: "/herramientas",
    },
    {
      title: "Nosotros",
      url: "/nosotros",
    },
    {
      title: "Contacto",
      url: "/contacto",
    },
  ];

  return (
    <List className="mt-3 p-0 pt-2 border-t-[1px] border-gray-400 lg:gap-3 lg:border-0 lg:p-0 lg:mt-0 lg:flex-row">
      {items.map(({ title, url }, key) =>
        title === "Servicios" ? (
          <NavListMenu key={key} title={title} />
        ) : (
          <Typography
            key={key}
            as="a"
            href={url}
            className={`text-sm lg:text-base font-medium ${rubik.className} ${
              title === "Contacto" ? "lg:hidden" : ""
            }`}
          >
            <ListItem className="text-gray-300 duration-300 px-4 py-3 lg:py-2 hover:bg-white/20 hover:text-red-500">
              {title}
            </ListItem>
          </Typography>
        )
      )}
    </List>
  );
}

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    // Agrega un listener para el scroll
    window.addEventListener("scroll", handleScroll);

    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    };
  }, []);

  return (
    <Navbar
      className={`fixed max-w-none rounded-none border-0 px-7 md:px-16 py-4 z-10 ${
        isScrolled ? "bg-blue-gray-700" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          {isScrolled ? (
            <Image
              src="/images/logo.webp"
              alt="Logo Company"
              width={200}
              height={200}
              className="w-24"
            />
          ) : (
            <Image
              src="/images/logo-white.webp"
              alt="Logo Company"
              width={200}
              height={200}
              className="w-24"
            />
          )}
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Link
          href="/contacto"
          style={{ boxShadow: "0 3px 0 0 white" }}
          className="hidden lg:block btn-contact bg-yellow-700 border-2 hover:bg-yellow-800 border-black rounded-full px-6 py-2 text-black font-medium duration-500 hover:text-white"
        >
          Contacto
        </Link>
        <IconButton
          variant="text"
          color="white"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <i className="fa-solid fa-xmark fa-2xl" aria-hidden="true"></i>
          ) : (
            <i className="fa-solid fa-bars fa-xl" aria-hidden="true"></i>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
