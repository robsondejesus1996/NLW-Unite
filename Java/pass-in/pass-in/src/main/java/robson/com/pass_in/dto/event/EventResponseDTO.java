package robson.com.pass_in.dto.event;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import robson.com.pass_in.domain.events.Event;

@Getter
/*@Setter
@AllArgsConstructor
@NoArgsConstructor*/
public class EventResponseDTO {

    EventDetailDTO event;


    public EventResponseDTO(Event event, Integer numberOfAttendees){
        this.event = new EventDetailDTO(event.getId(),event.getTitle(), event.getDetails(),event.getSlug(),  event.getMaximumAttendees(),numberOfAttendees);
    }
}
