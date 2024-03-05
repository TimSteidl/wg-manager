package de.volkswagen.wgmanager.entity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExampleController {

    private final ExampleService exampleService;

    public ExampleController(ExampleService exampleService) {
        this.exampleService = exampleService;
    }

    @GetMapping
    public List<Example> getAllExamples() {
        return this.exampleService.getAllExamples();
    }

    @PostMapping
    public Example createExample(@RequestBody Example example) {
        return this.exampleService.createExample(example);
    }

    @PutMapping
    public Example updateExample(@RequestBody Example example) {
        return this.exampleService.updateExample(example);
    }

    @DeleteMapping
    public void deleteExample(@RequestBody Example example) {
        this.exampleService.deleteExample(example);
    }
}