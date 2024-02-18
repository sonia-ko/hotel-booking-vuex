export type bookingDetail = {
  id: number;
  name: string;
  phone: string;
  email: string;
  typeOfApartments: string;
  guestInfo: { adults: number; children: number };
  start: string;
  duration: number;
  timed: boolean;
  height: number;
  type: string;
  roomDetails: {
    id: number;
    name: string;
  };
  end: string;
};
