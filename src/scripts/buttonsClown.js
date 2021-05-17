import { BookingForm } from "./BookingForm.js"

export const ClowningHTML = () => {
    return `
    
    <h1>Buttons' Clown Town</h1>
        <article>
            <section id="bookForm">
                    ${ BookingForm() }
            </section>

            <section id="reservations">
                    <h2>Reservations</h2>

            </section>
        </article>
    `

}