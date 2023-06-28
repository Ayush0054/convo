import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface ChatContextinterface {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<string>> | undefined;
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  selectedChat: any;
  setSelectedChat: React.Dispatch<React.SetStateAction<any>>;
  chats: any;
  setChats: React.Dispatch<React.SetStateAction<any>>;
}

const defaultState = {
  user: "",
  setUser: (user: "") => {},
  search: false,
  setSearch: (search) => {},
  selectedChat: null,
  setSelectedChat: (selectedChat) => {},
  chats: null,
  setChats: (chats) => {},
} as ChatContextinterface;

type ChildProps = {
  children: ReactNode;
};

const ChatContext = createContext(defaultState);
// const  Provider  = ChatContext;
const searchContext = createContext(defaultState);
const ChatProvider = ({ children }: ChildProps) => {
  const [user, setUser] = useState<string>(defaultState.user);
  const [search, setSearch] = useState<boolean>(defaultState.search);
  const [selectedChat, setSelectedChat] = useState<any>(
    defaultState.selectedChat
  );
  const [chats, setChats] = useState<any>(defaultState.chats);
  const values = {
    user,
    setUser,
    search,
    setSearch,
    selectedChat,
    setSelectedChat,
    chats,
    setChats,
  };
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
    if (userInfo) {
      setUser(userInfo);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

const ChatState = () => {
  return useContext(ChatContext);
};

export { ChatProvider, ChatState };
