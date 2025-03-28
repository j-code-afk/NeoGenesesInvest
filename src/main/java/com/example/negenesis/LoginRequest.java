package com.example.negenesis;

public class LoginRequest {
    private String name;
    private String senha;
    private String email;

    public LoginRequest(String name, String senha, String email){
        this.name = name;
        this.senha = senha;
        this.email = email;
    }

    public String getName(){return name;}
    public String getSenha(){return senha;}
    public String getEmail(){return email;}
}
