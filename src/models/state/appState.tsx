export interface IAppState {
    isInitializing: boolean; // first loading
    isLoading: boolean;
    isAuthorized: boolean;

}

export class AppState implements IAppState {
    isInitializing: boolean; // first loading
    isLoading: boolean;
    isAuthorized: boolean;


    constructor() {
        this.isInitializing = false;        
        this.isLoading = false;        
        this.isAuthorized = false;
 
    }
}