package com.example.springvue.repositories;

import com.example.springvue.models.Address;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "addresses")
public interface AddressRepository extends PagingAndSortingRepository<Address, String> {
}
