import React, { ReactNode } from "react";
import { SolidRocket } from "../../icons";

export interface GenericNotificationProps {
  notificationMsg: ReactNode;
  time: string;
  actionButton?: ReactNode;
  icon?: ReactNode;
}

export const GenericNotification: React.FC<GenericNotificationProps> = ({
  notificationMsg,
  time,
  actionButton,
  icon,
}) => {
  return (
    <div className="flex items-center w-full">
      <div className="mr-3 w-6 h-6 bg-primary-800 rounded-full items-center justify-center flex-shrink-0">
        {icon ? icon : <SolidRocket className="text-primary-300" />}
      </div>
      <div className="flex flex-col mr-2">
        <div className="text-primary-100 flex-wrap">
          {notificationMsg ? notificationMsg : "you have a new notification"}
        </div>
        <div className="text-primary-300 text-sm">
          {time ? time : "some time ago"}
        </div>
      </div>
      {actionButton ? <div className="ml-auto">{actionButton}</div> : null}
    </div>
  );
};
