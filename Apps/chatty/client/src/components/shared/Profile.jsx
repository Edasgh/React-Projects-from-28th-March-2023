import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { useDateDifferenceFromNow } from "../../hooks/fromNow";

const Profile = () => {
  const joiningDate = "2024-05-12";
  const { years, months, days } = useDateDifferenceFromNow(joiningDate);
  const joiningTime =
    years > 0
      ? years == 1
        ? `${years} year ago`
        : `${years} years ago`
      : years == 0 && months > 0
      ? months == 1
        ? `${months} month ago`
        : `${months} months ago`
      : years == 0 && months == 0 && days > 0
      ? days == 1
        ? `${days} day ago`
        : `${days} days ago`
      : `Just Now`;

  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileSection
        text={"Eshita Das"}
        heading={"Name"}
        Icon={<i className="fa-regular fa-face-grin-wide"></i>}
      />
      <ProfileSection
        text={"eshita@20das"}
        heading={"Username"}
        Icon={<i className="fa-regular fa-envelope"></i>}
      />
      <ProfileSection
        text={"ssd fgfg hjhj klkl"}
        heading={"Bio"}
        Icon={<i className="fa-solid fa-user"></i>}
      />
      <ProfileSection
        text={joiningTime}
        heading={"Joined"}
        Icon={<i className="fa-solid fa-calendar-days"></i>}
      />
    </Stack>
  );
};

const ProfileSection = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}

      <Stack>
        <Typography variant={"body1"}>{text}</Typography>
        <Typography color="gray" variant="caption">
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
