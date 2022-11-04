package solera.flightbooking.app.Price.Request.model.destination;

public class Destination {
    private Integer id;
    private String destinationName;
    private Integer distance;


    public Destination(Integer id, String destinationName, Integer distance) {
        this.id = id;
        this.destinationName = destinationName;
        this.distance = distance;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDestinationName() {
        return destinationName;
    }

    public void setDestinationName(String destinationName) {
        this.destinationName = destinationName;
    }

    public Integer getDistance() {
        return distance;
    }

    public void setDistance(Integer distance) {
        this.distance = distance;
    }

    @Override
    public String toString() {
        return "Destination{" +
                "id=" + id +
                ", destinationName='" + destinationName + '\'' +
                ", distance=" + distance +
                '}';
    }


    //Lisbon-Portugal - 0km
    //Madrid-Spain - 200km
    //Paris-France - 400km
    //London-United Kingdom 600km
    //Rome-Italy 800km-
}
