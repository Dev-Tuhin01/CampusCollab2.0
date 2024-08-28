import { Link as div } from "react-router-dom";
import { useNoticeContext } from "../../../context/noticeContext";
import { title } from "process";

const Notice =(props) =>{

  const {noticeTitle,noticeCreatedby,createdAt,_id,message} = props.notice;
  console.log(_id)
  const {setNotice} = useNoticeContext()

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
      <div onClick={()=>document.getElementById(`${_id}`).showModal()} >
        <h3 className="text-3xl">{noticeTitle}</h3>
        <div className="flex justify-between">
          <h5 className="text-xl">{noticeCreatedby}</h5>
          <h5 className="text-xl">{time}</h5>
        </div>
      </div>
      <dialog id={_id} className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{noticeTitle}</h3>
    <p className="py-4">{message} </p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Notice;
