import FlightTicket from "../../../../src/gof/creational/builder/FlightTicket";

test("Deve criar uma passagem aérea", function() {
    const flightTicket = new FlightTicket("Azul", "FLN", "GRU", "9876", "John Doe", "john.doe@gmail.com", "111.111.111-11", "M", 
        "Bob Simpson", "5511999999999", "8A", 2, true, "1", "4A", 5);
    expect(flightTicket.passengerName).toBe("John Doe");
});
    