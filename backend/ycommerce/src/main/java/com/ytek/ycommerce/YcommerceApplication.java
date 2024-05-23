package com.ytek.ycommerce;

import  org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class YcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(YcommerceApplication.class, args);
	}
	@GetMapping("/rrr")
	public String apiRoot(){
		return "hello Jude We made It here so far";
	}
}

