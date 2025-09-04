export interface Pokemon {
    image: string;
    id: number;
    name: string;
    types: string[];
    height: number;
    weight: number;
    stats: {
        name: string;
        value: number;
    }[];
}