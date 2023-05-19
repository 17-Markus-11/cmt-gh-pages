import { Dictionary } from "@reduxjs/toolkit";

export interface ProjectRequest extends Dictionary<any> {
    name: string
}