import { BuildingIcon } from "lucide-react";
import { defineField, defineType, defineArrayMember } from "sanity";

const startTimeArray = [
  { title: "12:00", value: "12:00" },
  { title: "12:15", value: "12:15" },
  { title: "12:30", value: "12:30" },
  { title: "12:45", value: "12:45" },
  { title: "13:00", value: "13:00" },
  { title: "13:15", value: "13:15" },
  { title: "13:30", value: "13:30" },
  { title: "13:45", value: "13:45" },
  { title: "14:00", value: "14:00" },
  { title: "14:15", value: "14:15" },
  { title: "14:30", value: "14:30" },
  { title: "14:45", value: "14:45" },
  { title: "15:00", value: "15:00" },
  { title: "15:15", value: "15:15" },
  { title: "15:30", value: "15:30" },
  { title: "15:45", value: "15:45" },
  { title: "16:00", value: "16:00" },
  { title: "16:15", value: "16:15" },
  { title: "16:30", value: "16:30" },
  { title: "16:45", value: "16:45" },
  { title: "17:00", value: "17:00" },
  { title: "17:15", value: "17:15" },
  { title: "17:30", value: "17:30" },
  { title: "17:45", value: "17:45" },
  { title: "18:00", value: "18:00" },
  { title: "18:15", value: "18:15" },
  { title: "18:30", value: "18:30" },
  { title: "18:45", value: "18:45" },
  { title: "19:00", value: "19:00" },
];

const endTimeArray = [
  { title: "12:00", value: "12:00" },
  { title: "12:15", value: "12:15" },
  { title: "12:30", value: "12:30" },
  { title: "12:45", value: "12:45" },
  { title: "13:00", value: "13:00" },
  { title: "13:15", value: "13:15" },
  { title: "13:30", value: "13:30" },
  { title: "13:45", value: "13:45" },
  { title: "14:00", value: "14:00" },
  { title: "14:15", value: "14:15" },
  { title: "14:30", value: "14:30" },
  { title: "14:45", value: "14:45" },
  { title: "15:00", value: "15:00" },
  { title: "15:15", value: "15:15" },
  { title: "15:30", value: "15:30" },
  { title: "15:45", value: "15:45" },
  { title: "16:00", value: "16:00" },
  { title: "16:15", value: "16:15" },
  { title: "16:30", value: "16:30" },
  { title: "16:45", value: "16:45" },
  { title: "17:00", value: "17:00" },
  { title: "17:15", value: "17:15" },
  { title: "17:30", value: "17:30" },
  { title: "17:45", value: "17:45" },
  { title: "18:00", value: "18:00" },
  { title: "18:15", value: "18:15" },
  { title: "18:30", value: "18:30" },
  { title: "18:45", value: "18:45" },
  { title: "19:00", value: "19:00" },
];

export const schoolsType = defineType({
  name: "schools",
  title: "Skolekarate",
  type: "document",
  icon: BuildingIcon,
  fields: [
    defineField({
      name: "school",
      title: "Skole",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "schedule",
      title: "Timeplan",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "daySchedule",
          title: "Dagsprogram",
          fields: [
            defineField({
              name: "day",
              title: "Dag",
              initialValue: "Mandag",
              type: "string",
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: "Mandag", value: "Mandag" },
                  { title: "Tirsdag", value: "Tirsdag" },
                  { title: "Onsdag", value: "Onsdag" },
                  { title: "Torsdag", value: "Torsdag" },
                  { title: "Fredag", value: "Fredag" },
                ],
              },
            }),
            defineField({
              name: "classes",
              title: "Timer",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "class",
                  title: "Time",
                  fields: [
                    defineField({
                      name: "startTime",
                      title: "Start tidspunkt",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                      options: {
                        list: startTimeArray,
                      },
                    }),
                    defineField({
                      name: "endTime",
                      title: "Slutt tidspunkt",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                      options: {
                        list: endTimeArray,
                      },
                    }),
                    defineField({
                      name: "level",
                      title: "Nivå",
                      type: "string",
                      options: {
                        list: [
                          { title: "Nivå 1", value: "level1" },
                          { title: "Nivå 2", value: "level2" },
                          { title: "Ungdom og voksen", value: "adult" },
                        ],
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "school",
      schedule: "schedule",
    },
    prepare({ title, schedule = [] }) {
      const numberOfClasses = schedule.length;
      return {
        title,
        subtitle: `${numberOfClasses} planlagt.`,
      };
    },
  },
});
