import { Footer } from "@/components/Footer";
import { ContactContent, ContactPage, ContactUsContainer, Form, FormContainer, InputsContainer, LogoAndSocialContainer, PageContent, SectionForm, SocialContacts, TextAreaContainer } from "@/styles/pages/contato";
import logo from '../../assets/contact/frestaslogo.svg'
import instagram from '../../assets/contact/instagramicon.svg'
import twitter from '../../assets/contact/twittericon.svg'
import linkedin from '../../assets/contact/linkedinicon.svg'
import vector from '../../assets/contact/vectorsubmit.svg'
import Image from "next/image";
import { Header } from "@/components/Header";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z  from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const MailFormScheema = z.object({
  nome: z.string(),
  email: z.string(),
  assunto: z.string(),
  mensagem: z.string(),
})

type MailFormInputs = z.infer<typeof MailFormScheema>

export default function Contact() {

    const { register, handleSubmit, formState: {isSubmitting}, } = useForm<MailFormInputs>({
      resolver: zodResolver(MailFormScheema),
    })

    function handleMailToUs(data:MailFormInputs){
      fetch('/api/contact', { 
        method: 'POST', 
        headers: { 
          'Accept': 'application/json, text/plain, */*', 
          'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify(data) 
      }).then((res) => { 
        console.log('Resposta recebida') 
        if (res.status === 200) { 
          console.log('Resposta bem-sucedida!') 
        } 
      })
    }

    return (
      <ContactUsContainer>
        <PageContent>
          <Header background="green"/>
          <SectionForm>
          <ContactContent>
            <h1>Contato</h1>
            <FormContainer>
              <h2>Fale com a gente</h2>
              <Form onSubmit={handleSubmit(handleMailToUs)}>
                <InputsContainer>
                  <input placeholder="Nome completo" {...register('nome')}></input>
                  <input placeholder="Email" {...register('email')}></input>
                  <input placeholder="Assunto" {...register('assunto')}></input>
                </InputsContainer>
                <TextAreaContainer>
                  <textarea placeholder="Mensagem" {...register('mensagem')}/>
                  <button type="submit" disabled={isSubmitting}><Image src={vector} alt=""/></button>
                </TextAreaContainer>
              </Form>
            </FormContainer>
          
            <LogoAndSocialContainer>
              <Link href={`/`}><Image src={logo} alt=""/></Link>
              <h2>contato@frestas.com</h2>
              <SocialContacts>
                <Link href={'https://www.instagram.com/institutofrestas/'}><Image src={instagram} alt=""/></Link>
                <Link href={'https://www.instagram.com/institutofrestas/'}><Image src={twitter} alt=""/></Link>
                <Link href={'https://www.instagram.com/institutofrestas/'}><Image src={linkedin} alt=""/></Link>
              </SocialContacts>
            </LogoAndSocialContainer>
          </ContactContent>
          </SectionForm>
        </PageContent>
      </ContactUsContainer>
    )
  }
  