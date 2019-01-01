package com.wildBirds.BlueChat.domain.model;


import com.wildBirds.BlueChat.api.rest.dto.MessageDto;
import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Instant;

public class MessageFacadeTest extends ConfigurationTest {

    private Logger logger = LoggerFactory.getLogger(MessageFacadeTest.class);

    @Test
    public void shouldSaveMessage(){
        logger.info("Running test >> shouldSaveMessage");

        //before
        User sender = new User();
        sender.setNick("igorMessageFacade");
        sender.setPassword("password");
        sender = userRepository.save(sender);

        User receiver = new User();
        receiver.setNick("pawelMessageFacade");
        receiver.setPassword("password");
        receiver = userRepository.save(receiver);

        //given
        Long idReceiver = receiver.getIdUser();
        Long idSender = sender.getIdUser();
        String content = "content";
        Instant sentDate = Instant.now();

        //when

        MessageDto messageDto = new MessageDto(null, content, sentDate, idSender, idReceiver);
        MessageDto messageSaved = messageFacade.saveMessage(messageDto);

        //then
        Assert.assertEquals(content, messageSaved.getContent() );
        Assert.assertEquals(sentDate, messageSaved.getSentDate());
        Assert.assertEquals(sender.getIdUser(), messageSaved.getSenderId());
        Assert.assertEquals(receiver.getIdUser(), messageSaved.getReceiverId());
    }
}
