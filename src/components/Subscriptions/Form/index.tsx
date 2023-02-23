import { FieldCourse } from "@/styles/pages/inscricao";
import { BirthAndSchool, BirthInput, CityInput, CpfAndPhone, CpfInput, EthnicityAndGender, EthnicityInput, FieldOfCheckboxSocialName, GenderInput, PhoneInput, SchoolInput, StateAndCity, StateInput } from "@/styles/pages/inscricao/stepper"
import { Field } from "formik"
import { useRouter } from "next/router";
import { FormikStep } from "./Step"
import { FormikStepper } from "./Stepper"

export interface InputDataForm {
        name: string,
        socialName: boolean,
        cpf: string,
        birth: string,
        school: string,
        ethnicity: string,
        gender: string,
        state: string,
        city: string,
        email: string,
        socialMedia: string,
        howKnow: string,
        haveDeficit: string,
        whatDeficit: string,
        accessibilityFeature: string,
}

export function FormikForm(){

    const router = useRouter()

    const handleSubmit = (async (values: any) => {
        console.log(values)
        //if (errorMessage) setErrorMessage('');
    
        try {
          const res = await fetch('/api/users/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          if (res.status === 200) {
            router.push('/');
          } else {
            throw new Error(await res.text());
          }
        } catch (error) {
          console.error(error);
          //setErrorMessage(error.message);
        }
      });


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
            course: 'course1',
            course2: 'course2',

        }} onSubmit={async (values)=> {
            handleSubmit(values as any)
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
                    <FieldCourse name="course"/>
                    <p>Caso não possua, deixe os campos em branco</p>
                </FormikStep>
        </FormikStepper>
    )
}

//só estiliza o field <BirthInput>
//<Field type="date" name="nascimento" placeholder="Data de nascimento"/>
//</BirthInput>