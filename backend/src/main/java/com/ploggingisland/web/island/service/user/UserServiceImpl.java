package com.ploggingisland.web.island.service.user;

import com.ploggingisland.web.island.db.entity.User;
import com.ploggingisland.web.island.db.repository.user.UserRepository;
import com.ploggingisland.web.island.dto.request.MileagePutReq;
import com.ploggingisland.web.island.dto.request.UserLoginPostReq;
import com.ploggingisland.web.island.dto.request.UserRegisterPostReq;
import com.ploggingisland.web.island.dto.response.MileageWithUserRes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @Override
    public User join(UserRegisterPostReq userReq) {
        User user = new User();
        user.setUserId(userReq.getId());
        user.setPassword(passwordEncoder.encode(userReq.getPassword()));
        user.setNickname(userReq.getNickname());
        user.setMileage(0);
        return userRepository.save(user);
    }

    @Override
    public User login(UserLoginPostReq user) {
        User loginUser = userRepository.findByUserId(user.getId());

        if(!passwordEncoder.matches(user.getPassword(),loginUser.getPassword())){
            //비밀번호 다른 경우
            return null;
        }
        //아니면 로그인 성공
        return loginUser;
    }

    @Override
    public Boolean idcheck(String id) {
        User u = userRepository.findByUserId(id);
        if(u == null){
            return true;
        }
        return false;
    }

    @Override
    public Integer mileage(String id) {
        User u = userRepository.findByUserId(id);
        if(u == null) return null;

        return u.getMileage();
    }

    @Override
    public Boolean updateMileage(MileagePutReq req) {
        User u = userRepository.findByUserId(req.getId());
        if(u == null) return false;
        u.setMileage(req.getMileage());
        userRepository.save(u);
        return true;
    }

    @Override
    public Boolean withdrawal(String id) {
        User u = userRepository.findByUserId(id);

        if(u == null) return false;
        userRepository.deleteById(u.getId());
        return true;
    }

    @Override
    public List<MileageWithUserRes> selectAll() {
        List<User> ul = userRepository.findAllByOrderByMileageDesc();
        List<MileageWithUserRes> ml = new ArrayList<MileageWithUserRes>();
        for(User u : ul){
            ml.add(new MileageWithUserRes(u.getUserId(),u.getMileage()));
        }
        return ml;
    }
}
