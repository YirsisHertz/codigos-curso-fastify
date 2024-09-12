import {
  TDocumentDefinitions,
  TDocumentInformation,
} from "pdfmake/interfaces";

import { footerLayout } from "./layouts/footerLayout.report";
import { headerLayout } from "./layouts/headerLayout.report";
import { qrcode } from "./sections/qrcode";
import { invoiceReportStyles } from "./styles";

interface Metadata extends TDocumentInformation {
  premium: boolean;
}

export const createInvoiceReport =
  (): TDocumentDefinitions => {
    return {
      info: {
        title: "Invoice Report",
        subject: "Invoice Report",
        author: "Yirsis Serrano",
        producer: "Yirsis Serrano",
        creator: "Yirsis Serrano",
        keywords: "invoice, report, pdf",
        modDate: new Date(),
        premium: true,
      } as Metadata,
      watermark: {
        text: "Invoice App",
        color: "#333",
        opacity: 0.1,
        angle: 0,
        bold: true,
        italics: true,
      },
      language: "es-MX",
      compress: true,
      header: headerLayout,
      content: qrcode,
      footer: footerLayout,
      styles: invoiceReportStyles,
    };
  };
