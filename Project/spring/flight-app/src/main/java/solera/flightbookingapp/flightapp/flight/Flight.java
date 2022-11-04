package solera.flightbookingapp.flightapp.flight;

import javax.annotation.processing.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity (name="Flights")
public class Flight {

    @Id
    @GeneratedValue
    private Integer flightId;
    @Column(name="airport_Origin_Name")
    private String airportOriginName;
    @Column(name="airport_Destination_Name")
    private String airportDestinationName;

    public Flight() {

    }


    public Flight(Integer id, String airport_Origin_Name, String airport_Destination_Name) {
        flightId = id;
        this.airportOriginName = airport_Origin_Name;
        this.airportDestinationName = airport_Destination_Name;
    }

    public Integer getFlightId() {
        return flightId;
    }

    public void setFlightId(Integer flightId) {
        this.flightId = flightId;
    }

    public String getAirportOriginName() {
        return airportOriginName;
    }

    public void setAirportOriginName(String airportOriginName) {
        this.airportOriginName = airportOriginName;
    }

    public String getAirportDestinationName() {
        return airportDestinationName;
    }

    public void setAirportDestinationName(String airportDestinationName) {
        this.airportDestinationName = airportDestinationName;
    }


    @Override
    public String toString() {
        return "Flight{" +
                "Id=" + flightId +
                ", airport_Origin_Name='" + airportOriginName + '\'' +
                ", airport_Destination_Name='" + airportDestinationName + '\'' +
                '}';
    }
}
