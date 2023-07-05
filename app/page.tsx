import { Header } from "@/compoments/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-[rgba(0,0,0,0.917)] flex w-full flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Header />
      </div>
      <div className="flex flex-1 mt-5 self-start">
        {
          discoArr.map((disco) => (
            <div key={disco.id} className="flex rounded-md border-gray-500 border-[1.5px] overflow-hidden flex-col w-[100px] mr-3 h-[150px]">
              <img
                src={disco.image}
                alt="Disco"
                style={{height: "100%", width: "100%"}}
              />
              <h1 className="text-[12px] font-bold text-center text-white dark:text-white mt-[-35px]">
                {disco.name}
              </h1>
            </div>
          ))
        }
      </div>
      </div>
      <div className="flex flex-col flex-1 w-full pt-5 bg-[rgba(0,0,0,0.86)] p-5">
        {
          discoArr.map((disco) => (
            <div key={disco.id} className="flex rounded-xl overflow-hidden flex-col w-full mb-3 h-[170px]">
              <img
                src={disco.image}
                alt="Disco"
                style={{height: "100%", width: "100%"}}
              />
              <h1 className="text-[12px] font-bold text-center text-white dark:text-white mt-[-35px]">
                {disco.name}
              </h1>
            </div>
          ))
        }
      </div>
    </main>
  );
}

const discoArr = [
  {
    name: "Disco 1",
    id: 1,
    image:
    "https://img.freepik.com/free-vector/silhouette-party-audience_1048-9714.jpg?w=2000",
  },
  {
    name: "Disco 2",
    id: 2,
    image:
    "https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161.jpg",
  },
  {
    name: "Disco 3",
    id: 3,
    image:
    "https://media.istockphoto.com/id/535403859/photo/dancing-at-disco.jpg?s=612x612&w=0&k=20&c=mVZX9qAsgnOv8C0t9gR81ofJ0JG20Orc4Io9r4AKNQQ=",
  },
  {
    name: "Disco 4",
    id: 4,
    image:
    "https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/3dd72590-3ab1-11ed-87ab-a6640985c4b1.jpg",
  },
  {
    name: "Disco 5",
    id: 5,
    image:
      "https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161.jpg",
  },
  {
    name: "Disco 6",
    id: 6,
    image:
    "https://img.freepik.com/free-vector/silhouette-party-audience_1048-9714.jpg?w=2000",
  },
  {
    name: "Disco 7",
    id: 7,
    image:
    "https://media.istockphoto.com/id/535403859/photo/dancing-at-disco.jpg?s=612x612&w=0&k=20&c=mVZX9qAsgnOv8C0t9gR81ofJ0JG20Orc4Io9r4AKNQQ=",
  },
  {
    name: "Disco 8",
    id: 8,
    image:
    "https://applications-media.feverup.com/image/upload/f_auto,w_550,h_550/fever2/plan/photo/3dd72590-3ab1-11ed-87ab-a6640985c4b1.jpg",
  },
];
