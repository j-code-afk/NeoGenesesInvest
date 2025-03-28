package com.example.negenesis;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import org.json.JSONObject;
import java.net.URL;

public class GetCoin{
        public static double getBitcoin(String moeda,String valor){
            try{
                String urlString = "https://api.coingecko.com/api/v3/simple/price?ids="+moeda+"&vs_currencies="+valor;
                URL url = new URL(urlString);
                HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();
                while((inputLine = in.readLine()) != null){
                    response.append(inputLine);
                }
                in.close();

                JSONObject jsonResponse = new JSONObject(response.toString());
                double bitcoinPrice = jsonResponse.getJSONObject(moeda).getDouble(valor);
                
                System.out.println(jsonResponse);
                return bitcoinPrice;
            }catch(Exception ex){
                ex.printStackTrace();
            }

            return -0;
        }
}
