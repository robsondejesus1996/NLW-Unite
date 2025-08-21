package robson.com.pass_in.services;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import robson.com.pass_in.domain.attendee.Attendee;
import robson.com.pass_in.domain.checkin.CheckIn;
import robson.com.pass_in.domain.checkin.exceptions.CheckInAlreadyExistsException;
import robson.com.pass_in.domain.repositories.CheckInRepository;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CheckInService {
    private final CheckInRepository checkInRepository;


    public void registerCheckIn(Attendee attendee){

        this.verifyCheckInExists(attendee.getId());
        CheckIn newCheckIn = new CheckIn();
        newCheckIn.setAttendee(attendee);
        newCheckIn.setCreatedAt(LocalDateTime.now());


        this.checkInRepository.save(newCheckIn);

    }


    private void verifyCheckInExists(String attendeeId) {
        Optional<CheckIn> isCheckedIn = this.getCheckIn(attendeeId);

        if(isCheckedIn.isPresent())throw new CheckInAlreadyExistsException("Attendee already checked in");
    }

    public Optional<CheckIn> getCheckIn(String attendeeId){
        return this.checkInRepository.findByAttendeeId(attendeeId);
    }
}
