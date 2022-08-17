/* eslint-disable @typescript-eslint/ban-types, no-invalid-this, @typescript-eslint/no-explicit-any */

import { StripeElements } from '../stripe-elements';

function wrap(f: (...args: unknown[] ) => unknown) {
  return (_target: Object, _property: string, descriptor: TypedPropertyDescriptor<any>) => {
    const original = descriptor.value;
    descriptor.value = f(original);
    return descriptor;
  };
}

export const stripeMethod = wrap(function(f: any) {
  const { name } = f;
  return async function(this: StripeElements, ...args: unknown[]) {
    if (!this.stripe) throw new Error(`<${StripeElements.is}>: Stripe must be initialized before calling ${name}.`);
    return f.call(this, ...args)
      .then(this.handleResponse);
  };
});
