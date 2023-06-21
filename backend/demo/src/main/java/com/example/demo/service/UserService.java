package com.example.demo.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.demo.model.User;

public interface UserService {
    public ResponseEntity<User> createUser(User user);
    public ResponseEntity<List<User>> getAllUsers(Long id);
    public ResponseEntity<User> getOneUser(Long id);
    public ResponseEntity<User> updateUser(Long id, User user);
    public ResponseEntity<User> deleteUser(Long id);
}
