// @flow

export interface Meta {
    name?: string;
    license?: string;
    website?: string;
    page?: number;
    limit?: number;
    found?: number;
}

export interface Parameter {
    id: string;
    name: string;
    description: string;
    preferredUnit: string;
}


export interface Date {
    utc?: string;
    local?: string;
}

export interface Coordinate {
    latitude?: number;
    longitude?: number;
}

export interface Measurement {
    location: string;
    parameter: string;
    date: Date;
    value: number;
    unit: string;
    coordinates: Coordinate;
    country: string;
    city: string;
}

export interface Location {
    location: string;
    city: string;
    country: string;
    count: number;
    sourceNames: string[];
    lastUpdated: string;
    firstUpdated: string;
    parameters: string[];
    distance: number;
    sourceName: string;
    coordinates: Coordinate;
}

export interface City {
    city: string;
    country: string;
    location: number;
    count: number;
}

export interface Measurements {
    meta: Meta;
    results: Array<Measurement>;
}

export interface Parameters {
    meta: Meta;
    results: Array<Parameter>;
}

export interface Locations {
    meta: Meta;
    results: Array<Location>;
}

export interface Cities {
    meta: Meta;
    results: Array<City>;
}