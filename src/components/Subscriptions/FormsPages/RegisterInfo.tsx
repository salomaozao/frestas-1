import { ButtonForm, CepAndStateInputs, CityAndNeighborhoodInputs, FormContainerRegisterInfo, FormSubmitOrBack, NumberAndComplementInputs } from "@/styles/pages/inscricao/registerInfo";
import Image from "next/image";
import vectorsubmit from '../../../assets/registration/vector1.svg'
import vectorreturn from '../../../assets/registration/vector2.svg'


interface RegisterInfoProps{
    handleCloseRegisterInfo: () => void;
} 
export function RegisterInfo({handleCloseRegisterInfo}: RegisterInfoProps){
    return (
        <FormContainerRegisterInfo>
            <h4>Endereço</h4>
            <form>
                <div>
                    <CepAndStateInputs field="cep" id="cep" placeholder='CEP'/>
                    <CepAndStateInputs field="state" id="estado" placeholder='Estado'/>
                </div>
                <div>
                    <CityAndNeighborhoodInputs field="city" id="cidade" placeholder='Cidade'/>
                    <CityAndNeighborhoodInputs field="neighborhood" id="Bairro" placeholder='Bairro'/>
                </div>
                    <input type="email" id="endereço" placeholder='Endereço'/>
                <div>
                    <NumberAndComplementInputs field="number" id="numero" placeholder='Número'/>
                    <NumberAndComplementInputs field="complement" id="complemento" placeholder='Complemento'/>
                </div>
                <FormSubmitOrBack>
                    <ButtonForm onClick={handleCloseRegisterInfo}>
                        <Image src={vectorreturn} alt=""/>
                        <button>Voltar</button>
                    </ButtonForm>
                    <ButtonForm>
                        <button>Continuar</button>
                        <Image src={vectorsubmit} alt=""/>
                    </ButtonForm>
                </FormSubmitOrBack>
            </form>
        </FormContainerRegisterInfo>
    )
}