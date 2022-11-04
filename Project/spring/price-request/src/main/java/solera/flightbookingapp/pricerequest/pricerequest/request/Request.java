package solera.flightbookingapp.pricerequest.pricerequest.request;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class Request {
    private String origin;
    private String destination;
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private LocalDate departureDate;
    private LocalDate arrivalDate;
    private int adult;
    private int youngster;
    private int baby;
    private boolean oneWay;
    private boolean luggage;

    public Request() {
    }

    public Request(String origin, String destination, LocalTime departureTime, LocalTime arrivalTime, LocalDate departureDate, LocalDate arrivalDate, int adult, int youngster, int baby, boolean oneWay, boolean luggage) {
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        this.adult = adult;
        this.youngster = youngster;
        this.baby = baby;
        this.oneWay = oneWay;
        this.luggage = luggage;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public LocalTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalTime departureTime) {
        this.departureTime = departureTime;
    }

    public LocalTime getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(LocalTime arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public LocalDate getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(LocalDate arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public int getAdult() {
        return adult;
    }

    public void setAdult(int adult) {
        this.adult = adult;
    }

    public int getYoungster() {
        return youngster;
    }

    public void setYoungster(int youngster) {
        this.youngster = youngster;
    }

    public int getBaby() {
        return baby;
    }

    public void setBaby(int baby) {
        this.baby = baby;
    }

    public boolean isOneWay() {
        return oneWay;
    }

    public void setOneWay(boolean oneWay) {
        this.oneWay = oneWay;
    }

    public boolean isLuggage() {
        return luggage;
    }

    public void setLuggage(boolean luggage) {
        this.luggage = luggage;
    }

    @Override
    public String toString() {
        return "Request{" +
                "origin='" + origin + '\'' +
                ", destination='" + destination + '\'' +
                ", departureTime=" + departureTime +
                ", arrivalTime=" + arrivalTime +
                ", departureDate=" + departureDate +
                ", arrivalDate=" + arrivalDate +
                ", adult=" + adult +
                ", youngster=" + youngster +
                ", baby=" + baby +
                ", oneWay=" + oneWay +
                ", luggage=" + luggage +
                '}';
    }
}
