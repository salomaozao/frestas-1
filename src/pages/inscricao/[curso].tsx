import { Header } from "@/components/Header";
import { SubscriptionForm } from "@/components/Subscriptions";
import { PageSubscription, SubscriptionContainer } from "@/styles/pages/inscricao";

export default function Subscription(){
    return(
        <PageSubscription>
        <Header background="purple"/>
        <SubscriptionContainer>
            <SubscriptionForm/>
        </SubscriptionContainer>
        </PageSubscription>
    )
}