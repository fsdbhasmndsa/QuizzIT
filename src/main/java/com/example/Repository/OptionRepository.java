package com.example.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Entity.Option;

public interface OptionRepository extends JpaRepository<Option, Long> {

}
