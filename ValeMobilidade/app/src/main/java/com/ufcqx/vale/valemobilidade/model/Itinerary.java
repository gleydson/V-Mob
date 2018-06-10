package com.ufcqx.vale.valemobilidade.model;

import java.util.List;

/**
 * Created by samuel on 6/10/18.
 */

public class Itinerary {
    private long id;
    private String destination;
    private String line;
    private List<Point> stoppingPoints;

    public Itinerary(String destination, String line, List<Point> stoppingPoints) {
        this.destination = destination;
        this.line = line;
        this.stoppingPoints = stoppingPoints;
    }

    public Itinerary() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getLine() {
        return line;
    }

    public void setLine(String line) {
        this.line = line;
    }

    public List<Point> getStoppingPoints() {
        return stoppingPoints;
    }

    public void setStoppingPoints(List<Point> stoppingPoints) {
        this.stoppingPoints = stoppingPoints;
    }
}
