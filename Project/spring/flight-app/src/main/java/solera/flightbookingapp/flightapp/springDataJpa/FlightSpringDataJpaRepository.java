package solera.flightbookingapp.flightapp.springDataJpa;

import org.springframework.data.jpa.repository.JpaRepository;
import solera.flightbookingapp.flightapp.flight.Flight;

import java.util.List;

public interface FlightSpringDataJpaRepository extends JpaRepository<Flight, Integer> {
    List<Flight> findByAirportOriginName(String airportOriginName);

}
