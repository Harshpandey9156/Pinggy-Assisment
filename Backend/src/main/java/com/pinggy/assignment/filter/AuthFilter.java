package com.pinggy.assignment.filter;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthFilter implements Filter {
    public static final ThreadLocal<String> authHeader = new ThreadLocal<>();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        String headerValue = httpRequest.getHeader("PinggyAuthHeader");

        if (headerValue == null || headerValue.isEmpty()) {
            httpResponse.sendError(401, "Missing PinggyAuthHeader");
            return;
        }

        authHeader.set(headerValue);
        try {
            chain.doFilter(request, response);
        } finally {
            authHeader.remove();
        }
    }
}