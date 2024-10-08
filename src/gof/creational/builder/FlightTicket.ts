import FlightTicketBuilder from "./FlightTicketBuilder";

export default class FilghtTicket {
    airline: string;
    flightCode: string;
    fromAirport: string;
    toAirport: string;
    passengerName: string;
    passengerEmail: string;
    passengerDocument: string;
    passengerGender: string;
    emergencyContactName: string;
    emergencyContactTelephone: string;
    seat: string;
    checkedBags: number;
    hasCheckIn: boolean;
    terminal: string;
    gate: string;
    priority: number;

    constructor(builder: FlightTicketBuilder) {
        this.airline = builder.airline;
        this.fromAirport = builder.fromAirport;
        this.toAirport = builder.toAirport;
        this.flightCode = builder.flightCode;
        this.passengerName = builder.passengerName;
        this.passengerEmail = builder.passengerEmail;
        this.passengerDocument = builder.passengerDocument;
        this.passengerGender = builder.passengerGender;
        this.emergencyContactName = builder.emergencyContactName;
        this.emergencyContactTelephone = builder.emergencyContactTelephone;
        this.seat = builder.seat;
        this.checkedBags = builder.checkedBags;
        this.hasCheckIn = builder.hasCheckIn;
        this.terminal = builder.terminal;
        this.gate = builder.gate;
        this.priority = builder.priority;  
    }
}
