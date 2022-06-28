package com.ploggingisland.web.island.common.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	CorsConfig corsConfig;
	@Bean
	public PasswordEncoder getPasswordEncoder(){
		return new BCryptPasswordEncoder();
	}
    
//    @Override
//    public void configure(WebSecurity web) {
//        web.ignoring().antMatchers("/v2/api-docs", "/swagger-resourcees/**", "/swagger-ui.html", "/webjars/**", "/swagger/**");
//    }

    @Override
	protected void configure(HttpSecurity http) throws Exception {
		http.addFilter(corsConfig.corsFilter()) .httpBasic().disable() //기본 로그인 x
				.csrf().disable()//csrf 사용 x
				.formLogin().disable()
				.headers().frameOptions().disable();
//				.authorizeRequests()
//				.antMatchers("/**").permitAll();
	}
}