package com.ploggingisland.web.island.db.repository.user;

import java.util.List;

import com.ploggingisland.web.island.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserId(String userId);
    List<User> findAllByOrderByMileageDesc();
}
