package com.trendflow.analyze.msa.service;

import com.trendflow.analyze.msa.dto.vo.Keyword;
import com.trendflow.analyze.msa.dto.vo.KeywordCount;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.util.List;

@FeignClient("KEYWORD")
public interface KeywordServiceClient {
    @GetMapping("/keyword")
    List<Keyword> getKeyword(@RequestParam String keyword,
                             @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime startDate,
                             @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime endDate);
    @GetMapping("/keyword/platform")
    List<KeywordCount> getKeywordCount(@RequestParam String keyword,
                                       @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime startDate,
                                       @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime endDate);
}
