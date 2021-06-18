import { DateObject } from "../../interfaces/date-object";
import getDateObject from "./get-date-object";

export default function datesMatch(playersSelectedDate: DateObject): boolean {
  const { month, day, year } = playersSelectedDate
  const { month: todaysMonth, day: todaysDay, year: todaysYear } = getDateObject()
  
  if (month === todaysMonth && day === todaysDay && year === todaysYear) return true
  else return false
}
