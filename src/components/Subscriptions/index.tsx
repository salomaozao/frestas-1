import { ContentOfThePage, SignUpContainer, TitleAndSubtitle } from "@/styles/pages/inscricao";
import { SummaryOfOrder } from "./SummaryOfOrder";
import { FormikForm } from "./Form";

export function SubscriptionForm(){
    return(
        <>
            <SignUpContainer>
                <TitleAndSubtitle>
                    <h1>Inscrição</h1>
                    <h2>Cadastro</h2>
                </TitleAndSubtitle>
                <ContentOfThePage>
                    <SummaryOfOrder/>
                    <FormikForm/>
                </ContentOfThePage>
            </SignUpContainer>
        </>
    )
}
