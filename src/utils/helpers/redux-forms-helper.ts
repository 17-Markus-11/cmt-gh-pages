//TODO: implement generic redux component

import { FC } from "react";
import { reduxForm } from "redux-form";

export const getReduxFormsComponent = <T extends FC<any>> (component: T) => {
    return reduxForm({ form: component.constructor.name })(component) 
};