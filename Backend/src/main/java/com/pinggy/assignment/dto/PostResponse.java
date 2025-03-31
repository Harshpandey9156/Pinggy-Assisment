package com.pinggy.assignment.dto;

public class PostResponse {
    private String title;
    private String body;
    private String pinggyAuthHeader;

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

    public String getPinggyAuthHeader() {
        return pinggyAuthHeader;
    }

    public void setPinggyAuthHeader(String pinggyAuthHeader) {
        this.pinggyAuthHeader = pinggyAuthHeader;
    }

    // No-args constructor
    public PostResponse() {
    }

    // All-args constructor
    public PostResponse(String title, String body, String pinggyAuthHeader) {
        this.title = title;
        this.body = body;
        this.pinggyAuthHeader = pinggyAuthHeader;
    }
}