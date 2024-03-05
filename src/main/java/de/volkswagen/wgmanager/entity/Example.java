package de.volkswagen.wgmanager.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Example {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
}