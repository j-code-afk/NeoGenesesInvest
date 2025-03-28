package com.example.negenesis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NegenesisApplication {
	public static void main(String[] args) {
		SpringApplication.run(NegenesisApplication.class, args);
		System.out.println(GetCoin.getBitcoin("bitcoin","brl"));
	}
}
//http://localhost:8080/coin/bitcoin