package solera.flightbooking.app.Price.Request.priceRequest;


import solera.flightbooking.app.Price.Request.model.destination.Destination;
import solera.flightbooking.app.Price.Request.model.origin.Origin;

import java.time.LocalDate;

public class PriceRequest {

    private Origin origin;
    private Destination destination;
    private LocalDate departureDate;
    private LocalDate returnDate;

}
