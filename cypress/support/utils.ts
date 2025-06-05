export const GetServiceStackUrlPrefix = (url: string) => {
  return `${Cypress.env("serviceStack") || ""}${url}`;
};

export const GetNetCoreUrlPrefix = (url: string) => {
    return `${Cypress.env("netCore") || ""}${url}`;
}
