export interface iPaper {
  paperCode: string;
  paperName: string;
  teacherID: string;
  sub: [{
    subject:string,
    semester:string
  } ];
  isMinor: boolean;
}
