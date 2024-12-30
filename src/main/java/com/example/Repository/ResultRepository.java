package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Entity.Result;

public interface ResultRepository extends JpaRepository<Result,Long> {

}
