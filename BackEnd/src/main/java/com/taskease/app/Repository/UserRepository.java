package com.taskease.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.taskease.app.Entity.UserEntity;

@Repository

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByEmail(String eMail);
 // This should match the getter method name part after 'get'
}
