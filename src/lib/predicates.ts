export const elem = (xs: Array<string>) => (x: string) => xs.includes(x);

export const not = (p: (x: string) => boolean) => (x: string) => !p(x);

export const isRepresentation = elem(['paymentMethod', 'source', 'token']);
