import React from "react";
import { PageComponent } from "../../types/PageComponent";
import { WaitForWsAndAuth } from "../auth/WaitForWsAndAuth";
import { FollowingOnlineController } from "../dashboard/FollowingOnlineController";
import { ProfileBlockController } from "../dashboard/ProfileBlockController";
import {DefaultDesktopLayout} from "../layouts/DefaultDesktopLayout";
import { DesktopLayout } from "../layouts/DesktopLayout";
import { LeftPanel, MiddlePanel, RightPanel } from "../layouts/GridPanels";
import { FollowingController } from "../user/FollowingController";
import { UserProfileController } from "../user/UserProfileController";

interface PeoplesPageProps {}

export const PeoplesPage: PageComponent<PeoplesPageProps> = ({}) => {
  return (
    <WaitForWsAndAuth>
      <DefaultDesktopLayout>
        <MiddlePanel>
          <FollowingOnlineController />
        </MiddlePanel>
      </DefaultDesktopLayout>
    </WaitForWsAndAuth>
  );
};

PeoplesPage.ws = true;
