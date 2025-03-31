package com.pinggy.assignment.dto;

public class PostRequest {
    private String title;
    private String body;

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    // No-args constructor
    public PostRequest() {
    }

    // All-args constructor
    public PostRequest(String title, String body) {
        this.title = title;
        this.body = body;
    }
}