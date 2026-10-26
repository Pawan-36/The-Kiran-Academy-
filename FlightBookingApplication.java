package Flight_Booking_System;


import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


abstract class Passenger {
    private String name;
    private int age;

    public Passenger(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public abstract double getDiscountPercentage();

    public abstract String getPassengerType();
}


class RegularPassenger extends Passenger {

    public RegularPassenger(String name, int age) {
        super(name, age);
    }

    @Override
    public double getDiscountPercentage() {
        return 0.0;
    }

    @Override
    public String getPassengerType() {
        return "Regular";
    }
}


class StudentPassenger extends Passenger {

    public StudentPassenger(String name, int age) {
        super(name, age);
    }

    @Override
    public double getDiscountPercentage() {
        return 10.0;
    }

    @Override
    public String getPassengerType() {
        return "Student";
    }
}


class Flight {
    private String flightCode;
    private String airline;
    private String source;
    private String destination;
    private int availableSeats;
    private double baseFare;

    public Flight(String flightCode, String airline, String source,
                  String destination, int availableSeats, double baseFare) {
        this.flightCode = flightCode;
        this.airline = airline;
        this.source = source;
        this.destination = destination;
        this.availableSeats = availableSeats;
        this.baseFare = baseFare;
    }

    public String getFlightCode() {
        return flightCode;
    }

    public String getAirline() {
        return airline;
    }

    public String getSource() {
        return source;
    }

    public String getDestination() {
        return destination;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    public double getBaseFare() {
        return baseFare;
    }

    public boolean hasEnoughSeats(int tickets) {
        return tickets > 0 && tickets <= availableSeats;
    }

    public void reserveSeats(int tickets) {
        if (hasEnoughSeats(tickets)) {
            availableSeats -= tickets;
        }
    }

    public void displayFlight() {
        System.out.printf("%-8s %-15s %-12s %-12s %-8d ₹%.2f%n",
                flightCode, airline, source, destination,
                availableSeats, baseFare);
    }
}

class Booking {
    private String bookingId;
    private Flight flight;
    private Passenger passenger;
    private int ticketCount;
    private double subtotal;
    private double discount;
    private double totalFare;

    public Booking(String bookingId, Flight flight, Passenger passenger,
                   int ticketCount) {
        this.bookingId = bookingId;
        this.flight = flight;
        this.passenger = passenger;
        this.ticketCount = ticketCount;

        calculateFare();
    }

    private void calculateFare() {
        subtotal = flight.getBaseFare() * ticketCount;
        discount = subtotal *
                passenger.getDiscountPercentage() / 100.0;
        totalFare = subtotal - discount;
    }

    public void displaySummary() {
        System.out.println("\n========== BOOKING SUMMARY ==========");
        System.out.println("Booking ID       : " + bookingId);
        System.out.println("Flight Code      : " + flight.getFlightCode());
        System.out.println("Airline          : " + flight.getAirline());
        System.out.println("Route            : " + flight.getSource()
                + " to " + flight.getDestination());
        System.out.println("Passenger Name   : " + passenger.getName());
        System.out.println("Passenger Age    : " + passenger.getAge());
        System.out.println("Passenger Type   : " + passenger.getPassengerType());
        System.out.println("Number of Tickets: " + ticketCount);

        System.out.printf("Base Fare/Ticket : ₹%.2f%n",
                flight.getBaseFare());
        System.out.printf("Subtotal         : ₹%.2f%n", subtotal);
        System.out.printf("Discount (%.0f%%)   : ₹%.2f%n",
                passenger.getDiscountPercentage(), discount);
        System.out.printf("Final Amount     : ₹%.2f%n", totalFare);

        System.out.println("=====================================");
    }
}


public class FlightBookingApplication {
    private Scanner sc = new Scanner(System.in);
    private List<Flight> flights = new ArrayList<>();
    private List<Booking> bookings = new ArrayList<>();
    private int nextBookingNumber = 1001;

    public FlightBookingApplication() {
        flights.add(new Flight("PN101", "Air India",
                "Pune", "Delhi", 20, 4000));

        flights.add(new Flight("MB102", "IndiGo",
                "Mumbai", "Bengaluru", 25, 3500));

        flights.add(new Flight("PN103", "Akasa Air",
                "Pune", "Hyderabad", 15, 3000));
    }


    public void displayFlights() {
        System.out.println("\n================ AVAILABLE FLIGHTS ================");
        System.out.printf("%-8s %-15s %-12s %-12s %-8s %s%n",
                "Code", "Airline", "Source", "Destination",
                "Seats", "Base Fare");

        for (Flight flight : flights) {
            flight.displayFlight();
        }

        System.out.println("===================================================");
    }

    // Find a flight using its code
    public Flight findFlightByCode(String code) {
        for (Flight flight : flights) {
            if (flight.getFlightCode().equalsIgnoreCase(code)) {
                return flight;
            }
        }
        return null;
    }


    private int readInteger(String message) {
        System.out.print(message);
        String input = sc.nextLine().trim();

        try {
            return Integer.parseInt(input);
        } catch (NumberFormatException e) {
            return -1;
        }
    }


    private boolean validateBookingDetails(
            Flight flight, String name, int age, int tickets) {

        if (flight == null) {
            System.out.println("Error: Invalid flight code.");
            return false;
        }

        if (name == null || name.trim().isEmpty()) {
            System.out.println("Error: Passenger name cannot be blank.");
            return false;
        }

        if (age <= 0) {
            System.out.println("Error: Age must be greater than zero.");
            return false;
        }

        if (tickets <= 0) {
            System.out.println("Error: Ticket count must be greater than zero.");
            return false;
        }

        if (!flight.hasEnoughSeats(tickets)) {
            System.out.println("Booking failed: Not enough seats available.");
            System.out.println("No booking was created.");
            return false;
        }

        return true;
    }


    public void bookFlight() {
        displayFlights();

        System.out.print("\nEnter flight code: ");
        String code = sc.nextLine().trim();

        Flight flight = findFlightByCode(code);

        System.out.print("Enter passenger name: ");
        String name = sc.nextLine().trim();

        int age = readInteger("Enter passenger age: ");

        System.out.print("Passenger type (Regular/Student): ");
        String type = sc.nextLine().trim();

        Passenger passenger;

        if (type.equalsIgnoreCase("Regular")) {
            passenger = new RegularPassenger(name, age);
        } else if (type.equalsIgnoreCase("Student")) {
            passenger = new StudentPassenger(name, age);
        } else {
            System.out.println("Error: Enter Regular or Student.");
            return;
        }

        int tickets = readInteger("Enter number of tickets: ");


        if (!validateBookingDetails(flight, name, age, tickets)) {
            return;
        }


        Booking booking = new Booking(
                "BK" + nextBookingNumber,
                flight, passenger, tickets);

        flight.reserveSeats(tickets);
        bookings.add(booking);
        nextBookingNumber++;

        System.out.println("\nBooking confirmed!");
        booking.displaySummary();
    }


    public void viewBooking() {
        if (bookings.isEmpty()) {
            System.out.println("No confirmed bookings found.");
            return;
        }

        bookings.get(bookings.size() - 1).displaySummary();
    }


    public void start() {
        System.out.println("Welcome to Kiran Air Booking!");

        while (true) {
            System.out.println("\n========== MAIN MENU ==========");
            System.out.println("1. View Flights");
            System.out.println("2. Book Flight");
            System.out.println("3. View Booking");
            System.out.println("4. Exit");

            int choice = readInteger("Enter choice: ");

            switch (choice) {
                case 1:
                    displayFlights();
                    break;

                case 2:
                    bookFlight();
                    break;

                case 3:
                    viewBooking();
                    break;

                case 4:
                    System.out.println(
                            "Thank you for using Kiran Air Booking!");
                    sc.close();
                    return;

                default:
                    System.out.println(
                            "Invalid choice. Please select 1, 2, 3, or 4.");
            }
        }
    }

    public static void main(String[] args) {
        FlightBookingApplication system =
                new FlightBookingApplication();
        system.start();
    }
}

