import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface ChatContextinterface {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>> | undefined;
}

const defaultState = {
  user: "",
  setUser: (user: "") => {},
} as ChatContextinterface;

type ChildProps = {
  children: ReactNode;
};

const ChatContext = createContext(defaultState);
// const  Provider  = ChatContext;

const ChatProvider = ({ children }: ChildProps) => {
  const [user, setUser] = useState<string>(defaultState.user);
  const values = { user, setUser };
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "");
    if (userInfo) {
      setUser(userInfo);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

const ChatState = () => {
  useContext(ChatContext);
};

export { ChatProvider, ChatState };
