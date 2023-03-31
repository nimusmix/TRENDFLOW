package com.trendflow.analyze.msa.service;

import com.trendflow.analyze.msa.dto.vo.LocalCode;
import com.trendflow.analyze.msa.dto.vo.Source;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.util.List;

@FeignClient("COMMON")
public interface CommonServiceClient {
    @GetMapping("/common/local/{name}")
    LocalCode getLocalCode(@PathVariable String name);
    @GetMapping("/common/source")
    List<Source> getSource(@RequestParam String keyword,
                           @RequestParam List<Long> sourceIdList,
                           @RequestParam String sourceCode);
}