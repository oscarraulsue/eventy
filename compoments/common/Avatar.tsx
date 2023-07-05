import React from "react";

export const Avatar = () => {
  return (
    <div className="rounded-full overflow-hidden">
      <img
        className="rounded-full w-10 h-10 p-1  ring-2 ring-gray-300 dark:ring-gray-500"
        style={{borderRadius: "50%", width: "50px", height: "50px"}}
        src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        alt="Bordered avatar"
      />
    </div>
  );
};
