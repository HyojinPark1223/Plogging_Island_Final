package com.ploggingisland.web.island.service.user;

import java.util.List;

import com.ploggingisland.web.island.db.entity.User;
import com.ploggingisland.web.island.dto.request.MileagePutReq;
import com.ploggingisland.web.island.dto.request.UserLoginPostReq;
import com.ploggingisland.web.island.dto.request.UserRegisterPostReq;
import com.ploggingisland.web.island.dto.response.MileageWithUserRes;

public interface UserService {
    User join(UserRegisterPostReq user);
    User login(UserLoginPostReq user);
    Boolean idcheck(String id);
    Integer mileage(String id);
    Boolean updateMileage(MileagePutReq req);
    Boolean withdrawal(String id);
    List<MileageWithUserRes> selectAll();
}
