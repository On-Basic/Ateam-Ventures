import React from "react";

export interface IRequests {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export type RequestsArray = IRequests[];

export type IGetData = React.Dispatch<
  React.SetStateAction<RequestsArray | null>
>;
