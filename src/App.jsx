import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Screen } from "./screens/Screen";
import { ScreenScreen } from "./screens/ScreenScreen";
import { ScreenWrapper } from "./screens/ScreenWrapper";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { Favorite } from "./screens/Favorite";
import { MyEstate } from "./screens/MyEstate"; // 파일 경로에 맞게 수정
import { FindPwd } from "./screens/FindPwd";
import { FindId } from "./screens/FindId";
import { UpdatePwd } from "./screens/UpdatePwd";
import { UpdateMemberInfo } from "./screens/UpdateMemberInfo";


const router = createBrowserRouter([
  { path: "/", element: <Screen /> },
  {
    path: "/main",
    element: <Screen />,
  },
  {
    path: "/price",
    element: <ScreenScreen />,
  },
  {
    path: "/area",
    element: <ScreenWrapper />,
  },
  {
    path: "/join",
    element: <Screen3 />,
  },
  {
    path: "/favoriteRegion",
    element: <Screen4 />,
  },
  {
    path: "/economyIndicator",
    element: <Screen5 />,
  },
  {
    path: "/login",
    element: <Screen6 />,
  },
  {
    path: "/sideBar",
    element: <Screen7 />,
  },
  {
    path: "/region",
    element: <Screen8 />,
  },
  {
    path: "/mypage",
    element: <Screen9 />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/myEstate",
    element: <MyEstate />,
  },
  {
    path: "*",
    element: <Screen />,
  },
    {
    path: "/findId",
    element: <FindId />,
  },
  {
    path: "/updatePwd",
    element: <UpdatePwd />,
  },
  {
    path: "/updateMemberInfo",
    element: <UpdateMemberInfo />,
  },
  {
    path: "/findPwd",
    element: <FindPwd />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
