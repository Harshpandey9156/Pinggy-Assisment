package com.pinggy.assignment.controller;

import com.pinggy.assignment.dto.PostRequest;
import com.pinggy.assignment.dto.PostResponse;
import com.pinggy.assignment.filter.AuthFilter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PostController {

    private static final List<PostResponse> posts = new ArrayList<>();

    @PostMapping("/post")
    public ResponseEntity<String> createPost(@RequestBody PostRequest request) {
        String authValue = AuthFilter.authHeader.get();
        posts.add(new PostResponse(request.getTitle(), request.getBody(), authValue));
        return ResponseEntity.ok("Post created successfully");
    }

    @GetMapping("/list")
    public ResponseEntity<List<PostResponse>> getAllPosts() {
        return ResponseEntity.ok(posts);
    }
}