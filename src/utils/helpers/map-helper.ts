import { Dictionary } from "@reduxjs/toolkit";

type InputConfig = {
    value: string,
    className: string
}

export const mapConfig = (config: Dictionary<string> ): Array<InputConfig> => {
    return Object.keys(config).map(key => ({ value: key, className: config[key] }) as InputConfig);
}