import axios from 'axios';
/**
 * This service is used to pre-configure axios for any service we create.
 */
export class BaseService {
    /**
     * Initialize our basic service settings.
     */
    constructor() {
        axios.defaults.headers.common.Accept = 'application/json';
        axios.defaults.headers.common['Content-Type'] = 'application/json';
    }
}
