import { NewSystemInterface } from './NewSystemInterface';

import { LegacySystem } from './LegacySystem';

export class LegacySystemAdapter implements NewSystemInterface {
    private legacySystem: LegacySystem;

    constructor() {
        this.legacySystem = new LegacySystem();
    }

    public processData(data: string): void {
        // Adapt the interface
        this.legacySystem.legacyOperation(data);
    }
}
