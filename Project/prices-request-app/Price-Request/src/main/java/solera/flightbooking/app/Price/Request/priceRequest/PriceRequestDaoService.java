package solera.flightbooking.app.Price.Request.priceRequest;

import org.springframework.stereotype.Component;
import solera.flightbooking.app.Price.Request.model.destination.Destination;
import solera.flightbooking.app.Price.Request.model.origin.Origin;

import java.util.ArrayList;
import java.util.List;

@Component
public class PriceRequestDaoService {
    public static void main(String[] args) {
        System.out.println(listAllOrigins());
        System.out.println(listAllDestinations(1));
        System.out.println(distanceBetweenAirports(1, 5));

    }

    private static List<Destination> airports = new ArrayList<>();

    static {
        airports.add(new Destination(1,"Lisbon-Portugal Airport",0));
        airports.add(new Destination(2, "Madrid-Spain Airport",200));
        airports.add(new Destination(3,"Paris-France Airport", 400));
        airports.add(new Destination(4,"London-United Kingdom Airport", 600));
        airports.add(new Destination(5, "Rome-Italy Airport",800));
    }




    public static List<Destination> listAllDestinations(int airportId) {
         List<Destination> destinations = airports;
         destinations.remove(airportId-1);
         return destinations;


    }

    public static List<Destination> listAllOrigins() {
        return airports;
    }

    public static Integer distanceBetweenAirports(int originAirportId, int destinationAirportId) {

        return Math.abs((airports.get(originAirportId-1).getDistance()) - (airports.get(destinationAirportId-1).getDistance()));

    }

}
