export const CurrentPageReference = jest.fn();

const Navigate = Symbol("Navigate");
const GenerateUrl = Symbol("GenerateUrl");
export const NavigationMixin = (Base) => {
    return class extends Base {
        [Navigate](pageReference, replace) {
            //getNavService(this).navigateTo(pageReference, {replace});
        }

        [GenerateUrl](pageReference) {
            //return getNavService(this).generateUrl(pageReference);
        }
    };
};
NavigationMixin.Navigate = Navigate;
NavigationMixin.GenerateUrl = GenerateUrl;