import { Store } from "pullstate";

export const authStore = new Store({
    authenticated: false,
    userId: ''  
});