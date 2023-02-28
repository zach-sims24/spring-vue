package com.example.springvue.controllers;

import com.example.springvue.models.Address;
import com.example.springvue.models.User;
import com.example.springvue.repositories.AddressRepository;
import com.example.springvue.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Lazy
    @Autowired
    private UserRepository userRepository;

    @Lazy
    @Autowired
    private AddressRepository addressRepository;

    @GetMapping(path="/rest/users")
    public List<User> getUsers() {
        return this.userRepository.findByOrderByLastNameAsc();
    }

    @GetMapping(path="/rest/address/{addressUuid}")
    public Optional<Address> getUserAddress(@PathVariable String addressUuid) {
        return this.addressRepository.findById(addressUuid);
    }
}
