package com.example.springvue.repositories;

import com.example.springvue.models.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path = "users")
public interface UserRepository extends PagingAndSortingRepository<User, String> {

    // This is an example of a spring derived query method https://www.baeldung.com/spring-data-derived-queries
    List<User> findByOrderByLastNameAsc();
}
