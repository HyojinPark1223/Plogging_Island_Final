package com.ploggingisland.web.island.conroller;

import com.ploggingisland.web.island.db.entity.User;
import com.ploggingisland.web.island.dto.request.MileagePutReq;
import com.ploggingisland.web.island.dto.request.UserLoginPostReq;
import com.ploggingisland.web.island.dto.request.UserRegisterPostReq;
import com.ploggingisland.web.island.dto.response.MileageWithUserRes;
import com.ploggingisland.web.island.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import io.swagger.annotations.Api;

import java.util.HashMap;
import java.util.List;

/**
 * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/join")
    public ResponseEntity<HashMap> join(@RequestBody UserRegisterPostReq user){
        HashMap<String, Object> result = new HashMap<>();
        User u = userService.join(user);//회원가입
        if(u != null){
            result.put("message","success");
            return new ResponseEntity<HashMap>(result,HttpStatus.OK);
        }
        result.put("message","fail");
        return new ResponseEntity<HashMap>(result,HttpStatus.OK);

    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserLoginPostReq user){
        HashMap<String,Object> result = new HashMap<>();
        if( userService.idcheck(user.getId()) ){
            //id정보가 없음
            result.put("message","fail");
            result.put("reason","존재하지 않는 id입니다.");
            return new ResponseEntity(result,HttpStatus.OK);
        }
        User u = userService.login(user);
        if(u == null){
            result.put("message","fail");
            result.put("reason","유효하지 않은 비밀번호입니다.");
            return new ResponseEntity(result,HttpStatus.OK);
        }
        result.put("message","success");
        return new ResponseEntity<HashMap>(result,HttpStatus.OK);
    }

    @GetMapping("/idcheck/{id}")
    public ResponseEntity idcheck(@PathVariable String id){
        HashMap<String,Object> result = new HashMap<>();
        boolean flag = userService.idcheck(id);
        if(flag) {
            //회원가입 가능
            result.put("message","success");
            result.put("result","회원가입 가능한 id입니다.");
            return new ResponseEntity(result,HttpStatus.OK);
        }
        result.put("message","fail");
        result.put("result","이미 존재하는 id입니다.");
        return new ResponseEntity(result,HttpStatus.OK);
    }

    @GetMapping("/mileage/{id}")
    public ResponseEntity mileage(@PathVariable String id){
        HashMap<String,Object> result = new HashMap<>();
        Integer Mileage = userService.mileage(id);
        if(Mileage == null){
            result.put("message","fail");
            return new ResponseEntity(result,HttpStatus.OK);
        }
        result.put("message","success");
        result.put("mileage",Mileage);
        return new ResponseEntity(result,HttpStatus.OK);
    }

    @PutMapping("/mileage")
    public ResponseEntity putMileage(@RequestBody MileagePutReq req){
        HashMap<String,Object> result = new HashMap<>();
        if(!userService.updateMileage(req)){
            result.put("message","fail");
            return new ResponseEntity(result,HttpStatus.OK);
        }
        result.put("message","success");
        return new ResponseEntity(result,HttpStatus.OK);
    }

    @DeleteMapping("/leave/{id}")
    public ResponseEntity leave(@PathVariable String id){
        HashMap<String,Object> result = new HashMap<>();
        boolean flag = userService.withdrawal(id);
        if(!flag){
            result.put("message","fail");
            result.put("reason","id를 찾을 수 없습니다.");
            return new ResponseEntity(result,HttpStatus.OK);
        }
        result.put("message","success");
        return new ResponseEntity(result,HttpStatus.OK);
    }

    @GetMapping("/info")
    public ResponseEntity selectAll(){
        HashMap<String, Object> result = new HashMap<>();
        List<MileageWithUserRes> list = userService.selectAll();
        if(list != null){
            result.put("message","success");
            result.put("result",list);
        }
        return new ResponseEntity(result,HttpStatus.OK);
    }

}