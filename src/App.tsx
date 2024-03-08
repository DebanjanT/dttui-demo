import { Button, TabItem, Tabs } from "@dtt.ltd/react-ui";
import { BookOpenCheck, HandCoins, MenuSquare, UsersRound } from "lucide-react";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("Menu");
  const tabs = [
    {
      label: "Menu",
      value: "Menu",
      icon: <MenuSquare />,
    },
    {
      label: "Price",
      value: "Price",
      icon: <HandCoins />,
    },
    {
      label: "Docs",
      value: "Docs",
      icon: <BookOpenCheck />,
    },
    {
      label: "Developers",
      value: "Developers",
      icon: <UsersRound />,
    },
  ];
  return (
    <div className=" bg-slate-50">
      <div className="flex justify-between items-center px-3 bg-white h-[48px] shadow-sm">
        <p className="text-black font-bold madimi-one text-xl ">
          <span className="text-[#6200EE]">Dtt</span>-UI
        </p>
        <div className="md:flex md:justify-center md:items-center md:gap-2 h-full hidden">
          <Tabs defaultTab={tab} onTabChange={(tab) => setTab(tab)}>
            {tabs.map((tab, index) => (
              <TabItem
                variant="curved"
                key={index}
                label={tab.label}
                value={tab.value}
                icon={tab.icon}
              />
            ))}
          </Tabs>
        </div>
        <Button className="font-bold">Add Invoice</Button>
      </div>
      <div className="min-h-[calc(100vh-48px)] flex flex-col justify-start items-center py-3 px-2 relative">
        <p className="text-slate-700 madimi-one text-4xl mt-10">
          Built With{" "}
          <span className="md:bg-slate-200/90 md:border border-slate-300 px-2 rounded-full mr-2">
            <span className="text-[#6200EE]">Dtt</span>-UI
          </span>
          & TailwindCSS
        </p>
        <div className="mt-6 shadow bg-white p-6 w-full max-w-lg rounded">
          <p className="text-black flex justify-start items-center gap-1">
            Slected tab:{" "}
            <pre className="text-sm madimi-one">
              {JSON.stringify(tab, null, 4)}
            </pre>
          </p>
        </div>
        <p className="absolute bottom-4 right-4 text-black text-sm">
          🚀 Built by{" "}
          <span className="madimi-one font-semibold text-[#6200EE]">
            Debanjan Tewary
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
