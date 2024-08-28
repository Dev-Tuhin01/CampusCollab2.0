import { Link } from "react-router-dom";

const Notice =(props) =>{

  const {noticeTitle,noticeCreatedby,createdAt,_id} = props.notice;
  console.log(props.notice)

  // Formatting the time from createdAt if available
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Assuming createdAt is a Date object or can be parsed into one
  const time = createdAt ? formatTime(new Date(createdAt)) : 'No Time';

  return (
    <div className="w-full min-h-2 p-4 border border-black rounded-xl">
      <Link to={_id}>
      <h3 className="text-3xl">{noticeTitle}</h3>
      <div className="flex justify-between">
        <h5 className="text-xl">{noticeCreatedby}</h5>
        <h5 className="text-xl">{time}</h5>
      </div>
      </Link>
    </div>
  )
}

export default Notice;
