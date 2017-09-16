export interface IAppState{
    isInitializing: boolean; // first loading
    isLoading: boolean;
    isAuthorized: boolean;
    currency: any;
}

export class AppState implements IAppState{
    isInitializing: boolean; // first loading
    isLoading: boolean;
    isAuthorized: boolean;
    currency: any;

    constructor() {
        this.isInitializing = false;        
        this.isLoading = false;        
        this.isAuthorized = false;        
        this.currency = null;        
    }
}