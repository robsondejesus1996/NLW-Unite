package robson.com.pass_in.services;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import robson.com.pass_in.domain.attendee.Attendee;
import robson.com.pass_in.domain.events.Event;
import robson.com.pass_in.domain.events.exceptions.EvenFullException;
import robson.com.pass_in.domain.events.exceptions.EventNotFoundException;
import robson.com.pass_in.domain.repositories.EventRepository;
import robson.com.pass_in.dto.event.EventIdDTO;
import robson.com.pass_in.dto.event.EventRequestDTO;
import robson.com.pass_in.dto.event.EventResponseDTO;
import robson.com.pass_in.dto.event.attendee.AttendeeIdDTO;
import robson.com.pass_in.dto.event.attendee.AttendeeRequestDTO;

import java.text.Normalizer;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventServices {

    private final EventRepository eventRepository;
    private final AttendeeService attendeeService;


    public EventResponseDTO getEventDetail(String eventId) {


        String cleanId = eventId.trim();
        Event event = this.eventRepository.findById(cleanId).orElseThrow(() -> new EventNotFoundException("Event not found with id: " + cleanId));

        List<Attendee> attendeeList = this.attendeeService.getAllAttendeesFromEvent(cleanId);
        return new EventResponseDTO(event, attendeeList.size());
    }


    public EventIdDTO createEvent(EventRequestDTO eventDTO){
        Event newEvent = new Event();
        newEvent.setTitle(eventDTO.title());
        newEvent.setDetails(eventDTO.details());
        newEvent.setMaximumAttendees(eventDTO.maximumAttendees());
        newEvent.setSlug(this.createSlug(eventDTO.title()));

        this.eventRepository.save(newEvent);

        return new EventIdDTO(newEvent.getId());

    }

    public AttendeeIdDTO registerAttendeeOnEvent(String eventId, AttendeeRequestDTO attendeeRequestDTO){
        this.attendeeService.verifyAttendeeSubscription(attendeeRequestDTO.email(), eventId);

        String cleanId = eventId.trim();
        Event event = this.eventRepository.findById(cleanId).orElseThrow(() -> new EventNotFoundException("Event not found with id: " + cleanId));
        List<Attendee> attendeeList = this.attendeeService.getAllAttendeesFromEvent(cleanId);


        if(event.getMaximumAttendees() <= attendeeList.size()) throw new EvenFullException("Event is full");

        Attendee newAttendee = new Attendee();

        newAttendee.setName(attendeeRequestDTO.name());
        newAttendee.setEmail(attendeeRequestDTO.email());
        newAttendee.setEvent(event);
        newAttendee.setCreatedAt(LocalDateTime.now());
        this.attendeeService.registerAttendee(newAttendee);
        return new AttendeeIdDTO(newAttendee.getId());

    }

    private Event getEventById(String eventId){
        String cleanId = eventId.trim();
        return this.eventRepository.findById(cleanId).orElseThrow(() -> new EventNotFoundException("Event not found with id: " + cleanId));
    }

    private String createSlug(String text){
        String normalized = Normalizer.normalize(text, Normalizer.Form.NFD);
        return normalized.replaceAll("[\\p{InCOMBINING_DIACRITICAL_MARKS}]", "")
                .replaceAll("[^\\w\\s]", "")
                .replaceAll("\\s+", "-")
                .toLowerCase();
    }


}
