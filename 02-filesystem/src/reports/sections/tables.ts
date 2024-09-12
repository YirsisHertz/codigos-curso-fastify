import { Content } from "pdfmake/interfaces";

export const tables: Content = [
  {
    table: {
      widths: ["*", "*", "*", "*", "*", "*"],
      body: [
        ["content", "content", "content", "content", "content", "extra"],
        [
          "content",
          "content",
          "content",
          "content",
          "content",
          {
            text: "" || "N/A",
            color: "" || "red",
            bold: !""
          }
        ],
        [
          "content",
          "content",
          "content",
          "content",
          "content",
          {
            text: "" || "N/A",
            color: "" || "red",
            bold: !""
          }
        ],
        [
          "content",
          "content",
          "content",
          "content",
          "content",
          {
            text: "" || "N/A",
            color: "" || "red",
            bold: !""
          }
        ]
      ]
    }
  }
];
