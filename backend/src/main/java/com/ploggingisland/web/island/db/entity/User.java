package com.ploggingisland.web.island.db.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue
    private Integer Id;

    @Column(name = "User_id")
    private String userId;

    @Column(name = "User_password")
    private String password;

    @Column(name = "User_nickname")
    private String nickname;

    @Column(name = "User_mileage")
    private Integer mileage;
}
