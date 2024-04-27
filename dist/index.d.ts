type Options = Partial<{
    hideWhitespace: boolean;
}>;
export declare const createTripByKey: (key: string) => string;
export declare const createTripByText: (text: string, options?: Options) => string;
export declare const createTrip: (text: string, options?: Options) => string;
export {};
