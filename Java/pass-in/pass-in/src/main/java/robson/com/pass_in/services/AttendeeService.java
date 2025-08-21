package robson.com.pass_in.services;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import robson.com.pass_in.domain.attendee.Attendee;
import robson.com.pass_in.domain.checkin.CheckIn;
import robson.com.pass_in.domain.repositories.AttendeeRepository;
import robson.com.pass_in.domain.repositories.CheckInRepository;
import robson.com.pass_in.dto.event.attendee.AttendeeDetails;
import robson.com.pass_in.dto.event.attendee.AttendeesListResponseDTO;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AttendeeService {

    private final AttendeeRepository attendeeRepository;
    private  CheckInRepository checkInRepository;


    public List<Attendee> getAllAttendeesFromEvent(String eventId){

        return this.attendeeRepository.findByEventId(eventId);


    }

    public AttendeesListResponseDTO getEventsAttendee(String eventId){
        List<Attendee> attendeeList = this.getAllAttendeesFromEvent(eventId);

        List<AttendeeDetails> attendeeDetailsList = attendeeList.stream().map(attendee -> {
           Optional <CheckIn> checkIn = this.checkInRepository.findByAttendeeId(attendee.getId());
            LocalDateTime checkedInAt = checkIn.<LocalDateTime>map(CheckIn::getCreatedAt).orElse(null);
            return new AttendeeDetails(attendee.getId(), attendee.getName(), attendee.getEmail(), attendee.getCreatedAt(), checkedInAt);
        }).toList();

        return new AttendeesListResponseDTO(attendeeDetailsList);
    }


}
