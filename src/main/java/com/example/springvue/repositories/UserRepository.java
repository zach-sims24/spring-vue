package com.example.springvue.repositories;

import com.example.springvue.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserRepository extends PagingAndSortingRepository<User, String> {

    // This is an example of a spring derived query method https://www.baeldung.com/spring-data-derived-queries
    List<User> findByOrderByLastNameAsc();
}
