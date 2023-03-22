import React from "react";
import styled from "styled-components";
import FMPStube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500px;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

export const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={FMPStube} />
            FMPS
          </Logo>
        </Link>
      </Wrapper>
      <Item>
        <HomeIcon />
        Home
      </Item>
      <Item>
        <ExploreOutlinedIcon />
        Explore
      </Item>
      <Item>
        <SubscriptionsOutlinedIcon />
        Subscriptions
      </Item>
      <Hr />
      <Item>
        <VideoLibraryOutlinedIcon />
        Library
      </Item>
      <Item>
        <HistoryOutlinedIcon />
        History
      </Item>
      <Hr />
      <Login>
        Sign in to like, comment and subscribe.
        <br />
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Login>
      <Hr />
      <Title>BEST OF FMPS</Title>
      <Item>
        <LibraryMusicOutlinedIcon />
        Music
      </Item>
      <Item>
        <EmojiEventsOutlinedIcon />
        Sports
      </Item>
      <Item>
        <SportsEsportsOutlinedIcon />
        Gaming
      </Item>
      <Item>
        <MovieCreationOutlinedIcon />
        Movies
      </Item>
      <Item>
        <NewspaperOutlinedIcon />
        News
      </Item>
      <Item>
        <LiveTvOutlinedIcon />
        Live
      </Item>
      <Hr />
      <Item>
        <SettingsOutlinedIcon />
        Settings
      </Item>
      <Item>
        <FlagOutlinedIcon />
        Report
      </Item>
      <Item>
        <HelpOutlineOutlinedIcon />
        Help
      </Item>
      <Item onClick={() => setDarkMode(!darkMode)}>
        <LightModeOutlinedIcon />
        {darkMode ? "Light" : "Dark"} Mode
      </Item>
    </Container>
  );
};
