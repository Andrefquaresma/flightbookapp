package solera.flightbookingapp.flightapp.flight;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import solera.flightbookingapp.flightapp.springDataJpa.FlightSpringDataJpaRepository;

import java.util.List;
import java.util.function.Predicate;

@RestController
public class FlightResource {
    private FlightSpringDataJpaRepository repository;

    public FlightResource(FlightSpringDataJpaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/flights")
    public List<Flight> retrieveAllFlights() {
        return repository.findAll();
    }

    @GetMapping("/flights/{airportOriginName}/to/{airportDestinationName}")
    public Flight retriveFlight(@PathVariable String airportOriginName, @PathVariable String airportDestinationName) {

        Predicate<?super Flight> predicate = flight -> flight.getAirportDestinationName().equals(airportDestinationName);
       List<Flight> flights = repository.findByAirportOriginName(airportOriginName);

       return flights.stream().filter(predicate).findFirst().get();

        //return "Origin: " + airportOriginName + " Destination: " + airportDestinationName;
    }

    /*@GetMapping("flights/{airportOriginName}/to/{airportDestinationName}")
    public Flight retriveFlight(@PathVariable String airportOriginName, @PathVariable String airportDestinationName) {
        List<Flight> possibleDestinations = repository.findByAirportOriginName(airportOriginName);
        return repository.findByAirportDestinationName(possibleDestinations);
    }
   */


}
