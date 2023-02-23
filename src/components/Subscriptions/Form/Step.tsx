import { FormikConfig, FormikValues } from "formik";
import React from "react";


export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
    label: string;
}

export function FormikStep({ children }: FormikStepProps){
    return <>{children}</>
    //validation schema vai dentro das props de cada step
}