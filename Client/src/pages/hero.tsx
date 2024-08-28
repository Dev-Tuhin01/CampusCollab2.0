import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

const hero = () => {
  return (
  <div className="snap-y snap-mandatory">
      <div className="hero bg-cover bg-no-repeat min-h-screen"  style={{backgroundImage:"url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fraiganjuniversity.ac.in%2Fwp-content%2Fuploads%2F2019%2F06%2Fslider7.jpg&f=1&nofb=1&ipt=fae7c9ad2e022d537b8d8195a30de46db9b0d4e590e0dc4b7993ba58a471e1fc&ipo=images)"}}>
        <div className="hero-overlay  bg-neutral bg-opacity-80" style={{gridColumnStart:0}} />
        <div className="hero-content text-neutral-content w-8/12 rounded-3xl flex-col ">
          <h2 className="text-8xl text-slate-50">CampusCollab</h2>
          <div className="divider" />
          <p className="text-xl w-full text-center">Your one stop solltion for all your problems regarding communtication <br /> Let's begin our tour of the app </p>
          <div className="w-full flex flex-row justify-around m-2">
          <Link to={"app/chat"} className="w-5/12 h-32 "><div className="btn w-full h-full btn-warning glass text-xl font-bold">App</div></Link>
          <Link to={"admin"} className="w-5/12 h-32"><div className="btn w-full h-full btn-error glass text-xl font-bold">Admin</div></Link>
          
          </div>
        </div>
      </div>
      <div className="bg-neutral flex flex-col items-center justify-center w-full min-h-screen p-4">
        <h1 className="text-6xl text-primary">Tech Stack used</h1>
        <div className="divider" />
        <div className="flex w-full items-center justify-around">
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcodeitworld.com%2Fwp-content%2Fuploads%2F2019%2F12%2Fmonggo-db.jpg&f=1&nofb=1&ipt=0211ed9903940a2d703d7029f30efe5ee8bef51833cabc3d1e37f52e942ba4dc&ipo=images" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fexpress-js-icon-20.png&f=1&nofb=1&ipt=2e06e98bf5e556a0e477841a7345546fa0fd1da4a2ff714e56d8d178ece959b1&ipo=images" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Freact-1-logo-png-transparent.png&f=1&nofb=1&ipt=1c12124c49b437ddabb6f90860f39034edba39fb4e0a7ab123ce4d6f4e7a3162&ipo=images" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.liblogo.com%2Fimg-logo%2Fno6273n057-node-js-logo-nodejs-transparent-logo-google-search.png&f=1&nofb=1&ipt=fbe86dc16e3d53380fdad8c5d68ecb2082d6085e733c442babaf0bac68dcd152&ipo=images" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-32 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4c%2FTypescript_logo_2020.svg%2F1200px-Typescript_logo_2020.svg.png&f=1&nofb=1&ipt=c09ad82b8be5a08d2c7171c2802237af7abd90e8aea61a0727cca3f413ce65d3&ipo=images" />
            </div>
          </div>
        </div>
        <div className="divider px-10 mt-10" />
        <h3 className="text-5xl text-secondary">Other Tools Used</h3>
        <div className="divider" />
        <div className="flex w-full items-center justify-around">
          <div className="avatar">
            <div className="w-28 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogowik.com%2Fcontent%2Fuploads%2Fimages%2Ftailwind4523.jpg&f=1&nofb=1&ipt=b6b24963dc33b29280b68225e42552ea5b791ae217a0d4af3acf8c1afa2a885f&ipo=images" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-28 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ni9fqitlb-cKQKy6evmb8wHaDt%26pid%3DApi&f=1&ipt=048f8c5a22402b0a9f9779350791e6f73f4adb70d179ef8a8120faa6750ded6c&ipo=images"  />
            </div>
          </div>
          <div className="avatar">
            <div className="w-28 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F10566080%3Fv%3D3%26s%3D400&f=1&nofb=1&ipt=e51bc2849b8db523c18456e1f3442053ab3ec6e12a15b2855bd66131b6ec3eca&ipo=images" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-28 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FJ%2Fjson-web-tokens-jwt-io-logo-C003DEC47A-seeklogo.com.png&f=1&nofb=1&ipt=b24be9f7db6e8980e20168725fd868823ead8fff3ef2bbb741928f3a50fceb42&ipo=images" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-28 rounded-full">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nbhS7478CTrHOJ3BEbQYLQHaC-%26pid%3DApi&f=1&ipt=dcd818387ae77fc715687aa17290e88154489d4982ce8a34158ed2aa23acddff&ipo=images" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full bg-base-100 flex items-center justify-center">
        <div className="min-h-96 items-center justify-center rounded-xl m-10 bg-neutral bg-opacity-90 flex">
          <div className="h-full w-1/2 text-6xl">
            Click here to visit our website: <a href="https://youtu.be/mcYLzu_1cNc?si=na2AK-q82GKpE9Cnhttps://youtu.be/mcYLzu_1cNc?si=na2AK-q82GKpE9Cn" className="text-accent">here</a>
          </div>
          <div className="divider divider-horizontal">or</div>
          <div className="">
            <QRCode value="https://youtu.be/mcYLzu_1cNc?si=na2AK-q82GKpE9Cn" />
          </div>
        </div>
      </div>
  </div>
  )
}

export default hero;
