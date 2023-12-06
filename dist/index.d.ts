/**
 * This function installs the raychat widget
 * @param {string} token The first value. Get the token from https://raychat.io Function will return if token is null
 */
declare global {
    interface Window {
        RAYCHAT_TOKEN: string;
    }
}
export declare function raychat(token: string): void;
