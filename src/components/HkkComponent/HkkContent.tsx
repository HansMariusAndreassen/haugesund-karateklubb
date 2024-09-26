"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import Classes from "../Classes/Classes";

export default function HkkContent() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#treningstider", label: "Treningstider" },
    { href: "#bli-medlem", label: "Bli medlem" },
    { href: "#sponsorer", label: "Sponsorer" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
      ></Header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Velkommen til Haugesund Karateklubb
          </h2>
          <p className="text-lg text-gray-700">
            Vi er dedikert til å lære bort karate i et inkluderende og
            motiverende miljø. Uansett om du er nybegynner eller erfaren, har vi
            et tilbud for deg!
          </p>
        </section>

        <Classes />

        <section id="bli-medlem" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Bli medlem</h2>
          <p className="mb-4">
            Ønsker du å bli en del av vår karateklubb? Det er enkelt å melde seg
            inn:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Kom innom en av våre treninger</li>
            <li>Snakk med en av våre instruktører</li>
            <li>Fyll ut innmeldingsskjema</li>
            <li>Betal medlemskontingent</li>
          </ol>
          <Button>
            <Link href="/innmelding">Meld deg inn nå</Link>
          </Button>
        </section>

        <section id="sponsorer" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Våre sponsorer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Sponsor 1"
              width={200}
              height={100}
              className="bg-gray-200 rounded"
            />
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Sponsor 2"
              width={200}
              height={100}
              className="bg-gray-200 rounded"
            />
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Sponsor 3"
              width={200}
              height={100}
              className="bg-gray-200 rounded"
            />
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Sponsor 4"
              width={200}
              height={100}
              className="bg-gray-200 rounded"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
