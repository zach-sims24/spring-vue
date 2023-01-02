package com.example.springvue.controllers;

import com.google.gson.JsonObject;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.WebAttributes;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class RoutesController implements ErrorController {
    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "forward:/";
    }

    @RequestMapping("/unauthorized")
    @ResponseBody
    public String unauthorized(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JsonObject jsonResponse = new JsonObject();

        if (request != null && request.getSession() != null && request.getSession().getAttribute(WebAttributes.AUTHENTICATION_EXCEPTION) != null) {
            AuthenticationException exception = (AuthenticationException) request.getSession().getAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
            jsonResponse.addProperty("error", exception.getLocalizedMessage());
        }

        return jsonResponse.toString();
    }

    @Override
    public String getErrorPath() {
        return PATH;
    }
}