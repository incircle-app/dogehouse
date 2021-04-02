import {useRouter} from "next/router";
import React from "react";
import {PageComponent} from "../../types/PageComponent";
import {BubbleText} from "../../ui/BubbleText";
import {RoomCardHeading} from "../../ui/RoomCardHeading";
import {DefaultDesktopLayout} from "../layouts/DefaultDesktopLayout";
import {MiddlePanel} from "../layouts/GridPanels";

interface UserPageProps {}

const Establishments = [
  {id: 1, name: 'ecole 42 paris', students: 344, description: 'située boulevard bessiere etc...', countryCode: 'FR', studentsOnline: 23},
  {id: 2, name: 'ecole 42 us', students: 234, description: 'située dans la silicon valley etc...', countryCode: 'USA',studentsOnline: 12},
];

export const EstablishmentPage: PageComponent<UserPageProps> = ({}) => {
  const { push } = useRouter();
  return (
    <DefaultDesktopLayout>
      <MiddlePanel>
        <div className="flex-col rounded-8 pt-5 px-6 pb-4 w-full items-center">
          {Establishments.map((establishment) => (
            <button
              key={establishment.id}
              onClick={() => push(`discovery/${establishment.id}`)}
              className="p-4 w-full bg-primary-800 hover:bg-primary-800 rounded-lg flex flex-col mb-2"
            >
              <div className="w-full flex justify-between space-x-4">
                <div className="flex-col">
                  <RoomCardHeading
                    text={establishment.name}
                  />
                  <div className="text-primary-300 mt-2 break-words block text-left">
                    {establishment.description}
                  </div>
                </div>
                <div className="flex-shrink-0 flex-col">
                  <BubbleText>
                    {establishment.students}
                  </BubbleText>
                  <BubbleText live={true}>
                    {establishment.studentsOnline}
                  </BubbleText>
                </div>
              </div>
            </button>
          ))}
        </div>
      </MiddlePanel>
    </DefaultDesktopLayout>
  );
};

EstablishmentPage.ws = true;
