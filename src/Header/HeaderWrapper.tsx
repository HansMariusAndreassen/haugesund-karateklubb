"use client";

import { useState } from "react";
import { Header } from "@/Header/Header";

type HeaderWrapperProps = {
  navItems: { href: string; label: string }[];
};

export function HeaderWrapper({ navItems }: HeaderWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  return <Header isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />;
}
