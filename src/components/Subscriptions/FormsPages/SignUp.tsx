import { CellAndCpfContainer, CellInput, CpfInput, FieldOfCheckboxSocialName,  FormContainerSignUp,  SubmitButtonContainer } from "@/styles/pages/inscricao/signUp";
import Image from "next/image";
import { useForm } from "react-hook-form";
import vectorsubmit from '../../../assets/registration/vector1.svg'
import * as z  from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

interface SignUpProps{
    handleOpenRegisterInfo: () => void;
} 



export function SignUp({ handleOpenRegisterInfo }: SignUpProps){

    return (
        <FormContainerSignUp>
            <h4>Identificação</h4>
            <form>
                <input type="text" id="name" placeholder='Nome completo' />
                <FieldOfCheckboxSocialName>
                    <input type='checkbox'/>
                    <span>Quero informar meu nome social</span>
                </FieldOfCheckboxSocialName>  
                    <input type="email" id="email" placeholder='Email'/>
                    <input type="email" id="emailconfirmation" placeholder='Confirme seu Email'/>
                <CellAndCpfContainer>
                <CellInput>
                    <input type="text" id="cellphone" placeholder='Telefone (com DDD)'/>
                </CellInput>
                <CpfInput>
                    <input type="text" id="cpf" placeholder='CPF'/>
                </CpfInput>
                </CellAndCpfContainer>
                <SubmitButtonContainer onClick={handleOpenRegisterInfo}>
                        <button>Continuar</button>
                        <Image src={vectorsubmit} alt=""/>
                </SubmitButtonContainer>
            </form>
        </FormContainerSignUp>
    )
}