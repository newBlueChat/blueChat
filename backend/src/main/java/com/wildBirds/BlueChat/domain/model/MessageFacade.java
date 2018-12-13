package com.wildBirds.BlueChat.domain.model;


import com.wildBirds.BlueChat.api.rest.dto.MessageDto;
import lombok.AllArgsConstructor;

import java.util.List;
@AllArgsConstructor
public class MessageFacade {
    private MessageRepository messageRepository;
    private MessageService messageService;

    public MessageDto saveMessage(MessageDto messageDto) {
        Message message = messageService.toEntity(messageDto);


        Message savedMessage = messageRepository.save(message);
        MessageDto response = messageService.toDto(savedMessage);
        return response;
    }

    public List<MessageDto> getConversation(Integer sender, Integer receiver, Integer limit, Integer toBound) {
        return null;
    }
}
