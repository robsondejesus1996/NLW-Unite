package robson.com.pass_in.config;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import robson.com.pass_in.domain.events.exceptions.EventNotFoundException;

@ControllerAdvice
public class ExceptionEntityHandler {

    @ExceptionHandler(EventNotFoundException.class)
    public ResponseEntity handleEventNotFound(EventNotFoundException exception) {

        return ResponseEntity.notFound().build();

    }

}
