import { Observable } from 'rxjs';
export declare function callGrpc<T>(source$: Observable<T>, options: {
    source: string;
    timeoutMs: number;
}): Promise<T>;
