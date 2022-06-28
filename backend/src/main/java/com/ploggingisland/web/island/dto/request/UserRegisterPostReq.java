package com.ploggingisland.web.island.dto.request;

import lombok.Data;

@Data
public class UserRegisterPostReq {
    String id;
    String password;
    String nickname;
    Integer mileage;
}
