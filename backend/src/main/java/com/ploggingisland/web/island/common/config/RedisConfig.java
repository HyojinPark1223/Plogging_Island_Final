//package com.ploggingisland.web.island.common.config;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.redis.connection.RedisConnectionFactory;
//import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.data.redis.core.StringRedisTemplate;
//import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
//import org.springframework.data.redis.serializer.StringRedisSerializer;
//
//
//@Configuration
//@EnableRedisRepositories
//public class RedisConfig {
//
////	@Value("${spring.redis.host}")
////	private String host;
////
////	@Value("${spring.redis.port}")
////	private int port;
////
////	@Value("${spring.redis.password}")
////	private String password;
////
////    @Bean
////    public RedisConnectionFactory redisConnectionFactory() {
////
////    	LettuceConnectionFactory let = new LettuceConnectionFactory();
////    	let.setHostName(host);
////    	let.setPort(port);
////    	let.setPassword(password);
////
////        return let;
////    }
////
////    @Bean
////    public RedisTemplate<String, Object> redisTemplate() {
////        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
////        redisTemplate.setConnectionFactory(redisConnectionFactory());
////        redisTemplate.setKeySerializer(new StringRedisSerializer());
////        redisTemplate.setValueSerializer(new StringRedisSerializer());
////        return redisTemplate;
////    }
////
////    @Bean
////    public StringRedisTemplate stringRedisTemplate() {
////        StringRedisTemplate stringRedisTemplate = new StringRedisTemplate();
////        stringRedisTemplate.setKeySerializer(new StringRedisSerializer());
////        stringRedisTemplate.setValueSerializer(new StringRedisSerializer());
////        stringRedisTemplate.setConnectionFactory(redisConnectionFactory());
////        return stringRedisTemplate;
////    }
//
//}