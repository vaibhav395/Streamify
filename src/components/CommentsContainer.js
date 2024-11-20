import React from "react";

const commentsData = [
  {
    name: "Vaibhav Thareja",
    text: "Lorem ipsum halt div iquou",
    replies: [
      {
        name: "Person 1",
        text: "Lorem ipsum gwjwn ayydhudh",
        replies: [
          {
            name:"person 2",
            text:"Lorem ipsum reply 2",
            replies:[{
              name:"Person 3",
              text:"Lorem ipsum lite",
              replies:[{
                name:"Person 5",
                text:"Lorem ipsum text another",
                replies:[]
              }]
            }]
          }
        ],
      },
    ],
  },
  {
    name: "Vaibhav Thareja",
    text: "Lorem ipsum halt div iquou",
    replies: [{
        name:"Person 3",
        text:"Reply here",
        replies:[
            {
                name:"Person 4",
                text:"hello another reply",
                replies:[]
            }
        ]
    }],
  },
  {
    name: "Vaibhav Thareja",
    text: "Lorem ipsum halt div iquou",
    replies: [],
  },
  {
    name: "Vaibhav Thareja",
    text: "Lorem ipsum halt div iquou",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-200 p-2 rounded-md shadow-lg my-4">
      <img
        className="h-8 w-8"
        alt="icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div>
        <p className="font-bold text-lg mx-2">{name}</p>
        <p className="mx-2">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black">
        <CommentsList comments={comment?.replies}/>
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="text-2xl font-bold my-3">Comments : </h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
