package solera.flightbooking.app.Price.Request.model;

import java.time.LocalDate;

public class PriceRequestModel {

    private int id;
    private String start;
    private String destination;
    private LocalDate departureDate;
    private LocalDate returnDate;
    private float price;

    public PriceRequestModel(int id, String start, String destination, LocalDate departureDate, LocalDate returnDate, float price) {
        this.id = id;
        this.start = start;
        this.destination = destination;
        this.departureDate = departureDate;
        this.returnDate = returnDate;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
