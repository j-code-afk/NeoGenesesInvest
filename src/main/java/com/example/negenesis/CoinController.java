package com.example.negenesis;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/coin")
public class CoinController{
    @GetMapping("/bitcoin")
    public double getMethodName(@RequestParam(defaultValue = "bitcoin") String moeda,@RequestParam(defaultValue = "usd") String valor) {
        return GetCoin.getBitcoin(moeda,valor);
    }
    
}
