package robson.com.pass_in.controllers;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import robson.com.pass_in.services.EventServices;

@RestController
@RequestMapping("/events")
@RequiredArgsConstructor
public class EventController {

    private final EventServices service;


    @GetMapping("/{id}")
    public ResponseEntity<String> getEvent(@PathVariable String id) {
        this.service.getEventDetail(id);
        return ResponseEntity.ok("sucesso!");

    }
}
