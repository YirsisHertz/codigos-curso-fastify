import { StyleDictionary } from "pdfmake/interfaces";

export const contentStyle: StyleDictionary = {
  content: {
    fontSize: 12,
    lineHeight: 1.5,
    margin: [10, 30, 10, 10],
  },
  contentColumn: {
    fontSize: 12,
    lineHeight: 1.5,
    alignment: "justify",
  },
};
