import { LegacySystemAdapter } from './LegacySystemAdapter';

export function adapterUseCase2(): void {
    const adapter = new LegacySystemAdapter();
    adapter.processData('Sample Data for Legacy System');
}
