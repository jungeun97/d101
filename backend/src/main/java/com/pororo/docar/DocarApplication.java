package com.pororo.docar;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(servers = {@Server(url = "https://k8d101.p.ssafy.io/api", description = "Generated Server URL")})
@SpringBootApplication
public class DocarApplication {

	public static void main(String[] args) {
		SpringApplication.run(DocarApplication.class, args);
	}

}
