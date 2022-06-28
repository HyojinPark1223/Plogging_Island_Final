package com.ploggingisland.web.island.dto.request;

import lombok.Data;

@Data
public class UserLoginPostReq {
    String id;
    String password;
}
