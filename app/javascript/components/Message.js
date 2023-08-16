import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from "../redux/messagesSlice";

export const Message = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  console.log(messages);
  return (
    <div>
      <h2>Messages:</h2>
      {messages.content}
    </div>
  );
};
