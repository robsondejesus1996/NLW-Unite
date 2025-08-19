package robson.com.pass_in.services;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import robson.com.pass_in.domain.events.Event;
import robson.com.pass_in.domain.repositories.EventRepository;

@Service
@RequiredArgsConstructor
public class EventServices {

    private final EventRepository eventRepository;


    public void getEventDetail(String eventId){
        Event event = this.eventRepository.findById(eventId).orElseThrow(() -> new RuntimeException("Event not found with id: " + eventId));
        return;
    }


}
