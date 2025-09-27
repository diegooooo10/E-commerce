import type { History } from "../models";
import { getFromLocalstorage } from "../utils";
import { HISTORY_KEY } from "./localStorageKeys";

export const initialHistory = getFromLocalstorage<History[]>(HISTORY_KEY) ?? [];
