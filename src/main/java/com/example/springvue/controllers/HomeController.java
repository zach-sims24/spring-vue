package com.example.springvue.controllers;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;


@Controller
@Scope("request")
public class HomeController {

    @GetMapping("/example-page")
    public String index(HttpServletRequest request) {
        return "index";
    }

}