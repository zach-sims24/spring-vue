package com.example.springvue.repositories;

import com.example.springvue.models.Address;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AddressRepository extends PagingAndSortingRepository<Address, String> {
}
