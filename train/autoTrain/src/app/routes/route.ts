export interface Train {
  Trainno: string;
  OrignStation: string;
  DestinationStation: string;
  ArrivalTime: string;
  DepartureTime: string;
  StopStations: any;
  LineNumber: string;
  Route: string;
  Midnight: boolean;
  Handicap: boolean;
  DirectTrain: boolean;
  TrainParvariBenironi: null;
  ReservedSeat: boolean;
  Platform: string;
  DestPlatform: string;
  IsFullTrain: boolean;
}

export interface Route {
  Train: Train[];
  IsExchange: boolean;
  EstTime: string;
}
