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
import { MyEstate } from "./screens/MyEstate";
import { FindPwd } from "./screens/FindPwd";
import { FindId } from "./screens/FindId";
import { UpdatePwd } from "./screens/UpdatePwd";
import { UpdateMemberInfo } from "./screens/UpdateMemberInfo";
import { Search } from "./screens/Search";

// Community screens 추가
import { Community } from "./screens/Community";
import { CommunityPost } from "./screens/CommunityPost";
import { CommunityWrite } from "./screens/CommunityWrite";

// ✅ AuthContext
import { AuthProvider } from "./screens/context/AuthContext";
import { Card } from "./screens/Search/Card";
import { Purchase } from "./screens/Purchase";

const router = createBrowserRouter([
  { path: "/", element: <Screen /> },
  { path: "/main", element: <Screen /> },
  { path: "/price", element: <ScreenScreen /> },
  { path: "/area", element: <ScreenWrapper /> },
  { path: "/join", element: <Screen3 /> },
  { path: "/favoriteRegion", element: <Screen4 /> },
  { path: "/economyIndicator", element: <Screen5 /> },
  { path: "/login", element: <Screen6 /> },
  { path: "/sideBar", element: <Screen7 /> },
  { path: "/region", element: <Screen8 /> },
  { path: "/mypage", element: <Screen9 /> },
  { path: "/favorite", element: <Favorite /> },
  { path: "/myEstate", element: <MyEstate /> },
  { path: "/findId", element: <FindId /> },
  { path: "/findpwd", element: <FindPwd /> },
  { path: "/updatePwd", element: <UpdatePwd /> },
  { path: "/updateMemberInfo", element: <UpdateMemberInfo /> },
  { path: "/search", element: <Search/> },
   { path: "/card", element: <Card/> },

  // Community 라우트
  { path: "/community", element: <Community /> },
  { path: "/community/post/:id", element: <CommunityPost /> },
  { path: "/community/write", element: <CommunityWrite /> },
  { path: "/community/edit/:id", element: <CommunityWrite /> },
  { path: "/purchase", element: <Purchase /> },


]);

export const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
