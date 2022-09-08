import Card from "components/Card"
import Footer from "components/Footer"
import Form from "components/Form"
import ParticipantsList from "components/ParticipantsList"

const Settings = () => {
    return (
        <>
            <Card>
                <section>
                    <h2>Let's get started!</h2>
                    <Form />
                    <ParticipantsList />
                    <Footer />
                </section>
            </Card>

        </>

    )
}

export default Settings