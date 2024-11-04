import { defineArrayMember, defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const scheduleType = defineType({
  name: "schedule",
  title: "Timeplan",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "day",
      title: "Dag",
      type: "string",
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
          fields: [
            defineField({
              name: "startTime",
              title: "Fra",
              type: "string",
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: "16:00", value: "16" },
                  { title: "17:00", value: "17" },
                  { title: "18:00", value: "18" },
                  { title: "19:00", value: "19" },
                  { title: "20:00", value: "20" },
                  { title: "21:00", value: "21" },
                ],
              },
            }),
            defineField({
              name: "endTime",
              title: "Til",
              type: "string",
              validation: (Rule) =>
                Rule.required().custom((endTime, context) => {
                  const parent = context.parent as { startTime?: string };
                  const startTime = parent?.startTime;
                  if (
                    startTime &&
                    endTime &&
                    parseInt(endTime) <= parseInt(startTime)
                  ) {
                    return "Sluttid må være senere enn starttid";
                  }
                  return true;
                }),
              options: {
                list: [
                  { title: "17:00", value: "17" },
                  { title: "18:00", value: "18" },
                  { title: "19:00", value: "19" },
                  { title: "20:00", value: "20" },
                  { title: "21:00", value: "21" },
                  { title: "22:00", value: "22" },
                ],
              },
            }),
            defineField({
              name: "name",
              title: "Navn på time",
              type: "string",
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: "KATA", value: "kata" },
                  { title: "KUMITE", value: "kumite" },
                  { title: "WKF KUMITE", value: "wkf-kumite" },
                  { title: "FLEKSIBLE STEEL", value: "fleksible-steel" },
                  { title: "KARATE JUJUTSU", value: "karate-jujutsu" },
                  { title: "BASIC KATA", value: "basic-kata" },
                  { title: "FLEKSIBLE STEEL", value: "fleksible-steel" },
                ],
              },
            }),
            defineField({
              name: "room",
              title: "Rom",
              type: "string",
              options: {
                list: [
                  { title: "Sal 1", value: "Sal 1" },
                  { title: "Sal 2 (kumitesal)", value: "Sal 2 (kumitesal)" },
                ],
              },
            }),
            defineField({
              name: "group",
              title: "Målgrupper",
              type: "string",
              options: {
                list: [
                  {
                    title: "Nybegynner og lavere graderte",
                    value: "Nybegynner og lavere graderte",
                  },
                  { title: "Mellomparti", value: "Mellomparti" },
                  { title: "Svart belte", value: "Svart belte" },
                  {
                    title: "Viderekommende 14 år+",
                    value: "Viderekommende 14 år+",
                  },
                  {
                    title: "Viderekommende 16 år+",
                    value: "Viderekommende 16 år+",
                  },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "color",
              title: "Farge",
              type: "string",
              options: {
                list: [
                  { title: "Lilla (Kumite)", value: "bg-purple-500" },
                  { title: "Gul (Kata)", value: "bg-yellow-500" },
                  { title: "Grå (WKF Kumite)", value: "bg-gray-500" },
                  {
                    title: "Grønn (Fleksible/Fit2Fight)",
                    value: "bg-green-500",
                  },
                  { title: "Turkis (Karate Jujutsu)", value: "bg-teal-400" },
                  { title: "Rosa (Kali)", value: "bg-pink-500" },
                  { title: "Rød (Fit2Fight)", value: "bg-red-500" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "startTime",
              endTime: "endTime",
            },
            prepare({ title, subtitle, endTime }) {
              return {
                title: title,
                subtitle: `${subtitle}:00-${endTime}:00`,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "day",
    },
  },
});
