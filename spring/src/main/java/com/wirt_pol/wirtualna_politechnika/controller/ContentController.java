package com.wirt_pol.wirtualna_politechnika.controller;

import com.wirt_pol.wirtualna_politechnika.DTO.ContentDTO;
import com.wirt_pol.wirtualna_politechnika.entity.Content;
import com.wirt_pol.wirtualna_politechnika.service.ContentService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;



@CrossOrigin
@RestController

public class ContentController {

    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    @GetMapping("/content")
    public List<ContentDTO> fetchContentList(){
        return contentService.fetchContentList();
    }

    @PutMapping("content/like/{id}")
    public void likeContent(@PathVariable Long id){
        contentService.likeContent(id);
    }

    @PutMapping("content/dislike/{id}")
    public void dislikeContent(@PathVariable Long id){
        contentService.dislikeContent(id);
    }

    @GetMapping("/content/id/{id}")
    public ContentDTO fetchContentById(@PathVariable Long id){
        return contentService.fetchContentById(id);
    }
    @GetMapping("/content/page/{id}")
    public List<ContentDTO> fetchContentByPage(@PathVariable int id){
        return contentService.fetchContentByPage(id);
    }
    @GetMapping("/content/tag/{tag}")
    public List<ContentDTO> fetchContentByTag(@PathVariable String tag){
        return contentService.fetchContentByTag(tag);
    }
    @GetMapping("/content/tag/repeated/{tag}")
    public List<String> fetchMost5AppearingTags(@PathVariable String tag){
        return contentService.getMostRepeatingTagsWithPrefix(tag);
    }
    @PostMapping("/content")
    public ResponseEntity<Content> createContent(@Valid @RequestBody Content content){
        return contentService.createContent(content);
    }
    @PutMapping("/content/admin/edit/{id}")
    public String editContent(@Valid @RequestBody Content content, @PathVariable Long id ){
        return contentService.editContent(content, id);
    }
    @DeleteMapping("/content/admin/{id}")
    public void deleteContentById(@PathVariable("id") Long contentId){
        contentService.deleteContentById(contentId);
    }

    @GetMapping("/content/numberOfPages")
    public int getCountOfPages() {
        return contentService.fetchNumberOfPages();
    }
    

}