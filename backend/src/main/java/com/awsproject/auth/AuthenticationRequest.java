package com.awsproject.auth;

public record AuthenticationRequest(
        String username,
        String password
) {
}
