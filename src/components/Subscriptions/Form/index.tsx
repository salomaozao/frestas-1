
import { BirthAndSchool, BirthInput, CityInput, CpfAndPhone, CpfInput, EthnicityAndGender, EthnicityInput, FieldOfCheckboxSocialName, GenderInput, PhoneInput, SchoolInput, StateAndCity, StateInput } from "@/styles/pages/inscricao/stepper"
import { Field } from "formik"
import { FormikStep } from "./Step"
import { FormikStepper } from "./Stepper"

export function FormikForm(){
    return (
        <FormikStepper
        initialValues={{
            name: '',
            socialName: false,
            cpf: '',
            birth: '',
            school: '',
            ethnicity: '',
            gender: '',
            state: '',
            city: '',
            email: '',
            socialMedia: '',
            howKnow: '',
            haveDeficit: '',
            whatDeficit: '',
            accessibilityFeature: '',

        }} onSubmit={async (values)=> {
            console.log('values', values)
        }}>
                <FormikStep label="Pessoal">
                    <Field name="name" placeholder='Nome completo'/>
                    <FieldOfCheckboxSocialName>
                        <Field name="socialName" type='checkbox' label='nome social'/>
                        <span>Quero informar meu nome social</span>
                    </FieldOfCheckboxSocialName>
                    <CpfAndPhone>
                        <PhoneInput>
                            <Field name="phone" placeholder='Telefone (com DDD)'/>
                        </PhoneInput>
                        <CpfInput>
                            <Field name="cpf" placeholder='CPF'/>
                        </CpfInput>
                    </CpfAndPhone>
                    <BirthAndSchool>
                        <BirthInput>
                            <Field type="date" name="birth" placeholder="Data de nascimento"/>
                        </BirthInput>
                        <SchoolInput>
                            <Field name="school" placeholder='escolaridade'/>
                        </SchoolInput>
                    </BirthAndSchool>
                    <EthnicityAndGender>
                        <EthnicityInput>
                            <Field name="ethnicity" placeholder='cor/etnia'/>
                        </EthnicityInput>
                        <GenderInput>
                            <Field name="gender" placeholder='gênero'/>
                        </GenderInput>
                    </EthnicityAndGender>
                </FormikStep>
                <FormikStep label="Extra info">
                    <StateAndCity>
                        <StateInput>
                            <Field name="state" placeholder='Estado'/>
                        </StateInput>
                        <CityInput>
                            <Field name="city" placeholder='Cidade'/>
                        </CityInput>
                    </StateAndCity>
                    <Field name="email" type='email' placeholder='Email'/>
                    <Field name="socialMedia" placeholder='Redes Sociais (Que tal aparecer nas nossas postagens?)'/>
                    <Field name="howKnow" placeholder='Como conhececeu o projeto?'/>
                </FormikStep>
                <FormikStep label="Acessibilidade">
                    <Field name="haveDeficit" placeholder='Você possui alguma deficiência?'/>
                    <Field name="whatDeficit" placeholder='Se sim, qual?'/>
                    <Field name="accessibilityFeature" placeholder='Necessita de algum recurso de acessibilidade?'/>
                    <p>Caso não possua, deixe os campos em branco</p>
                </FormikStep>
        </FormikStepper>
    )
}

//só estiliza o field <BirthInput>
//<Field type="date" name="nascimento" placeholder="Data de nascimento"/>
//</BirthInput>