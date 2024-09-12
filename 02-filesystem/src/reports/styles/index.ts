import { StyleDictionary } from "pdfmake/interfaces";
import { contentStyle } from "./content.style";
import { footerStyle } from "./footer.style";

export const invoiceReportStyles: StyleDictionary = {
  ...footerStyle,
  ...contentStyle,
};
