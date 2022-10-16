import { Theme } from "./theme";

export type ColorTypes = keyof Omit<Theme['inUse']['pallet'], 'opacity' | 'textColor'>