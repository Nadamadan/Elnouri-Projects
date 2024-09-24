import type en from "../../messages/en.json";

type Message = typeof en;

declare global {
	interface IntlMessages extends Message {}
	type Lang = "en" | "ar";
	type Params = { params: { locale: Lang } };
}
