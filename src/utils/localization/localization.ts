import defaultLocalization from "./default-localization";

export enum Languages {
    en,
    ru
}

class Localization {
    private localization: any = defaultLocalization;

    constructor(language: Languages) {
        // TODO: uncomment after menu is done
        // fetch(`./lang/${Languages[language]}.json`)
        //     .then((res) => res.json())
        //     .then(json => this.localization = json);
    }

    getLocalization = (module: string) => (key: string): string => {
        return this.localization[module][key];
    }
}

const localization = new Localization(Languages.en);
export default localization;
