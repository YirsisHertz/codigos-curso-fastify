import { FastifyReply, FastifyRequest } from "fastify";

import fs from "node:fs";
import PdfPrinter from "pdfmake";
import { createInvoiceReport } from "../reports/invoice.report";

export class ReportsController {
  private printer;

  constructor() {
    const fonts = {
      Roboto: {
        normal: "fonts/Roboto-Regular.ttf",
        bold: "fonts/Roboto-Medium.ttf",
        italics: "fonts/Roboto-Italic.ttf",
        bolditalics: "fonts/Roboto-MediumItalic.ttf",
      },
    };

    this.printer = new PdfPrinter(fonts);
  }

  getInvoice = async (
    request: FastifyRequest,
    reply: FastifyReply,
  ) => {
    // Create a document
    const docDefinition = createInvoiceReport();

    // Create a PDF document
    const pdfDoc =
      this.printer.createPdfKitDocument(docDefinition);

    // Set headers
    reply.header("Content-Type", "application/pdf");
    reply.header("Content-Disposition", "inline");

    // Pipe the PDF document to the response
    pdfDoc.pipe(
      fs.createWriteStream("reports/invoice.pdf"),
    );
    pdfDoc.pipe(reply.raw);
    pdfDoc.end();

    return reply.send(
      fs.createReadStream("reports/invoice.pdf", "utf-8"),
    );
  };
}
