package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.Entity")
public class BackendQuizzItApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendQuizzItApplication.class, args);
	}

}
