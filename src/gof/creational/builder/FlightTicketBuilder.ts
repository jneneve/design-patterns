import FlightTicket from "./FlightTicket";

export default interface FlightTicketBuilder {
    setTrip(from: string, to: string): void;
    setPassenger(name: string, email: string, document: string, gender: string): void;
    setEmergencyContact(name: string, telephone: string): void;
    setSeat(seat: string): void;
    setCheckedBags(checkedBags: number): void;
    setCheckInInformation(hasCheckIn: boolean, terminal: string, gate: string): void;
    setPriority(priority: number): void;
    getFlightTicket(): FlightTicket;
}
