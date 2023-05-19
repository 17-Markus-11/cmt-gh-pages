import { Dictionary } from "@reduxjs/toolkit";

export interface RegionRequest extends Dictionary<any> {
    name: string,
    code: string
}