import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarUI from "./Navbar.Presenter";
import styled from "styled-components";
import { auth, logout } from "../../_action/user_action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const LoadingNavBar = styled.div`
  height: 33px;
`;

export default function Nabar() {
  const dispatch = useDispatch();
  const user: any = useSelector((state) => state);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const onClickLogOut = () => {
    // @ts-ignore
    dispatch(logout()).then((res) => setIsLogin(res.payload));
  };

  useEffect(() => {
    // @ts-ignore
    setIsLogin(user.user.loginState);
  }, [navigate]);

  return (
    <NavbarUI
      isLogin={isLogin}
      onClickLogOut={onClickLogOut}
      navigate={navigate}
    />
  );
}
