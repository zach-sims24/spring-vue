package com.example.springvue.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;

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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "address_uuid")
    private Address primaryAddress;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public void setUserUuid(String userUuid) {
        this.userUuid = userUuid;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setPrimaryAddress(Address primaryAddress) {
        this.primaryAddress = primaryAddress;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
