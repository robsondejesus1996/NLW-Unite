package robson.com.pass_in.domain.events.exceptions;

public class EventNotFoundException extends RuntimeException{



    public EventNotFoundException(String message) {
        super(message);
    }
}
