export type CityType = {
    _id: string;
    name: string;
}

export type PriceInfoType = {
    bottom_price: number,
    side_price: number,
    top_price: number
}

export type SeatInfoType = {
    index: number,
    available: boolean
}

type CoachInfo = {
    "_id": "65a7e30493154100421a1667",
    "name": "СД-85",
    "class_type": "fourth",
    "have_wifi": true,
    "have_air_conditioning": true,
    "price": 0,
    "top_price": 603,
    "bottom_price": 738,
    "side_price": 0,
    "linens_price": 0,
    "wifi_price": 281,
    "is_linens_included": false,
    "available_seats": 50,
    "train": "65a7e30793154100421a1de6"
}

export type SeatsInfoType = {
    coach: CoachInfo,
    seats: SeatInfoType[]
}

export type DirectionType = {
    avaliable_seats: number,
    available_seats_info: {
        first?: number,
        second?: number,
        third?: number,
        fourth?: number,
    },
    departure?: {
        _id: string,
        avaliable_seats: number,
        available_seats_info: {
            first?: number,
            second?: number,
            third?: number,
            fourth?: number,
        },
        duration: number,
        from: {
            railway_station_name: string,
            datetime: number,
            city: CityType
        }
        have_air_conditioning: boolean,
        have_first_class: boolean,
        have_second_class: boolean,
        have_third_class: boolean,
        have_fourth_class: boolean,
        have_wifi: boolean,
        is_express: boolean,
        min_price: number,
        price?: {
            first?: number,
            second?: number,
            third?: number,
            fourth?: number,
        },
        price_info?: {
            first?: PriceInfoType,
            second?: PriceInfoType,
            third?: PriceInfoType,
            fourth?: PriceInfoType,
        },
        to: {
            railway_station_name: string,
            datetime: number,
            city: CityType
        },
        train: {
            _id: string,
            name: string,
        }
    },
    arrival?: {
        _id: string,
        avaliable_seats: number,
        available_seats_info: {
            first?: number,
            second?: number,
            third?: number,
            fourth?: number,
        },
        duration: number,
        from: {
            railway_station_name: string,
            datetime: number,
            city: CityType
        }
        have_air_conditioning: boolean,
        have_first_class: boolean,
        have_second_class: boolean,
        have_third_class: boolean,
        have_fourth_class: boolean,
        have_wifi: boolean,
        is_express: boolean,
        min_price: number,
        price: {
            first?: number,
            second?: number,
            third?: number,
            fourth?: number,
        },
        to: {
            railway_station_name: string,
            datetime: number,
            city: CityType
        },
        train: {
            _id: string,
            name: string,
        }
    },
    have_air_conditioning: boolean,
    have_first_class: boolean,
    have_second_class: boolean,
    have_third_class: boolean,
    have_fourth_class: boolean,
    have_wifi: boolean,
    is_express: boolean,
    min_price: number,
}