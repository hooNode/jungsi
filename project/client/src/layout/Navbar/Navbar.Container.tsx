import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarUI from "./Navbar.Presenter";
import styled from "styled-components";
import { auth } from "../../_action/user_action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const LoadingNavBar = styled.div`
  height: 33px;
`;

export default function Nabar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onClickLogOut = async () => {
    await axios.get("/api/users/logout").then((res) => {
      if (res.status == 200) {
        alert(res.data.message);
        navigate("/login");
      } else {
        alert("로그아웃이 되지 않았습니다.");
      }
    });
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(auth()).then((res) => setIsLogin(res.payload.isAuth));
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [navigate]);

  if (isLoading) return <LoadingNavBar />;

  return (
    <NavbarUI
      isLogin={isLogin}
      onClickLogOut={onClickLogOut}
      navigate={navigate}
    />
  );
}
