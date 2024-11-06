"use client";

import { client } from "@/sanity/lib/client";
import { schoolScheduleQuery } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BadgeCheck, ClockIcon, Loader2 } from "lucide-react";

type ClassSchedule = {
  startTime: string;
  endTime: string;
  level: string;
};

type DaySchedule = {
  day: string;
  classes: ClassSchedule[];
};

type SchoolSchedule = {
  _id: string;
  school: string;
  schedule: DaySchedule[];
};

type LevelStyle = {
  text: string;
  color: string;
};

export default function SchoolSchedule() {
  const [scheduleData, setScheduleData] = useState<SchoolSchedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data: SchoolSchedule[] = await client.fetch(schoolScheduleQuery);
        setScheduleData(data);
      } catch (err) {
        setError("Kunne ikke hente timeplan. Vennligst prøv igjen senere.");
        console.error("Error fetching schedule:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const getLevelLabel = (level: string): LevelStyle => {
    switch (level) {
      case "level1":
        return { text: "Nivå 1", color: "bg-emerald-100 text-emerald-800" };
      case "level2":
        return { text: "Nivå 2", color: "bg-blue-100 text-blue-800" };
      case "adult":
        return {
          text: "Ungdom og voksen",
          color: "bg-purple-100 text-purple-800",
        };
      default:
        return { text: level, color: "" };
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-xl text-center font-bold tracking-tight mb-4">
        Timeplan for skole- og distriktskarate
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scheduleData.map((school) => (
          <Card key={school._id} className="overflow-hidden">
            <CardHeader className="bg-gray-50 py-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BadgeCheck className="h-5 w-5 text-blue-600" />
                {school.school}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {school.schedule.map((day) => (
                  <div
                    key={`${school._id}-${day.day}`}
                    className="bg-white rounded border border-gray-200"
                  >
                    <div className="bg-indigo-50 px-3 py-2 border-b border-gray-200">
                      <h4 className="font-medium text-md text-gray-900">
                        {day.day}
                      </h4>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {day.classes.map((classItem, classIndex) => {
                        const levelStyle = getLevelLabel(classItem.level);
                        return (
                          <div
                            key={`${school._id}-${day.day}-${classIndex}`}
                            className="p-3"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <ClockIcon size={16} />
                                <span className="text-sm font-medium text-gray-900">
                                  {classItem.startTime} - {classItem.endTime}
                                </span>
                              </div>
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${levelStyle.color}`}
                              >
                                {levelStyle.text}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
