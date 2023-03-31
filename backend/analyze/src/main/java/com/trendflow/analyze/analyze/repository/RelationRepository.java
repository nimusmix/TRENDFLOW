package com.trendflow.analyze.analyze.repository;

import com.trendflow.analyze.analyze.entity.Relation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RelationRepository extends JpaRepository<Relation, Long> {
    List<Relation> findTop8ByKeywordIdOrderByCountDesc(Long keywordId);
    List<Relation> findTop200ByKeywordIdOrderByCountDesc(Long keywordId);
}