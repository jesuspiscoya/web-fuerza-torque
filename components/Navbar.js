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

function NavListMenu({ title, menu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = menu.map(({ subtitle, url }, key) => (
    <a href={url} key={key}>
      <MenuItem className="w-[calc(100%-1.25rem)] text-white rounded-lg ml-5 lg:m-0 lg:w-full hover:bg-white/20 hover:text-yellow-700">
        <Typography
          variant="small"
          style={{ fontFamily: rubik.style.fontFamily }}
          className="font-medium"
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
            style={{ fontFamily: rubik.style.fontFamily }}
            className="text-sm lg:text-base font-medium"
          >
            <ListItem
              className="gap-2 px-4 py-3 lg:py-2 text-gray-300 duration-300 hover:bg-white/20 hover:text-yellow-700 focus:bg-white/45 focus:text-white active:bg-white/45 active:text-white"
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
        <MenuList className="hidden bg-blue-gray-900 !-translate-y-0.5 border-0 rounded-lg lg:block">
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
  const menuServices = [
    {
      subtitle: "Alquiler",
      url: "/servicios/alquiler",
    },
    {
      subtitle: "Mantenimiento",
      url: "/servicios/mantenimiento",
    },
    {
      subtitle: "Reparación",
      url: "/servicios/reparacion",
    },
  ];
  const menuTools = [
    {
      subtitle: "Herramientas de Torque",
      url: "/herramientas/herramientas-torque",
    },
    {
      subtitle: "Bombas Hidráulicas",
      url: "/herramientas/bombas-hidraulicas",
    },
    {
      subtitle: "Llaves de Impacto",
      url: "/herramientas/llaves-impacto",
    },
    {
      subtitle: "Remachadoras Hidráulicas",
      url: "/herramientas/remachadoras-hidraulicas",
    },
    {
      subtitle: "Otras herramientas",
      url: "/herramientas/otras-herramientas",
    },
  ];

  return (
    <List className="mt-3 p-0 pt-2 border-t-[1px] border-gray-400 lg:gap-3 lg:border-0 lg:p-0 lg:mt-0 lg:flex-row">
      {items.map(({ title, url }, key) =>
        title === "Servicios" ? (
          <NavListMenu key={key} title={title} menu={menuServices} />
        ) : title === "Herramientas" ? (
          <NavListMenu key={key} title={title} menu={menuTools} />
        ) : (
          <Typography
            key={key}
            as="a"
            href={url}
            style={{ fontFamily: rubik.style.fontFamily }}
            className={`text-sm lg:text-base font-medium ${
              title === "Contacto" ? "lg:hidden" : ""
            }`}
          >
            <ListItem className="text-gray-300 duration-300 px-4 py-3 lg:py-2 hover:bg-white/20 hover:text-yellow-700">
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
    setOpenNav(false);
  };

  useEffect(() => {
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
      className={`fixed max-w-none rounded-none border-0 px-7 md:px-16 py-3 z-10 ${
        isScrolled ? "bg-blue-gray-700" : "bg-transparent"
      }`}
    >
      <div className="flex container items-center justify-between">
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
              priority={true}
            />
          )}
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Typography
          as="a"
          href="/contacto"
          style={{
            fontFamily: rubik.style.fontFamily,
          }}
          className="hidden lg:block btn-contact bg-yellow-700 hover:bg-yellow-800 rounded-full px-6 py-1.5 text-black font-semibold duration-500 hover:text-white"
        >
          Contacto
        </Typography>
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
