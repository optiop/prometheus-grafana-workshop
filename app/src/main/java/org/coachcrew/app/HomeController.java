package org.coachcrew.app;

import io.micrometer.core.instrument.Tags;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Counter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class HomeController {
  private final Counter segmentationErrorCounter;

  public HomeController(MeterRegistry registery) {
    this.segmentationErrorCounter = Counter.builder("segmentation_error")
      .description("Segmentation Fault")
      .tags(Tags.of("instance", "application"))
      .register(registery);
  }

  @GetMapping("/")
  public String index() {
    segmentationErrorCounter.increment();
    return "<h1>Hello World!</h1>";
  }

  @GetMapping("/test")
  public String test() {
    segmentationErrorCounter.increment();
    return "<h1>Segmentation Fault</h1>";
  }
}