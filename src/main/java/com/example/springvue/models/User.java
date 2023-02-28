package com.example.springvue.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(catalog = "test_schema", name = "users", schema = "test_schema")
@GenericGenerator(name = "uuid", strategy = "uuid2")
public class User {

    @Id
    @GeneratedValue(generator = "uuid")
    @Column(name = "user_uuid", length = 36, unique = true, nullable = false)
    private String userUuid;

    @Column(name = "first_name", length = 200)
    private String firstName;

    @Column(name = "last_name", length = 200)
    private String lastName;

    @Column(name = "address_uuid", length = 36)
    private String addressUuid;

    public User() {
        this.firstName = "";
        this.lastName = "";
    }

    public String getUserUuid() {
        return userUuid;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getAddressUuid() {
        return addressUuid;
    }

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAddressUuid(String addressUuid) {
        this.addressUuid = addressUuid;
    }
}
