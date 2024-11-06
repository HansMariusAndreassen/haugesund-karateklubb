import React from "react";

import { classInfo } from "./classInfo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ClassesPage() {
  return (
    <div className="flex-grow mx-auto px-2 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Våre Treningstilbud
      </h1>
      <p className="text-gray-600 mt-4 text-sm pb-8">
        Enkelte av de oppførte treningstidene kan være pauset denne sesongen.
        Dette kan skyldes mangel på tilgjengelige trenere eller andre praktiske
        årsaker. For oppdatert informasjon om aktive treningstider ved din
        skole, ta kontakt med oss.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
        {classInfo.map((classItem) => (
          <div
            key={classItem.name}
            className={`${classItem.color} text-white p-6 rounded-lg shadow-lg`}
          >
            <h2 className="text-xl font-bold mb-2">{classItem.name}</h2>
            <p>{classItem.description}</p>
          </div>
        ))}
      </div>
      <div className="py-8 flex justify-center">
        <Link href="/">
          <Button variant={"outline"} className="bg-indigo-100">
            Se timeplan
          </Button>
        </Link>
      </div>
    </div>
  );
}
