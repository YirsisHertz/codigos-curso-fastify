import { DateTime } from "luxon";

export class DateFormatter {
  private static currentDate = DateTime.now()
    .setLocale("es")
    .setZone("America/Mexico_City");

  static formatDate() {
    return this.currentDate.toLocaleString(DateTime.DATE_HUGE);
  }
}
