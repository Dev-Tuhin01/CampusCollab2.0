import { ChangeEvent, useEffect, useState } from "react";

const StudentEnroll = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [sems, setSems] = useState<string[]>([]);
  const semList = ["1st","2nd","3rd","4th","5th","6th"];

  const changeCourseHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(event.target.value);
  };

  useEffect(() => {
    const subjectUG = ["BCA", "Bsc CS"];
    const subjectPG = ["Msc CIS", "Msc CS"];
    if (selectedCourse === "UG") {
      setSubjects(subjectUG);
      setSems(semList)
    } else if (selectedCourse === "PG") {
      setSubjects(subjectPG);
      setSems(semList.slice(0,4))
    } else {
      setSubjects([]);
      setSems([])
    }
  }, [selectedCourse]);

  return (
    <div className="flex flex-col items-center m-5">
      <h1 className="md:text-7xl text-4xl text-primary">Student Enrolment Form</h1>
      <div className="divider" />
      <form className="h-full md:w-8/12 w-11/12 border p-4 rounded bg-neutral">
        <label className="form-control ">
          <div className="label">
            <span className="label-text text-secondary">Enter Student's Name*</span>
          </div>
          <input type="text" placeholder="John Doe...." className="input input-bordered" />
        </label>
        <label className="form-control ">
          <div className="label">
            <span className="label-text text-secondary">Enter Student's Email*</span>
          </div>
          <input type="email" placeholder="johndoe123@gmail.com...." className="input input-bordered" />
        </label>
        <label className="form-control ">
          <div className="label">
            <span className="label-text text-secondary">Enter Student's Password*</span>
          </div>
          <input type="password" placeholder="6a80008@55!!-1..." className="input input-bordered" />
        </label>
        <div className="flex w-full flex-wrap justify-between">
          <label className="form-control">
            <div className="label">
              <span className="label-text text-secondary">Which department the Student is enrolling? </span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Name of the department?
              </option>
              <option value="CIS">CIS</option>
            </select>
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text text-secondary">Which Course the Student is enrolling? </span>
            </div>
            <select className="select select-bordered" onChange={changeCourseHandler}>
              <option disabled selected>
                Ug/Pg?
              </option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-secondary">Which subject the Student is enrolling? </span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                Name of Subject
              </option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-secondary">Which Semester the Student is in? </span>
            </div>
            <select className="select select-bordered">
              <option disabled selected>
                No. of Semester
              </option>
              {
                sems.map((s)=>(
                  <option key={s} value={s}> {s} </option>
                ))
              }
            </select>
          </label>
        </div>
        <label className="form-control ">
          <div className="label">
            <span className="label-text text-secondary">Enter Student's Admission Year*</span>
          </div>
          <input type="text" placeholder="2024..." className="input input-bordered" />
        </label>
        <div>
          <label className="form-control w-1/12">
            <div className="label">
              <span className="label-text text-secondary">Gender</span>
            </div>
            <label className="label cursor-pointer">
              <span className="label-text">Male</span>
              <input type="radio" name="gender" className="radio checked:bg-secondary" />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text">Female</span>
              <input type="radio" name="gender" className="radio checked:bg-secondary" />
            </label>
          </label>
        </div>
        <div className="divider" />
        <button className="btn btn-secondary">Submit</button>
        <button className="btn btn-neutral">Cancel</button>
      </form>
    </div>
  );
};

export default StudentEnroll;

