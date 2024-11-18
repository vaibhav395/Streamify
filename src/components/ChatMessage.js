const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-md p-2">
      <img
        className="h-8 w-8"
        alt="icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
