package com.wildBirds.BlueChat.domain.model;

import java.util.List;

interface MessageRepositoryCustom {
    public List<Message> getConversation(Long sender, Long receiver, Integer limit, Integer toBound);

    public Message saveMessage(Message message);
}