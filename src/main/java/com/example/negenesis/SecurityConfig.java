package com.example.negenesis;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfig implements WebMvcConfigurer {
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Permite CORS para todas as rotas
            .allowedOrigins("http://127.0.0.1:5500")  // Substitua com o URL do seu frontend
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Métodos permitidos
            .allowedHeaders("*")  // Permite todos os headers
            .allowCredentials(true);  // Permite credenciais (cookies, autenticação)
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.cors().and()  // Aplica CORS antes da configuração de segurança
            .authorizeRequests()
            .requestMatchers("/users/**").permitAll()  // Permite requisições para /users sem autenticação
            .anyRequest().authenticated()  // Requer autenticação para outras rotas
            .and()
            .csrf().disable();  // Desabilita CSRF se não for necessário

        return http.build();
    }
}
