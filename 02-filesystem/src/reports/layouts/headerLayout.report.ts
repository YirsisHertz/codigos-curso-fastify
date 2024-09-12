import { Content } from "pdfmake/interfaces";
import { DateFormatter } from "../../helpers/dateFormatter";

export const headerLayout: Content = [
  {
    columns: [
      {
        text: "Invoice Report",
        alignment: "center",
        fontSize: 20,
        bold: true,
      },
      {
        text: DateFormatter.formatDate(),
        alignment: "right",
        marginRight: 20,
        marginTop: 5,
        bold: true,
      },
    ],
    columnGap: 10,
    marginTop: 15,
  },
];
