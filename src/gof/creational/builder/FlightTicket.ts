export default class FilghtTicket {

    constructor(
        readonly airline: string,
        readonly fromAirport: string,
        readonly toAirport: string,
        readonly flightCode: string,
        readonly passengerName: string,
        readonly passengerEmail: string,
        readonly pasasengerDocuments: string,
        readonly passengerGender: string,
        readonly emergencyContactName: string,
        readonly emergencyContactTelephone: string,
        readonly seat: string,
        readonly checkedBags: number,
        readonly hasCheckIn: boolean,
        readonly terminal: string,
        readonly gate: string,
        readonly priority: number
    ) {
    }
}
