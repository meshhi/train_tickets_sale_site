export type CityType = {
    _id: string;
    name: string;
}

export type DirectionType = {
    avaliable_seats: number,
    available_seats_info: {
        first?: number,
        second?: number,
        third?: number,
        fourth?: number,
    },
    departure: {
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