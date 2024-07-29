"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { MessageMetadata } from "../types/service";
import { Message } from "postcss";

type MessageMetadataContext = {
  messageData: MessageMetadata[];
  setMessageData: Dispatch<SetStateAction<MessageMetadata[]>>;
  addMessageData: (queueItem: MessageMetadata) => void;
  addTempMessageData: (botNumber: string, chatMessages: any[]) => void,
  chatMess: {
    first: Message[],
    second: Message[]
  }
};

interface MessageMetadataContextInterface {
  children: React.ReactNode;
}

const MessageMetadataContext = createContext({} as MessageMetadataContext);

const MessageMetadataContextProvider = ({
  children,
}: MessageMetadataContextInterface) => {
  const [messageData, setMessageData] = useState<MessageMetadata[]>([]);
  const [chatMess, setChatMess] = useState<{
    first: Message[],
    second: Message[]
  }>({
    first: [],
    second: []
  });
  const addMessageData = useCallback((queueItem: MessageMetadata): void => {
    setMessageData((q) => [...q, queueItem]);
  }, []);

  const addTempMessageData = (botNumber: string, chatMessages: Message[]) => {
    setChatMess((chatMess) => {
      console.log(chatMess)
      return {
        ...chatMess,
        [botNumber]: [...chatMessages],
      }
    })
  }
  return (
    <MessageMetadataContext.Provider
      value={{
        messageData,
        setMessageData,
        addMessageData,
        addTempMessageData,
        chatMess
      }}
    >
      {children}
    </MessageMetadataContext.Provider>
  );
};

function useMessageData() {
  return useContext(MessageMetadataContext);
}

export { MessageMetadataContextProvider, useMessageData };
