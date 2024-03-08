import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { InfoCircledIcon, TextAlignTopIcon, LineHeightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const Header = ({data, openMenu, handleSetOpenMenu}: any) => {
  const [headers] = useState(data.dashboardContent);
  const router = useRouter();

  return (
    <header className="bg-gray-100 right-0 top-0 left-60 py-4 px-4 md:px-6 h-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Button
              variant="ghost"
              onClick={handleSetOpenMenu}
              className="lg:hidden flex items-center focus:outline-none rounded-lg text-white
              font-semibold p-2 transition">
              <span className="text-sm text-gray-700 focus:ring-2">
                {openMenu === 'hidden' ?
                  <TextAlignTopIcon className="w-8 h-8" /> :
                  <LineHeightIcon className="w-8 h-8" />
                }
              </span>
            </Button>
            {headers.data.Headermenu.map((item: any) => (
            <Button
              key={item.id}
              onClick={() => router.push(item.url)}
              variant="ghost"
              className="flex focus:outline-none rounded-lg text-white
              font-semibold p-2 transition">
              <span className="text-sm text-gray-700">{item.name}</span>
            </Button>
            )
            )}
          </div>
          <div className="flex gap-4">
              <div>
                <UserButton afterSignOutUrl={process.env.NEXT_PUBLIC_HOME_URL} />
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
