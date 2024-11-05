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
      initialValue: "Mandag",
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
                  { title: "KARATE", value: "KARATE" },
                  { title: "KATA", value: "KATA" },
                  { title: "KUMITE", value: "KUMITE" },
                  { title: "WKF KUMITE", value: "WKF KUMITE" },
                  { title: "FLEKSIBLE STEEL", value: "FLEKSIBLE STEEL" },
                  { title: "KARATE JUJUTSU", value: "KARATE JUJUTSU" },
                  { title: "KALI", value: "KALI" },
                  { title: "FIT2FIGHT", value: "FIT2FIGHT" },
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
                  {
                    title: "Nybegynner og mellomparti",
                    value: "Nybegynner og mellomparti",
                  },
                  { title: "Mellomparti", value: "Mellomparti" },
                  { title: "Svart belte", value: "Svart belte" },
                  { title: "Konkurranseparti", value: "Konkurranseparti" },
                  {
                    title: "Konkurranseparti-nybegynner",
                    value: "Konkurranseparti-nybegynner",
                  },
                  {
                    title: "Konkurranseparti-mellomparti",
                    value: "Konkurranseparti-mellomparti",
                  },
                  {
                    title: "Konkurranseparti-svart belte",
                    value: "Konkurranseparti-svart belte",
                  },
                  {
                    title: "Viderekommende",
                    value: "Viderekommende",
                  },
                  {
                    title: "Nybegynnere",
                    value: "Nybegynnere",
                  },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "age",
              title: "Alder",
              type: "string",
              initialValue: "Alle",
              options: {
                list: [
                  { title: "Alle", value: "Alle" },
                  { title: "14+", value: "14+" },
                  { title: "16+", value: "16+" },
                ],
              },
            }),
            defineField({
              name: "color",
              title: "Farge",
              type: "string",
              options: {
                list: [
                  { title: "Karate (Blå)", value: "bg-sky-400" },
                  { title: "Kumite (Lilla)", value: "bg-purple-500" },
                  { title: "Kata (Oransje)", value: "bg-orange-400" },
                  { title: "WKF Kumite (Grå)", value: "bg-gray-500" },
                  {
                    title: "Flexible Steel/Fit2Fight (Grønn)",
                    value: "bg-green-800",
                  },
                  { title: "Karate Jujutsu (Turkis)", value: "bg-teal-400" },
                  { title: "Kali (Rosa)", value: "bg-pink-500" },
                  { title: "Fit2Fight (Rød)", value: "bg-red-500" },
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
