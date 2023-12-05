package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.entity.AuthenticationRequest;
import com.wirt_pol.wirtualna_politechnika.entity.AuthenticationResponse;
import com.wirt_pol.wirtualna_politechnika.entity.RegisterRequest;
import com.wirt_pol.wirtualna_politechnika.service.AuthenticationService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/user/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request,
            HttpServletResponse response) {
        AuthenticationResponse authResponse = authenticationService.register(request);

        // Sets JWT as a Cookie
        // Ustawia JWT jako Cookie
        Cookie jwtCookie = new Cookie("Authorization", authResponse.getToken());
        jwtCookie.setHttpOnly(true);
        jwtCookie.setSecure(false);
        jwtCookie.setMaxAge(1800);
        jwtCookie.setPath("/");
        response.addCookie(jwtCookie);
        return ResponseEntity.ok(new AuthenticationResponse("User registered and authenticated"));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request,
            HttpServletResponse response) {
        AuthenticationResponse authResponse = authenticationService.authenticate(request);

        // Sets JWT as a Cookie
        // Ustawia JWT jako Cookie
        Cookie jwtCookie = new Cookie("Authorization", authResponse.getToken());
        jwtCookie.setHttpOnly(true);
        jwtCookie.setSecure(false);
        jwtCookie.setPath("/");
        jwtCookie.setMaxAge(1800);
        response.addCookie(jwtCookie);

        return ResponseEntity.ok(new AuthenticationResponse("User authenticated"));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        // Invalidation of JWT Token
        // Unieważnienie tokenu JWT
        Cookie jwtCookie = new Cookie("Authorization", null);
        jwtCookie.setHttpOnly(true);
        jwtCookie.setSecure(false);
        jwtCookie.setPath("/");
        // Expire the cookie immediately
        // Natychmiastowe wygaszenie Cookie
        jwtCookie.setMaxAge(0);

        response.addCookie(jwtCookie);

        return ResponseEntity.ok("Logged out successfully");
    }

}
