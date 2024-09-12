import { Content } from "pdfmake/interfaces";

export const footerLayout = function (
  currentPage: number,
  pageCount: number,
): Content {
  return [
    {
      columns: [
        {
          text: `© ${new Date().getFullYear()} Invoice App`,
          style: "footerCopyRightText",
        },
        {
          text: currentPage.toString() + " of " + pageCount,
          alignment: "center",
        },
      ],
    },
  ];
};
