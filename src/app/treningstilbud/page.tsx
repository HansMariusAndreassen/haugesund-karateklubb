import React from "react";

import { classInfo } from "./classInfo";

export default function ClassesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Våre Treningstilbud
      </h1>
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
    </div>
  );
}
