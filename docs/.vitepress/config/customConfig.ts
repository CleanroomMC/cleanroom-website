import { DefaultTheme } from "vitepress";

export interface CleanRoomConfig extends DefaultTheme.Config {
  editLinkText?: string;
  viewLinkText?: string;
  sourceLinkText?: string;
  timeDict?: TimeDict;
  viewLink?: boolean;
  sourceLink?: boolean;
}

export interface TimeDict extends Record<string, string> {
  today: string
  ago: string
  day: string
  days: string
  week: string
  weeks: string
  month: string
  months: string
  year: string
  years: string
}
