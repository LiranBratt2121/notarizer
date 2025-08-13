"use client";

import React, { useState } from "react";
import MenuButton from "@/components/Buttons/MenuButton/MenuButton";
import { MenuBarContainer } from "./MenuBar.styles";
import Button from "../Buttons/Button/Button";
import Header from "../Text/Header/Header";

import { useRouter } from "next/navigation";

interface MenuItem { id: string; name: string; target?: string; }

const menuItems: MenuItem[] = [
  { id: "1", name: "Capture", target: "/dashboard" },
  { id: "2", name: "View Captured Images", target: "/apartments" },
  { id: "3", name: "Login", target: "/login" },
];

export default function MenuBar() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setClicked(prev => !prev);

  const handleNavigation = (target?: string) => {
    if (!target) return;
    setClicked(false);
    router.replace(target);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu} />

      <MenuBarContainer $isOpen={clicked} aria-hidden={!clicked}>
        <Header text="Menu" color="white"/>

        {menuItems.map(item => (
          <Button key={item.id} width="80%" height="5rem" onClick={() => handleNavigation(item.target)}>
            {item.name}
          </Button>
        ))}
      </MenuBarContainer>
    </>
  );
}
