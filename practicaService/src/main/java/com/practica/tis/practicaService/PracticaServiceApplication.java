package com.practica.tis.practicaService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.practica.tis.controllers"})
public class PracticaServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PracticaServiceApplication.class, args);
	}

}
