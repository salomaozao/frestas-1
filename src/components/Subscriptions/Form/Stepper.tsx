import { ButtonContent, ButtonForm, FormContainerSignUp } from "@/styles/pages/inscricao/stepper";
import { Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import { FormikStepProps } from "./Step";

import React, { useState } from "react";

import vectorsubmit from '../../../assets/registration/vector1.svg'
import vectorreturn from '../../../assets/registration/vector2.svg'

import Image from 'next/image'
import { object } from "zod";

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>){

    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step] as React.ReactElement<FormikStepProps>;
    const [completed, setCompleted] = useState(false)
    function isLastStep(){
        return step === childrenArray.length -1;
    }

    return(
    <FormContainerSignUp>
        <Formik {...props} 
        validationSchema={currentChild.props.validationSchema}
        onSubmit={async(values, helpers) =>{
            if(isLastStep()){
                await props.onSubmit(values, helpers);
                setCompleted(true);
                //helpers.resetForm();
                //setStep(0)
            }else{
                setStep(step=> step+1)
            }
        }}>
                <Form>
                    <Stepper sx={{marginBottom: '1rem'}} activeStep={step} alternativeLabel>
                        {childrenArray.map((child, index) => (
                        <Step key={child.props.label} completed={step > index || completed }>
                            <StepLabel>{child.props.label}</StepLabel>
                        </Step>
                    ))}
                    </Stepper>

                    {currentChild}

                    <ButtonContent>
                        {step === 0 ? <div></div> : 
                        <ButtonForm onClick={() => { setStep(step => step-1)}}>
                            <Image src={vectorreturn} alt=""/>
                            <button>Voltar</button>
                        </ButtonForm>}
                        <ButtonForm type="submit">{isLastStep() ? 'Finalizar' : 'Continuar'} <Image src={vectorsubmit} alt=""/> </ButtonForm>
                    </ButtonContent>      
                </Form>
        </Formik>
    </FormContainerSignUp>
    )
}