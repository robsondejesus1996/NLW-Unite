package robson.com.pass_in.dto.event;

import robson.com.pass_in.domain.events.Event;

public class EventResponseDTO {

    EventDetailDTO event;


    public EventResponseDTO(Event event, Integer numberOfAttendees){
        this.event = new EventDetailDTO(event.getId(),event.getTitle(), event.getDetails(),event.getSlug(),  event.getMaxiumAttendees(),numberOfAttendees);
    }
}
