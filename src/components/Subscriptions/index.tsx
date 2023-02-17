import { SignUp } from "./FormsPages/SignUp";
import { ContentOfThePage, SignUpContainer, TitleAndSubtitle } from "@/styles/pages/inscricao/signUp";
import { SummaryOfOrder } from "./SummaryOfOrder";
import { RegisterInfo } from "./FormsPages/RegisterInfo";
import { useState } from "react";
import { CellAndCpfContainer, CellInput, CpfInput, FieldOfCheckboxSocialName,  FormContainerSignUp,  SubmitButtonContainer } from "@/styles/pages/inscricao/signUp";
import Image from "next/image";
import vectorsubmit from '../../../assets/registration/vector1.svg'

export function SubscriptionForm(){
    const [signUp, setSignUp] = useState(true)
    const [registerInfo, setRegisterInfo] = useState(false)

    function handleOpenRegisterInfo(){
        setRegisterInfo(true);
        setSignUp(false);
    }
    function handleCloseRegisterInfo(){
        setRegisterInfo(false);
        setSignUp(true);
    }


    return(
        <>
            <SignUpContainer>
                <TitleAndSubtitle>
                    <h1>Inscrição</h1>
                    <h2>Cadastro</h2>
                </TitleAndSubtitle>
                <ContentOfThePage>
                    <SummaryOfOrder/>

                    { signUp? <SignUp handleOpenRegisterInfo={handleOpenRegisterInfo}/> : <RegisterInfo handleCloseRegisterInfo={handleCloseRegisterInfo} /> }
                </ContentOfThePage>
            </SignUpContainer>
        </>
    )
}
