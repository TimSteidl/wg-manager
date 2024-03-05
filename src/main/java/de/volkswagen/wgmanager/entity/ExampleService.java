package de.volkswagen.wgmanager.entity;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExampleService {

    private final ExampleRepository exampleRepository;

    public ExampleService(ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    public List<Example> getAllExamples() {
        return this.exampleRepository.findAll();
    }

    public Example createExample(Example example) {
        return this.exampleRepository.save(example);
    }

    public Example updateExample(Example example) {
        return this.exampleRepository.save(example);
    }

    public void deleteExample(Example example) {
        this.exampleRepository.delete(example);
    }
}