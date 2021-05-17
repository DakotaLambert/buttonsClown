export const BookingForm = () => {
    let html = `

    
        <div class="field">
            <label class="label" for="parentName"></label>
            <input type="text" name="parentName" class="input" placeholder="Parent Name"/>
        </div>
        
        <div class="field">
            <label class="label" for="childName"></label>
            <input type="text" name="childName" class="input" placeholder="Child Name"/>
        </div>

        <div class="field">
            <label class="label" for="childrenAttending"></label>
            <input type="text" name="childName" class="input" placeholder="Number of Children"/>
        </div>

        <div class="field">
            <label class="label" for="addressOfParty"></label>
            <input type="text" name="addressOfParty" class="input" placeholder="Address of Party"/>
        </div>

        <div class="field">
            <label class="label" for="reserveDate"></label>
            <input type="text" name="reserveDate" class="input" placeholder="Date for Reservation"/>
        </div>

        <div class="field">
            <label class="label" for="hoursToReserve"></label>
            <input type="text" name="hoursToReserve" class="input" placeholder="Hours for Reservation"/>
        </div>
    
    <button class="button" id="submitBooking">Send Reservation</button>

    
    `


return html
}