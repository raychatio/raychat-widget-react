declare global {
    interface Window {
        RAYCHAT_TOKEN: string;
    }
}
/**
 * This function installs the raychat widget
 * @param {string} token The first value.
 * Get the token from https://raychat.io
 *
 * @see https://www.npmjs.com/package/@mahdivajdi/raychat-react
 *
 * @returns will return if token is null
 */
export declare function raychat(token: string): void;
